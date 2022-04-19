function bfs (graph, start) {
    //Queue that the nodes have to visited yet
    var queue = [];
    //Add node to start from
    queue.push(start);
    //A boolean array if we already visited a node
    var visited = [];
    //the start node is already visited
    visited[start] = true;
    // Keeping the distances (might not be necessary depending on your use case)
    var distances = [];
    distances[start] = 0;
    //While there are nodes left to visit
    while (queue.length > 0) {
        console.log(visited);
        console.log(distances);
        var node = queue.shift();
        console.log("Removing node " + node + " from the queue");
        //for all neighboring nodes that haven't been visited yet
        for (var i = 1; i < graph[node].length; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = true;
                distances[i] = distances[node] + 1;
                queue.push(i);
                console.log("Visiting node " + i + ", setting its distance to " + distances[i] + " and adding it to the queue");

            }
        }
    }
    return distances;
}




