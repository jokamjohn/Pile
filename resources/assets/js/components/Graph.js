/**
 * Created by jokamjohn on 5/20/2016.
 */

import Chart from "chart.js";

export default {

    template: ` 
             <div>
                <canvas id="myChart" width="600" height="400" v-el:canvas ></canvas>
                <div class="legend">{{{ legend }}}</div>
             </div>`,

    props: {

        labels: {},
        values: {},
        color: {
            default: "rgba(220,200,200,0.2)"
        }
    },

    data() {
        return {
            legend: ''
        };
    },

    ready() {

        var data = {
            labels: this.labels,
            datasets: [
                {
                    label: 'Monthly Data',
                    backgroundColor: "red",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.values
                },
                {
                    label: ' Data',
                    fill: false,
                    strokeColor: "red",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [ 20, 30, 50]
                }
            ]
        };


        var context = this.$els.canvas.getContext('2d');

        const chart = new Chart(context, {type: 'line', data});

        chart.generateLegend();
    }
}