# Tree Logger - Node File System

## About

A `Node.js` `tree` application that lists files and folders for the given path on file system.

## Description

The application takes an argument to directory to analyze and `--depth, -d` flag with directories depth number.
The result is a tree structured data output
File system calls are asynchronous.
When a script is called with `./node` as an argument, it returns:

```bash
tree ./node -d 2
node
├── cluster
│   └── index.js
├── domain
│   ├── error.js
│   ├── flow.js
│   └── run.js
├── errors
│   ├── counter.js
│   └── try-catch.js
└── worker
    └── index.js

4 directories, 7 files
```

## How To

To execute the script, you only need a Node.js and npm package manager installed in your environment.

Run the following command to execute the script:

    $ tree ./node -d 2

### Node and npm

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Mac and Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.14.1

    $ npm --version
    6.14.7

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

### Install

    $ npm install

### Running the project

    $ npm start

### Simple build for production

    $ npm build

<!-- ## Notes -->
