/**
 * Created by jokamjohn on 5/22/2016.
 */
import Graph from "./BaseRevGraph";

export default Graph.extend({

    template: `
            <div>
                <div>
                    <label> How many Days ?</label>
                    <select v-model="range" @change="reload">
                        <option v-for="n in 365">{{ n }}</option>
                     </select>
                </div>
                    <canvas id="chart" width="400" height="600" v-el:canvas></canvas>
            
                     {{{ legend }}}
            </div>`,

    props: {
        range : { default: 10 }
    },
    
    methods: {
        fetchData(){
            return this.$http.get(this.url, { range: this.range } );
        }
    }






});