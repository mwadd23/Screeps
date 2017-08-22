//Automatically spawns new harvester creeps if there are less than 2
var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
console.log('Harvesters: ' + harvesters.length);

if(harvesters.length < 2) {
    var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
    console.log('Spawning new harvester: ' + newName);
}

