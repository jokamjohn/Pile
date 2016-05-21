/**
 * Created by jokamjohn on 5/21/2016.
 */
import Vue from "vue";
import Chart from "chart.js";

export default Vue.extend({

    template: `
    <div>
        <canvas id="chart" width="400" height="600" v-el:canvas></canvas>
        
        {{{ legend }}}
        
    </div>
    `,
    
    data () {
        return {
            legend: ''
        };
    },
    
    methods: {
        
        render(data)
        {
            var context = this.$els.canvas.getContext('2d');

            const chart = new Chart(context, {type: 'bar', data});

            this.legend = chart.generateLegend();
        }
    }
})