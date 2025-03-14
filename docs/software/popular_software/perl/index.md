# Perl

## Accessibility


Perl is installed on the operating system of each compute node: 

```bash
[netid@compute_hostname ~]$ perl --version
 
This is perl 5, version 16, subversion 3 (v5.16.3) built for x86_64-linux-thread-multi
(with 44 registered patches, see perl -V for more detail)
...
```

## Perl Module Policy

We provide a version of Perl through modules or the operating system. Installation of additional user libraries can be done in a Perl environment using ```perl-virtualenv```.

For a helpful Perl tutorial, see: [http://www.tutorialspoint.com/perl/perl_modules.htm](http://www.tutorialspoint.com/perl/perl_modules.htm). Additionally, O'Reilly Media is a well regarded source for Perl 

## Installing Perl Packages Using perl-virtualenv

One of the best things about Perl is the number of packages provided by the user community. Installing packages generally requires root access but that is not a viable solution in the HPC environment.

An easy solution is to use `perl-virtualenv` on a compute node to create a consistent personal Perl environment. An example of usage:

```bash
[netid@i0n1 ~]$ perl-virtualenv my_project    # Create virtual environment
perl path: /usr/bin/perl
venv path: /home/uxx/netid/my_project
[netid@i0n1 ~]$ source my_project/bin/activate # Activate virtual environment
(my_project)[netid@i0n1 ~]$ cpanm -i Config::Trivial
--> Working on Config::Trivial
Fetching http://www.cpan.org/authors/id/A/AT/ATRICKETT/Config-Trivial-0.81.tar.gz ... OK
Configuring Config-Trivial-0.81 ... OK
...
4 distributions installed
(my_project)[netid@i0n1 ~]$
```

Once your environment is created, it can be activated for any future jobs or interactive sessions using the `source </path/to/environment>` command.

## Installing cpanm

If you find that `cpanm` is not available, you can install it to your home folder:

```bash
wget -O cpanm https://cpanmin.us
chmod +x cpanm
mkdir -p ~/bin
mv cpanm ~/bin/
```

This creates a folder in your home directory called `bin` and adds the `cpanm` binary to it. You can run `cpanm` by providing the full path, e.g. `$HOME/bin/cpanm`. You can add the `bin` folder to your `PATH` by performing the following command. All items within `$HOME/bin` should then be available to execute from any location. 

```bash
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```