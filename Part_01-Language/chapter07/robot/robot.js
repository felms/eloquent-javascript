require('./villageState.js')
require('./graph.js')


// BASICS AND AUX FUNCIONS ======================

let roadGraph = GRAPH;

function runRobot(state, robot, memory) {
  let output = "";
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      output += `\nDone in ${turn} turns`;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    output += `\nMoved to ${action.direction}`;
  }

  return output;
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};


// RANDOM BOT ======================

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

// ROUTE BOT ======================

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

// GOAL ORIENTED BOT ======================
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

// RUN THE SIMULATION ======================

//runRobot(VillageState.random(), randomRobot);
//console.log(runRobot(VillageState.random(), goalOrientedRobot, []));

// EXPORTS ======================

let robots = {randomRobot, routeRobot, goalOrientedRobot, runRobot};

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = robots;
if (typeof global != "undefined" && !global.GRAPH)
  global.robots = robots;
