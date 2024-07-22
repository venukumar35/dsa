class Graphs {
  constructor() {
    this.data = [
      [1, 2],
      [2, 3],
    ];
  }

  // Add methods or other properties here
}

// Usage:
const myGraph = new Graphs();
console.log(myGraph.data); // Output: [[1, 2], [2, 3]]
/**class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = [];
    for (let i = 0; i < numVertices; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < numVertices; j++) {
        this.adjMatrix[i][j] = 0; // Initialize all edges to 0 (no edge)
      }
    }
  }

  addEdge(fromVertex, toVertex) {
    if (fromVertex >= 0 && fromVertex < this.numVertices && toVertex >= 0 && toVertex < this.numVertices) {
      this.adjMatrix[fromVertex][toVertex] = 1; // Mark edge from 'fromVertex' to 'toVertex'
      this.adjMatrix[toVertex][fromVertex] = 1; // For undirected graph, mark edge from 'toVertex' to 'fromVertex' as well
    } else {
      console.log("Invalid vertices");
    }
  }

  printAdjMatrix() {
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.adjMatrix[i].join(' '));
    }
  }
}

// Example usage:
const myGraph = new Graph(4); // Create a graph with 4 vertices

myGraph.addEdge(0, 1); // Add an edge between vertices 0 and 1
myGraph.addEdge(0, 2); // Add an edge between vertices 0 and 2
myGraph.addEdge(1, 2); // Add an edge between vertices 1 and 2
myGraph.addEdge(2, 3); // Add an edge between vertices 2 and 3

myGraph.printAdjMatrix(); // Print the adjacency matrix
 */
