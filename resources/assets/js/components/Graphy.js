/**
 * Created by jokamjohn on 5/22/2016.
 */
import Vue from "vue";
import Chart from "chart.js";

//Base graph for revenue
export default Vue.extend({

    template: `
    <div>
        <canvas id="chart" width="400" height="600" v-el:canvas></canvas>
        
        {{{ legend }}}
        
    </div>
    `,

    props: {
        keys: '',
        values: ''
    },

    data () {
        return {
            legend: ''
        };
    },

    ready(){
        //Load this when the dom is ready.
        this.render({
            labels: this.keys,

            datasets: [
                {
                    label: "Revenue",
                    backgroundColor: "brown",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.values
                }
            ]
        })

    },

    methods: {

        render(data)
        {
            var context = this.$els.canvas.getContext('2d');

            const chart = new Chart(context, {type: 'line', data});

            this.legend = chart.generateLegend();
        }
    }
})

