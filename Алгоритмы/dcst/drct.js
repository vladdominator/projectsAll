let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;
findLowestCostWay(graph, costs, parents);
function findLowestCostNode(costs, processed) {
   let lowestCost = Infinity;
   let lowestCostIndex = null;
   for (let node in costs) {
       let cost = costs[node];
       if (cost < lowestCost && processed.indexOf(node) === -1) {
           lowestCost = costs[node];
           lowestCostIndex = node;
       }
   }
   return lowestCostIndex;
}
function findLowestCostWay(graph, costs, parents) {
   let processed = [];

   let node = findLowestCostNode(costs, processed);

   while (node !== null) {
       let cost = costs[node];
       let neighbors = graph[node];
       for (let n in neighbors) {
           let newCost = cost + neighbors[n];
           if (newCost < costs[n]) {
               costs[n] = newCost;
               parents[n] = node;
           }
       }
       processed.push(node);
       node = findLowestCostNode(costs, processed);
   }

   console.log(costs);
   console.log(parents);
   console.log(processed);
}
