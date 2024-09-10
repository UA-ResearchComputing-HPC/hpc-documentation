If you've spent more than a minute with ParaView you're already aware that there are some things that could use a little more explanation. There's really just too much to cover in the depth that most beginners/intermediate users need. This page is meant to help shed a little bit of light on another subject that is shrouded in a deep layer of mystery, namely making plugins with Python. Unfortunately, this tutorial is not without sections that are less well understood, but hopefully in between those sections there's some value!

For many purposes it might be useful to look through examples of scripts and plugins, so for access to an ever evolving scratch space of these kinds of files please refer to [https://github.com/DevinBayly/paraview_code](https://github.com/DevinBayly/paraview_code).

Before going to much further just know this page will not document or explain things like the decoration options that create widgets for filter options. In fact, there are quite a few things related to the `@`-prefixing of methods that won't be discussed until a later date. Due to this limitation it may be useful to layout upfront that much of the true instructional material is captured in comments on the source code from [https://github.com/Kitware/ParaView/blob/cdb6fa76693885dd14af49d91d9b6177710f7267/Examples/Plugins/PythonAlgorithm/PythonAlgorithmExamples.py](https://github.com/Kitware/ParaView/blob/cdb6fa76693885dd14af49d91d9b6177710f7267/Examples/Plugins/PythonAlgorithm/PythonAlgorithmExamples.py), and more generally from [https://github.com/Kitware/ParaView/tree/cdb6fa76693885dd14af49d91d9b6177710f7267/Examples/Plugins](https://github.com/Kitware/ParaView/tree/cdb6fa76693885dd14af49d91d9b6177710f7267/Examples/Plugins).

## Example Plugin

[https://github.com/DevinBayly/paraview_code/blob/main/time_series_reader_plugin.py](https://github.com/DevinBayly/paraview_code/blob/main/time_series_reader_plugin.py)

This plugin was designed to make it possible to point ParaView to a folder of Python NumPy array files that each store a point cloud at a particular moment in time. The benefit of using this plugin is that now in ParaView as we scrub through a timeline interface element the plugin will load new NumPy files and update the viewport. The sections that follow will attempt to explain what the different methods of the plugin do, and this will ideally provide departure points for reader's own usecases.

First the entire source is shown and then the step by step sections will follow.

```python
"""This module demonstrates various ways of adding
VTKPythonAlgorithmBase subclasses as filters, sources, readers,
and writers in ParaView"""


# This is module to import. It provides VTKPythonAlgorithmBase, the base class
# for all Python-based vtkAlgorithm subclasses in VTK and decorators used to
# 'register' the algorithm with ParaView along with information about UI.
from paraview.util.vtkAlgorithm import *
import uuid
from pathlib import Path



#------------------------------------------------------------------------------
# A reader example.
#------------------------------------------------------------------------------
def createModifiedCallback(anobject):
    import weakref
    weakref_obj = weakref.ref(anobject)
    anobject = None
    def _markmodified(*args, **kwars):
        o = weakref_obj()
        if o is not None:
            o.Modified()
    return _markmodified

# To add a reader, we can use the following decorators
#   @smproxy.source(name="PythonnumpyReader", label="Python-based numpy Reader")
#   @smhint.xml("""<ReaderFactory extensions="csv" file_description="NumPy numpy files" />""")
# or directly use the "@reader" decorator.
@smproxy.reader(name="Sama Lidar Numpy Reader",
                label="Python-based Numpy pcd Reader for timeseries data",
                extensions="npy",
                file_description="Numpy files")
class PythonNumpyPCDReader(VTKPythonAlgorithmBase):
    """A reader that reads a NumPy file. If the NumPy has a "time" column, then
    the data is treated as a temporal dataset"""
    def __init__(self):
        VTKPythonAlgorithmBase.__init__(self, nInputPorts=0, nOutputPorts=1, outputType='vtkPolyData')
        self._filename = None
        self._ndata = None
        self._timesteps = None
        print("starting",uuid.uuid1())

        from vtkmodules.vtkCommonCore import vtkDataArraySelection
        self._arrayselection = vtkDataArraySelection()
        self._arrayselection.AddObserver("ModifiedEvent", createModifiedCallback(self))

    def _get_raw_data(self, requested_time=None):
        import numpy
        if self._ndata is not None:
            if requested_time is not None:
                ##### load specific npy file from fnmes
                fname = self.fnames[int(requested_time)]
                self._ndata = numpy.load(fname)
                print(self._ndata.dtype)
                # self._ndata.dtype = numpy.dtype([("x",numpy.float32),("y",numpy.float32),("z",numpy.float32),("intensity",numpy.float32)])
                return self._ndata
            return self._ndata

        if self._filename is None:
            # Note, exceptions are totally fine!
            raise RuntimeError("No filename specified")

        # self._ndata = numpy.genfromtxt(self._filename, dtype=None, names=True, delimiter=',', autostrip=True)
        self.pth = Path(self._filename)
        self.fnames = list(self.pth.parent.rglob("*npy"))
        self.fnames.sort()
        times =  [i for i,e in enumerate(self.fnames)]
        self._ndata = 0
        self._timesteps = times

        return self._get_raw_data(requested_time)

    def _get_timesteps(self):
        self._get_raw_data()
        return self._timesteps if self._timesteps is not None else None

        def _get_update_time(self, outInfo):
        executive = self.GetExecutive()
        timesteps = self._get_timesteps()
        if timesteps is None or len(timesteps) == 0:
            return None
        elif outInfo.Has(executive.UPDATE_TIME_STEP()) and len(timesteps) > 0:
            utime = outInfo.Get(executive.UPDATE_TIME_STEP())
            print("using inner method get update time",utime)
            dtime = timesteps[0]
            for atime in timesteps:
                if atime > utime:
                    return dtime
                else:
                    dtime = atime
            return dtime
        else:
            assert(len(timesteps) > 0)
            return timesteps[0]

    def _get_array_selection(self):
        return self._arrayselection

    @smproperty.stringvector(name="FileName")
    @smdomain.filelist()
    @smhint.filechooser(extensions="npy", file_description="Numpy pcd file")
    def SetFileName(self, name):
        """Specify filename for the file to read."""
        print(name)
        if self._filename != name:
            self._filename = name
            self._ndata = None
            self._timesteps = None
            self.Modified()

    @smproperty.doublevector(name="TimestepValues", information_only="1", si_class="vtkSITimeStepsProperty")
    def GetTimestepValues(self):
        print("getting time steps")
        return self._get_timesteps()

    # Array selection API is typical with readers in VTK
    # This is intended to allow ability for users to choose which arrays to
    # load. To expose that in ParaView, simply use the
    # smproperty.dataarrayselection().
    # This method **must** return a `vtkDataArraySelection` instance.
    @smproperty.dataarrayselection(name="Arrays")
    def GetDataArraySelection(self):
        return self._get_array_selection()

    def RequestInformation(self, request, inInfoVec, outInfoVec):
        print("requesting information")
        executive = self.GetExecutive()
        outInfo = outInfoVec.GetInformationObject(0)
        outInfo.Remove(executive.TIME_STEPS())
        outInfo.Remove(executive.TIME_RANGE())

        timesteps = self._get_timesteps()
        if timesteps is not None:
            for t in timesteps:
                outInfo.Append(executive.TIME_STEPS(), t)
            outInfo.Append(executive.TIME_RANGE(), timesteps[0])
            outInfo.Append(executive.TIME_RANGE(), timesteps[-1])
        return 1

    def RequestData(self, request, inInfoVec, outInfoVec):
        print("requesting data")
        from vtkmodules.vtkCommonDataModel import vtkPolyData
        from vtkmodules.numpy_interface import dataset_adapter as dsa
        import vtk

        data_time = self._get_update_time(outInfoVec.GetInformationObject(0))

        output = dsa.WrapDataObject(vtkPolyData.GetData(outInfoVec, 0))
        points = self._get_raw_data(data_time)
        #points = self._ndata

        vpoints = vtk.vtkPoints()
        vpoints.SetNumberOfPoints(points.shape[0])
        intensity = vtk.vtkFloatArray()
        intensity.SetNumberOfComponents(1)
        intensity.SetName("Intensity")
        intensity.SetNumberOfTuples(points.shape[0])
        for i in range(points.shape[0]):
            vpoints.SetPoint(i, points[i][:3])
            intensity.SetTuple1(i, points[i][3])

        output.GetPointData().SetScalars(intensity)

        output.SetPoints(vpoints)

        vcells = vtk.vtkCellArray()

        for i in range(points.shape[0]):
            vcells.InsertNextCell(1)
            vcells.InsertCellPoint(i)

        output.SetVerts(vcells)

        if data_time is not None:
            output.GetInformation().Set(output.DATA_TIME_STEP(), data_time)
        return 1
```

Breaking this down we will begin with a helper function from the top.

```python
"""This module demonstrates various ways of adding
VTKPythonAlgorithmBase subclasses as filters, sources, readers,
and writers in ParaView"""


# This is module to import. It provides VTKPythonAlgorithmBase, the base class
# for all Python-based vtkAlgorithm subclasses in VTK and decorators used to
# 'register' the algorithm with ParaView along with information about UI.
from paraview.util.vtkAlgorithm import *
import uuid
from pathlib import Path



#------------------------------------------------------------------------------
# A reader example.
#------------------------------------------------------------------------------
def createModifiedCallback(anobject):
    import weakref
    weakref_obj = weakref.ref(anobject)
    anobject = None
    def _markmodified(*args, **kwars):
        o = weakref_obj()
        if o is not None:
            o.Modified()
    return _markmodified
```

Starting off with a bit of a still unclear boilerplate helper function. Best guess is this function is used later in the class to make sure that ParaView tracks that our object (NumPy point cloud) has been modified, and the downstream rendering updates need to happen. This may be because ParaView has a lazy pipeline evaluation implementation, where filters in the processing pipeline only evaluate when changes have occurred.

Now lets inspect the beginning of the actual class defining the NumPy array reader plugin.

So this class can be named whatever we like, but it must inherit from the Python algorithm base. In my case I've filled in some of the values in the header so that the reader works with "npy" extension files.

As with other inherited classes in Python it makes sense to initialize the parent class within the `init` method of the subclass.

The lines creating member variables are used later on within the class methods, but aren't intended to be accessed by the user so they start with underscores.

The print statement is also just a sanity check that we have started the initialization of the plugin prior reading in an actual file. It's nice for development's sake to have a message that looks slightly different if changes to the source are made and the plugin is reloaded.

```python
# To add a reader, we can use the following decorators
#   @smproxy.source(name="PythonnumpyReader", label="Python-based Numpy Reader")
#   @smhint.xml("""<ReaderFactory extensions="csv" file_description="Numpy numpy files" />""")
# or directly use the "@reader" decorator.
@smproxy.reader(name="Sama Lidar Numpy Reader", label="Python-based Numpy pcd Reader for timeseries data",
                extensions="npy",
                 file_description="Numpy files")
class PythonNumpyPCDReader(VTKPythonAlgorithmBase):
    """A reader that reads a NumPy file. If the NumPy has a "time" column, then
    the data is treated as a temporal dataset"""
    def __init__(self):
        VTKPythonAlgorithmBase.__init__(self, nInputPorts=0, nOutputPorts=1, outputType='vtkPolyData')
        self._filename = None
        self._ndata = None
        self._timesteps = None
        print("starting",uuid.uuid1())

        from vtkmodules.vtkCommonCore import vtkDataArraySelection
        self._arrayselection = vtkDataArraySelection()
        self._arrayselection.AddObserver("ModifiedEvent", createModifiedCallback(self))
```

This method is used by a different non private method, but is intended to respond to ParaView's requests to get data. These requests are usually the result of something in the pipeline before a filter changing, or in our case having a new timestamp selected from the animation window.

We are importing NumPy here because we will be loading filenames and in some cases changing the data type of the array. If the point cloud (taken from a Lidar) was not just point positions but also intensity it becomes easier to access the intensity as a attribute for rendering if we make the array a named datatype array.

The top of the method handles cases when we have already read the initial time point and are querying for new data. If we already have data in the member variable `_ndata`, and the requested `_time` was provided when the method was called then we use that information to look up another file from a list of filenames (`self.fnames`).

NOTE, this code is written for a case when the timeline is using positive integer time steps. This means that we can use the requested `_time` as an index into the filenames list to load the requested timesteps point cloud. If you have floating point timeline values a different approach will be required.

Later in the method is the code that is used when we are getting the raw data for the first time. We take the user selected file from the filebrowser and work out the path to the parent folder. Then we get a list of the contents of this folder that match the extension that we care about in this file reader. We can then fill in the member variables for `_ndata` and `_timesteps`. At this point we now can re-issue the call to this method and it will take a different path through loading data from the NumPy array out of a file. This allows us to still make use of the same code that all other invocations will use even though this time the method wasn't called in response to a change in the timeline.

```python
def _get_raw_data(self, requested_time=None):
    import numpy
    if self._ndata is not None:
        if requested_time is not None:
            ##### load specific npy file from fnmes
            fname = self.fnames[int(requested_time)]
            self._ndata = numpy.load(fname)
            print(self._ndata.dtype)
            # self._ndata.dtype = numpy.dtype([("x",numpy.float32),("y",numpy.float32),("z",numpy.float32),("intensity",numpy.float32)])
            return self._ndata
        return self._ndata

    if self._filename is None:
        # Note, exceptions are totally fine!
        raise RuntimeError("No filename specified")

    # self._ndata = numpy.genfromtxt(self._filename, dtype=None, names=True, delimiter=',', autostrip=True)
    self.pth = Path(self._filename)
    self.fnames = list(self.pth.parent.rglob("*npy"))
    self.fnames.sort()
    times =  [i for i,e in enumerate(self.fnames)]
    self._ndata = 0
    self._timesteps = times

    return self._get_raw_data(requested_time)
```

After the last method you get a break since this one is much shorter. When we looking to find out how many timesteps there are in the animation we need to know how many files are in the folder we are processing. The logic there is that we want a time step per file. In support of this we issue a call to the previous method `_get_raw_data` because that's what creates the member variable `_timesteps` .

```python
def _get_timesteps(self):
    self._get_raw_data()
    return self._timesteps if self._timesteps is not None else None
```

This method for the most part is just recommended ParaView Python code straight from their [section on Python programmable filters](https://docs.paraview.org/en/latest/ReferenceManual/pythonProgrammableFilter.html#reading-a-csv-file-series"). Essentially it just returns back the updated time making sure its less than the values within the timesteps provided, otherwise it gives back the initial timestep.

The `_get_array_selection(self)` method is included here too just because it's a one liner. I think this code might be dead as it's not actually getting set to anything in my case as far as I know. The `_arrayselection` is set in the `init`, but doesn't appear explicitly anywhere else.

```python
def _get_update_time(self, outInfo):
    executive = self.GetExecutive()
    timesteps = self._get_timesteps()
    if timesteps is None or len(timesteps) == 0:
        return None
    elif outInfo.Has(executive.UPDATE_TIME_STEP()) and len(timesteps) > 0:
        utime = outInfo.Get(executive.UPDATE_TIME_STEP())
        print("using inner method get update time",utime)
        dtime = timesteps[0]
        for atime in timesteps:
            if atime > utime:
                return dtime
            else:
                dtime = atime
        return dtime
    else:
        assert(len(timesteps) > 0)
        return timesteps[0]

def _get_array_selection(self):
    return self._arrayselection


# Array selection API is typical with readers in VTK
# This is intended to allow ability for users to choose which arrays to
# load. To expose that in ParaView, simply use the
# smproperty.dataarrayselection().
# This method **must** return a `vtkDataArraySelection` instance.
@smproperty.dataarrayselection(name="Arrays")
def GetDataArraySelection(self):
    return self._get_array_selection()
```

This is the next most important part where we are actually setting a filename using a widget. This method will receive values back after the user selects a file in the filebrowser. To trigger all this they must load the plugin and then use the "open" button. Once they select a file who's extension matches with this, the custom plugin reader will show up with any others that match the extension. Last I checked there weren't any others that were stepping forward to handle NumPy array input.

This method just checks whether the same file has been loaded twice, and then sets itself to modified to trigger the subsequent loading and rendering steps.

```python
@smproperty.stringvector(name="FileName")
@smdomain.filelist()
@smhint.filechooser(extensions="npy", file_description="numpy pcd file")
def SetFileName(self, name):
    """Specify filename for the file to read."""
    print(name)
    if self._filename != name:
        self._filename = name
        self._ndata = None
        self._timesteps = None
        self.Modified()
```

This is the public wrapper of the `_get_timesteps()` method which will be called after using the reader on a file that matches the extension supported. This method needs to be implemented for the algorithm class we are inheriting from to work correctly.

```python
@smproperty.doublevector(name="TimestepValues", information_only="1", si_class="vtkSITimeStepsProperty")
def GetTimestepValues(self):
    print("getting time steps")
    return self._get_timesteps()
```

This method is another of the ones that must be extended in the child class for the parent to work. This specifically is a method that responds to the changes in the timeline. For more information on this request for information please read lower down in this section [https://docs.paraview.org/en/latest/ReferenceManual/pythonProgrammableFilter.html#understanding-the-programmable-modules](https://docs.paraview.org/en/latest/ReferenceManual/pythonProgrammableFilter.html#understanding-the-programmable-modules"). It will talk about how the `RequestInformation` is actually part of a
"pass in the pipeline's execution." Essentially this helps ParaView know that the reader plugin can provide more data at different timesteps. This method will also ensure that the animation timeline gets set to the right length as far as I know.

```python
def RequestInformation(self, request, inInfoVec, outInfoVec):
    print("requesting information")
    executive = self.GetExecutive()
    outInfo = outInfoVec.GetInformationObject(0)
    outInfo.Remove(executive.TIME_STEPS())
    outInfo.Remove(executive.TIME_RANGE())

    timesteps = self._get_timesteps()
    if timesteps is not None:
        for t in timesteps:
            outInfo.Append(executive.TIME_STEPS(), t)
        outInfo.Append(executive.TIME_RANGE(), timesteps[0])
        outInfo.Append(executive.TIME_RANGE(), timesteps[-1])
    return 1
```

You've almost made it! The last method does almost all the heavy lifting. This again is covered in the section on programmable sources, and gives ParaView back something to show at the end of the execution pass.

We load in several packages that are required to convert to VTK datatypes from NumPy.

Then we get the time that we are supposed to load as a point cloud.

We must have a variable representing the output on which to set our results so that ParaView can show them.

Then we get the actual NumPy array representing the points in the point cloud for a particular data `_time`.

Then we construct a vpoints variable which is an empty VTK point set with an expected number of points matching the number in our NumPy data.

If our data set has an intensity attribute then we can create a separate float array that will be set as a scalar point data on the output.

After that we need to set up the correct cell to be shown in ParaView. As I understand it, this part is standard VTK Python coding. Once the output has it's cells set we are done.

```python
def RequestData(self, request, inInfoVec, outInfoVec):
    print("requesting data")
    from vtkmodules.vtkCommonDataModel import vtkPolyData
    from vtkmodules.numpy_interface import dataset_adapter as dsa
    import vtk

    data_time = self._get_update_time(outInfoVec.GetInformationObject(0))

    output = dsa.WrapDataObject(vtkPolyData.GetData(outInfoVec, 0))
    points = self._get_raw_data(data_time)
    #points = self._ndata
    
    vpoints = vtk.vtkPoints()
    vpoints.SetNumberOfPoints(points.shape[0])
    intensity = vtk.vtkFloatArray()
    intensity.SetNumberOfComponents(1)
    intensity.SetName("Intensity")
    intensity.SetNumberOfTuples(points.shape[0])
    for i in range(points.shape[0]):
        vpoints.SetPoint(i, points[i][:3])
        intensity.SetTuple1(i, points[i][3])

    output.GetPointData().SetScalars(intensity)

    output.SetPoints(vpoints)
    
    vcells = vtk.vtkCellArray()
    
    for i in range(points.shape[0]):
        vcells.InsertNextCell(1)
        vcells.InsertCellPoint(i)
        
    output.SetVerts(vcells)

    if data_time is not None:
        output.GetInformation().Set(output.DATA_TIME_STEP(), data_time)
    return 1
```
