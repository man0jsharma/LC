class Graph {
    constructor(val = 0) {
        this.value = val;
        this.adjacent = [];
        this.visited = false;
    }

    addAdjacent(graph) {
        if (Array.isArray(graph)) {
            this.adjacent = [
                ...this.adjacent,
                ...graph
            ]
        } else
            this.adjacent.push(graph);
    }

    logDFS(graph = this) {
        console.log(graph.value)
        if (graph === undefined) {
            return
        }
        graph.visited = true;

        for (let i = 0; i < graph.adjacent.length; i++) {
            if (!graph.adjacent[i].visited) {
                this.logDFS(graph.adjacent[i])
            }
        }
    }

    logBFS(graph = this) {

        const queue = [];
        graph.visited = true;
        queue.push(graph);

        console.log(graph.value)

        while (queue.length) {
            const q = queue.shift();

            for (let i = 0; i < q.adjacent.length; i++) {
                if (!q.adjacent[i].visited) {
                    console.log(q.adjacent[i].value)
                    q.adjacent[i].visited = true;
                    queue.push(q.adjacent[i])
                }
            }
        }
    }
}


const g0 = new Graph(0);
const g1 = new Graph(1);
const g2 = new Graph(2);
const g3 = new Graph(3);
const g4 = new Graph(4);



g1.addAdjacent(g4)
g1.addAdjacent(g3)
g0.addAdjacent(g1)
g0.addAdjacent(g2)

g0.logBFS()