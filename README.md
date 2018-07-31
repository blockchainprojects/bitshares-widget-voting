# BitShares Widget for Voting

This widget displays the status of a BitShares worker proposal. 
It displays details of the proposal (status and others) and if a known escrow service is found, 
details of the funding is also presented.

Currently supported escrows:
 - BBF


filled in.

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

The html element that enables the voting widget is
```
<div id=bitshares-widget-voting workerid="1.14.109;1.14.108"></div>
```
with a property workerid that tells the ticker which worker to display. Multiple workers can be separated with ";".

