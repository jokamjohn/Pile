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
            chart : '',
            legend: ''
        };
    },

    ready(){

        this.load();
    },

    methods: {
        //Fetch the data and pass it to the render method
        load(){
            
            this.fetchData().then(response => {
                
                const data = response.data;
                
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
            })});
        },

        fetchData(){
            return this.$http.get(this.url);
        },

        render(data)
        {
            this.chart = new Chart(this.$els.canvas.getContext('2d'), {type: 'line', data});

            this.legend = this.chart.generateLegend();
        },

        reload(){
            this.chart.destroy();

            this.load();
        }
    }
})


