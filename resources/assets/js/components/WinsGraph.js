/**
 * Created by jokamjohn on 5/21/2016.
 */
import Graph from "../BaseGraph";

export default Graph.extend({

    props: ['player', 'opponent'],

    ready() {

        this.render({

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
                    data: [this.opponent.wins, 0]
                }
            ]
        });
    }

})