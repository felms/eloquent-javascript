require('../robot/villageState.js')

let {randomRobot, routeRobot, goalOrientedRobot, runRobot} = require('../robot/robot.js');

function compareRobots(robot1, memory1, robot2, memory2) {
    
    let robot1Results = 0;
    let robot2Results = 0;

    for (let i = 0; i < 100; i++) {
        robot1Results += parseResult(runRobot(VillageState.random(), robot1, memory1));
        robot2Results += parseResult(runRobot(VillageState.random(), robot2, memory2));
    }

    console.log(`Robot 1: ${robot1Results / 100}\nRobot 2: ${robot2Results / 100}`);
}


function parseResult(result) {
    let r = result.split('Done in');
    let t = r[1].trim().split(' ');
    return parseInt(t[0]);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

//let test = `Moved to Alice's House
//Moved to Bob's House
//Moved to Town Hall
//Moved to Shop
//Moved to Grete's House
//Moved to Farm
//Moved to Marketplace
//Moved to Post Office
//Moved to Alice's House
//Moved to Cabin
//Moved to Alice's House
//Moved to Post Office
//Moved to Marketplace
//Moved to Farm
//Done in 14 turns `;
//
//console.log(parseResult(test));



