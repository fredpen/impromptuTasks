
require('./bootstrap');
Vue.component('example', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});

