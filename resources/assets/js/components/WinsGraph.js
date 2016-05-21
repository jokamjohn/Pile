/**
 * Created by jokamjohn on 5/21/2016.
 */
import Chart from "chart.js";

export default {

    template: `
    <div>
        <canvas id="chart" width="400" height="600" v-el:canvas></canvas>
        
        {{{ legend }}}
        
    </div>
    `,

    props: ['player', 'opponent'],

    data () {
        return {
            legend: ''
        };
    },

    ready() {

        var data = {

            labels: ["Wins"],

            datasets: [
                {
                    label: this.player.name,
                    backgroundColor: "#000000",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [this.player.wins]
                },
                {
                    label: this.opponent.name,
                    backgroundColor: "red",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [this.opponent.wins,0]
                }
            ]
        };

        var context = this.$els.canvas.getContext('2d');

        const chart = new Chart(context, {type: 'bar', data});

        this.legend = chart.generateLegend();
    }

}