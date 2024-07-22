class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    // For an undirected graph, add both vertices to each other's adjacency list
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  removeVertex(vertex) {
    // Remove the vertex from the adjacency list and remove its edges
    this.adjacencyList.delete(vertex);
    for (let adjacentVertex of this.adjacencyList.values()) {
      const index = adjacentVertex.indexOf(vertex);
      if (index !== -1) {
        adjacentVertex.splice(index, 1);
      }
    }
  }

  removeEdge(vertex1, vertex2) {
    // Remove edge between vertex1 and vertex2
    this.adjacencyList
      .get(vertex1)
      .splice(this.adjacencyList.get(vertex1).indexOf(vertex2), 1);
    this.adjacencyList
      .get(vertex2)
      .splice(this.adjacencyList.get(vertex2).indexOf(vertex1), 1);
  }
  //BFS
  bfs(startingVertex) {
    const visited = new Map();
    const queue = [];
    queue.push(startingVertex);
    visited.set(startingVertex, true);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      }
    }
  }
  //DFS for stack
  dfsIterative(startingVertex) {
    const visited = new Map();
    const stack = [];
    stack.push(startingVertex);

    while (stack.length > 0) {
      const currentVertex = stack.pop();

      if (!visited.has(currentVertex)) {
        console.log(currentVertex);
        visited.set(currentVertex, true);

        const neighbors = this.adjacencyList.get(currentVertex);
        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
  //DFS for recursive
  dfsRecursive(startingVertex) {
    const visited = new Map();

    const dfs = (vertex) => {
      visited.set(vertex, true);
      console.log(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(startingVertex);
  }
  printGraph() {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.printGraph();
