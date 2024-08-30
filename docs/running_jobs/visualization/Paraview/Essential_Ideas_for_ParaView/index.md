To get the most out of ParaView, it is essential to understand not just
the steps of doing things but also why those steps work. This will help
you in debugging many of the issues you run across while using the
program.

### Nodes

Pretty much all of ParaView is structured in a system of nodes stored in
the pipeline (see this with View → Pipeline Browser from the toolbar).
Nodes are sorted into three main categories:

**Sources**

Sources are, as the name implies, the source for the ParaView pipeline.
This is anything that you want to bring into your visualization
including data, geometric shapes, annotations, etc. In short, these are
the objects that all the other nodes base themselves on.

**Filters**

Filters are the main tool of analysis in ParaView. Anytime you want to
add something to your data (such as showing velocities as arrows),
modify your data in some way (like projecting onto an axis), or
visualize with a graph, these are the nodes to use.

**Extractors**

Extractors, unlike sources or filters, do not add or modify data in any
way. They simply act as a means of taking the data that you already have
in ParaView and exporting it. Examples of this include
<a href="https://www.notion.so/ParaView-Cameras-and-Keyframes-0d80ae786a6d4924b8a423ff6bd6289c" class="external-link">saving images</a>
or exporting data as a spreadsheet.

The general workflow for ParaView is importing your data with sources
(this is what the Open button does), performing your analysis with
filters, then exporting it either as an image or spreadsheet for further
analysis.

### The Pipeline

The pipeline is where all of your nodes will be stored. It is stored in
a tree-like format, with the root of the tree always being builtin:.
Generally, sources and extractors will be children of the root and
filters will be children of sources. Any filters that a source has as a
child will affect that source object.

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 17, "requestCorrelationId":
"90643f41f1134bacadaac032883f9481"}</span>
