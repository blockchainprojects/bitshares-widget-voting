# BitShares Widget for Voting

This widget displays the status of a BitShares worker proposal. 
It displays details of the proposal (status and others) and if a known escrow service is found, 
details of the funding is also presented.

Currently supported escrows:
 - BitShares Blockchain Foundation (bitshares.foundation)

## Usage

This widget can be indcluded as a simple html element, provided that the dependencies have been loaded. The following element displays the status of two worker proposals
```
<div id="bitshares-widget-voting" workerid="1.14.109;1.14.80"></div>
```
The property workerid is a ";"-separated string list of all desired worker proposal ids. An example with the above element can be found in [example folder](/example/bitshares-voting-widget.html). The widget is fully customizable with the included CSS file. After rendering the default CSS the user sees

![Example](/example/bitshares-voting-widget.jpeg?raw=true "BitShares Widget for Voting")

Note that the "Vote now" button is not functional, but meant as self-motivation to implement it.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

This will build all required files in the dist folder and creates a bitshares-widget-voting-bundle.js that can be used for
single script include.

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

The usage of the voting widget can be seen in index.html. An external script will be loaded which allows the Vue component to be rendered.
An example is created in the standalone folder, simply open standalone/ticker.html in any browser (tested with firefox and chromium).


