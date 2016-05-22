/**
 * Created by jokamjohn on 5/22/2016.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import RevenueGraph from './components/RevenueGraph';

Vue.use(VueResource);

new Vue({

    el: 'body',

    components: { RevenueGraph }
});