//Automatically spawns new harvester creeps if there are less than 2
var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
console.log('Harvesters: ' + harvesters.length);

if(harvesters.length < 2) {
    var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
    console.log('Spawning new harvester: ' + newName);
}

//this pulls the creep names and their object
    for (var key in Game.creeps){
        console.log("Key: "+ key + "     " + "Value: " + Game.creeps[key])
    }

    //get the creep names and their ticks to live
    for (var i in Game.creeps){
        console.log("Name: "+ i + "     " + "Ticks to Live: " + Game.creeps[i].ticksToLive)
    }

    //get the role of the creep
    for (var i in Game.creeps){
        console.log("Name: "+ i + "     " + "Role: " + Game.creeps[i].memory.role)
    }

    //gets the creeps name, role and ticks to live
    for (var i in Game.creeps){
        console.log("Name: "+ i + "     " + "Role: " + Game.creeps[i].memory.role + "       " + "Ticks to Live: " + Game.creeps[i].ticksToLive)
    }