# Package managers

Package managers are a way to install software through the command line interface.
Instead of going website after website looking for the installer options.

If you compare both in the windows context, going to a website and download a file an install, It is the day to day.
However as a developer You will find yourself repeating the process of installing technologies, each time you got a new dev environment, managing different versions of the same techs, upgrading versions, or helping colleagues with their initial set up.

**This is time consuming.**


Package managers aim to solve the installation and manage of the techs you need for your environment, and you can automate that task:
1. At windows there is Chocolatey.
2. At Mac there is Homebrew and recently available for linux.
3. At linux there is apt get, among others.
   
I have used the three of them.


One of my setups: It is windows 10 with wsl2.


For today's exploration:

[Chocolatey Package Manager](https://chocolatey.org/)

For install instructions search the docs 😉 and evaluate which option fit better for your environment.


Once done you test it and next You search the packages at:

[Chocolatey Packages](https://community.chocolatey.org/packages)


It is useful create your own to automate your environment set up


## Example powershell script
```ps1
choco install nodejs-lts
choco install vscode
choco install virtualbox
```


Over time this kind of task save great amount of time.


### Good practice
Checking the versions needed for your projects before run commands and install packages.