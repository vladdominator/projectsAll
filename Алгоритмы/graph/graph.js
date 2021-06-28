function addToQueue(list, queue)  {
   for (let i = 0; i < list.length; i += 1) {
       queue.push(list[i]);
   }
   return queue;
}
function personIsSeller(name) {
  name.slice(-1) === 'm';
}
function findMangoSeller(searchQueue, graph, startPoint)  {
   searchQueue = addToQueue(graph[startPoint], searchQueue);
   let searched = [];

   while(searchQueue.length !== 0) {
       let person = searchQueue.shift();
       if (searched.indexOf(person) === -1) {
           if (personIsSeller(person)) {
               return person + " is a mango seller";
            } else {
               searchQueue = addToQueue(graph[person], searchQueue);
               searched.push(person);
           }
       }
   }

   return "nobody is a mango seller";
}
let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = ["m"];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
graph["m"] = ["26"];
graph["26"]=["m"];

// let graph = {};
// graph["you"] = ["alice"];
// graph["alice"] = ["you"];

let searchQueue = [];

console.log(findMangoSeller(searchQueue, graph, "you"));