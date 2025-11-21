// Graph representation using Adjacency List (undirected graph);
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex (node)
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (connection)
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    //remove an edge between two vertices
    removeEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(
                (vertex) => vertex !== v2
            );
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(
                (vertex) => vertex !== v1
            );
        }
    }

    // Remove a vertex and all edges connected to it
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;

        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }

        delete this.adjacencyList[vertex];
    }

    //bfs traversal in graph
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    //dfs traversal in graph
    dfs(start) {
        const stack = [start];
        const result = [];
        const visited = new Set();

        visited.add(start);
        while (stack.length > 0) {
            const vertex = stack.pop();
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex].slice().reverse()) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }

    // Display the graph
    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.removeEdge("B", "D");
graph.removeVertex("B");

graph.printGraph();
console.log("bfs traversal", graph.bfs("A"));
console.log("dfs traversal", graph.dfs("A"));

//directed graph
class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2);
        }
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
        }
    }
}

const Dgraph = new DirectedGraph();

Dgraph.addVertex("A");
Dgraph.addVertex("B");
Dgraph.addVertex("C");

Dgraph.addEdge("A", "B");
Dgraph.addEdge("A", "C");
Dgraph.addEdge("B", "C");
Dgraph.addEdge("C", "A");

Dgraph.display();

//Create a graph using adjacency matrix
class GraphMatrix {
    constructor(vertices) {
        this.vertices = vertices;
        this.size = vertices.length;
        this.matrix = Array.from({ length: this.size }, () =>
            Array(this.size).fill(0)
        );
    }

    addEdge(v1, v2) {
        const i = this.vertices.indexOf(v1);
        const j = this.vertices.indexOf(v2);

        this.matrix[i][j] = 1;
        this.matrix[j][i] = 1;
    }

    printMatrix() {
        console.log(" " + this.vertices.join(" "));
        for (let i = 0; i < this.size; i++) {
            console.log(this.vertices[i] + " " + this.matrix[i].join(" "));
        }
    }
}

const vertices = ["A", "B", "C", "D"];
const graphM = new GraphMatrix(vertices);

graphM.addEdge("A", "B");
graphM.addEdge("A", "C");
graphM.addEdge("B", "D");
graphM.addEdge("C", "D");

graphM.printMatrix();

//weighted graph
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    display() {
        for (let vertex in this.adjacencyList) {
            const edges = this.adjacencyList[vertex]
                .map((edge) => `${edge.node} (${edge.weight})`)
                .join(", ");
            console.log(vertex, "->", edges);
        }
    }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B", 5);
g.addEdge("A", "C", 2);
g.addEdge("B", "D", 3);
g.addEdge("C", "D", 4);

g.display();

//Undirected Cycle Graph using Adjacency List
class CycleGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1);
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2);
        }
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
        }
    }
}

const cycleG = new CycleGraph();

const vertice = ["A", "B", "C", "D"];
for (let i = 0; i < vertice.length; i++) {
    const next = (i + 1) % vertice.length;
    cycleG.addEdge(vertice[i], vertice[next]);
}

cycleG.display();
