/**
 * Created by jokamjohn on 5/20/2016.
 */

import Chart from "chart.js";

export default {

    template: '<canvas id="myChart" width="600" height="400"></canvas>',

    props: ['labels', 'values', 'color'],

    props: {
    
        labels: {},
        values: {},
        color: {
            default: "rgba(220,220,220,0.2)"
        }
    },

    ready() {

        var context = this.$el.getContext('2d');

        var data = {
            labels: this.labels,
            datasets: [
                {
                    fillColor: this.color,
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.values
                }
            ]
        };

        new Chart(context, {type: 'line', data});
    }
}