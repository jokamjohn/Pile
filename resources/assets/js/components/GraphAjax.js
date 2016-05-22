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
        url: ''
    },

    data () {
        return {
            legend: ''
        };
    },

    ready(){
        //Load this when the dom is ready.
        //Use vue-resource to make an ajax call to the server
        this.$http.get(this.url)
            .then(response => {

                var data = response.data;
                               
                this.render({
                    
                    labels: Object.keys(data),
                    datasets: [
                        {
                            label: "Revenue",
                            backgroundColor: "brown",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: Object.keys(data).map(key => data[key])
                        }
                    ]
                })
            });
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


