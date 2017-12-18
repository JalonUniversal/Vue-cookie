# Vue-cookies
## A smart vue-plugin for operating cookie in your project

## How to use
npm install vue-cookies -S

## In your main.js / index.js
const Vue = require('vue'); <br/>
const vueCookie = require('vue-cookie');
// To use this plugin
Vue.use(vueCookie);

### Usage
#### Get cookie value
this.$cookie.get('vue');
// get the value : "Vue is great"

#### Set cookie value
##### Withing Object
this.$cookie.set({
  name: 'Vue',
  value: "Vue is great"
});
// set the value : "Vue is great"

##### Withing Array
this.$cookie.set({
  name: 'Vue',
  value: "Vue is great"
}, {
  name: "React",
  value: "React is great"
});
// set the value : "Vue is great" and "React is great"

#### Delete cookie value
this.$cookie.delete('Vue');
// delete the value "Vue is great"