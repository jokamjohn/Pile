import Vue from 'vue';
import Graph from './components/GraphAjax';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({

    el: 'body',

    components: {
        Graph
    }
});
