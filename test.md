Reden's a tool I've been working on recently that's intended to allow the ease of use of a Docker-powered, Vagrant-backed development environment accessible from anywhere with minimal set-up.
                        
Firstly, let's see if Reden would be valuable to you. It allows you to:

* Utilise a cloud-based development environment
* Work offline (as fully as online)
* Use your favoured tools, IDEs and the like
* Keep standardised environments across work or home with minimal setup (hell, in space if you wanted)
* Access all services via SSH
* Keep development teams in sync by having code and work centralised to a singular server
                        
I designed this tool for my own personal use; I work across varying languages and projects and, with the dependencies for each project being so wildly different, I started to find it difficult to manage or even understand what my dependencies were.
                        
I, of course, then tried Docker-provisioned Vagrant boxes as an alternative, but my workload would then be slowed down hugely if the machine I was on at the time was particualrly slow. We needed something better, so I created Reden.
                        
The idea was to produce user-unique "workspaces" on a remote server, allowing environments to be entirely seperate from a user's machine; no more downloading and running VMs locally.

#[http://sfg.digital/wp-content/uploads/2015/06/better-web-developer.jpg] Getting started
                        
To demonstrate how easy Reden is to set up and use, let's go straight ahead see what it's like to set up on a brand new machine. We'll assume for the moment that the Reden server we're communicating with is already set up (we'll explain how that works later).

First, let's start by installing *Reden*. We do this using *Pip*.

    $ pip install Reden

Nice and simple, right?

*Pip*, being awesome, will download all the dependencies you need. After that, test *Reden*'s been installed correctly by just typing <code>reden</code> in your terminal. You should be greeted with a usage print-out, like so:

    $ reden

    Usage: reden [OPTIONS] COMMAND [ARGS]...

    Options:
      --verbose
      --help     Show this message and exit.

    Commands:
      go     Opens a project directory
      init   Sets up a workspace
      list   Lists workspaces
      reset  Resets all configuration
      ssh    Connect via SSH to your workspace
      start  Start a workspace
      stop   Stops a workspace
      tail   Tails a project sync log

If that didn't work, see *Troubleshooting Reden Installation*. Otherwise, awesome!

So let's set up our very first project. I've got a *Git* repository all set up, so all I need to do is type <code>reden init</code> and follow the steps. I'm using dummy data, so make sure to use existing directories and repositories when you do it!

    $ reden init

    Name: test-project
    Directory [/Users/jackwilliams/denver-testing/test-project]:
    Repository SSH URL: git@github.com/testman/testproject
    Host [127.0.0.1]:
    SSH Port [22]:
    User [root]:

    Attempting to clone repository.
    This may take a few minutes...

    Git successfully cloned.

    Server config saved!

#[http://web-vassets.ea.com/Assets/Richmedia/Image/Screenshots/C2_ConceptArt_GrandCentral.jpg?cb=1412974881] One big prison.
