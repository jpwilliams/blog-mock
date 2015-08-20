/* Revival has a Philosophy page.

The up-coming, dark-hearted MMORPG _Revival_ has a section of its website dedicated to the game's philosophy. This is probably the best thing since whatever the best thing was the last time I used this sentence.

First off, _Revival_ is, as above, an MMORPG that's deep, man.  it's even got its own estate agents, [_Dunwich and Innsmouth_](https://www.revivalgame.com/store/housing).

*/









It feels as if there's a rising trend in game design whereby target audiences are identified, listened to and ditched; a good, sensible feature set is announced, followed by knee-jerk updates intended to appeal to the newer player.

It's understandable; what _business_ would create a game that's exclusively played by a forever-diminishing group of people? I'm here to tell you that it's the _right_ one.

Stay with me.

#[http://cdn.obsidianportal.com/assets/212635/Lab_Floor.jpg] Life-long features

First, let's look at an example of when a good-looking game has been rounded off to provide a more globally-appealing feel: _World of Warcraft_.

This _exceedingly_ popular MMORPG had, a matter a months ago, over 12 million subscribers across the globe. Now, it's lost more than half of that user-base. Throughout game-changing expansions they've tried to clamour back the numbers, though they continue to decrease.

Let's look at the steps that lead to this demise. First, competitors emerged. _Rift_, _Lord of the Rings Online_, _Wildstar_ and _Elder Scrolls Online_ were all big contributors to the loss of subscribers; people wanted something new, which is entirely understandable.

In reaction to this (and after suffering the first downward turn for a number of years), _Blizzard_ began to look for ways to keep the franchise trekking on. The obvious answer was to get new players interested. The issue being that, after 7 years in the making, the game was now so deep and complex to the outside player that picking it up was no easy feat.

_Blizzard_ opted, first, for a scheme called _Recruit a Friend_. It offered zero gameplay impact, but allowed users to invite their friends to achieve cosmetic rewards. A good strategy, were it not for the stereotypical _World of Warcraft_ player not having any friends to invite.

After mere months into the feature, _Blizzard_ started big changes. Once-complex mechanics such as "_Attack Power_" and "_Mana Regeneration_" were amalgamated into grouped statistics, hugely simplifying the understanding of various powers and effects. Now this seems like a fine thing, but for the current user-base it was most definitely not.

Imagine you're a car mechanic (some of you won't have to imagine). You spend years learning the workings of hundreds of different engines and know just how to diagnose and repair a thousand different problems. You're proud of your job and your peers recognise and appreciate that you're good at it.

Now imagine your manager walks in with a machine that does 95% of your job for you. You no longer enjoy your work as all you have to do is press one button and the job is done. On top of that, your years of training now count for nothing. While I'm sure _Blizzard_ was concious of those unfortunate consequences, they happened all the same and a large amount of _World of Warcraft_ players felt brushed aside.

#[








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
