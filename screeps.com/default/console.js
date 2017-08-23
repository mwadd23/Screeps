//Spawn 2 new harvesters
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester2' );
Game.spawns['Spawn1'].createCreep( [CLAIM,CLAIM,MOVE,MOVE], 'Monica');

//Spawn a new Upgrader
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Upgrader1' );

//write roles into memory
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';

//Spawn a new Builder and add the role into memory right away
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Builder1',
{ role: 'builder' } );

//Build someone large with 550 energy units (spawn + 5 extensions filled with energy)
Game.spawns['Spawn1'].createCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { role: 'harvester' } );
    
//Get the amount of energy in the room
for(var name in Game.rooms) {
    console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
}

//Creep Suicide
Game.creeps['Harvester1'].suicide()

//Activate Safe Mode when you are being attacked
Game.spawns['Spawn1'].room.controller.activateSafeMode();

//Create tower
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

//main - attack an enemy
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var tower = Game.getObjectById('e3f880189f5d71a598cebf88');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}




//main - repair a wall
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var tower = Game.getObjectById('e3f880189f5d71a598cebf88');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}







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


    //how to get energy from a different source (right)
    var sources = Game.getObjectById('5982fcf1b097071b4adbe706')
    if(Creep.upgrader(sources) == ERR_NOT_IN_RANGE) {
    Creep.moveTo(sources), {visualizePathStyle: {stroke: '#ffaa00'}};

    
    //how to get energy from a different source (left)
    var sources = Game.getObjectById('5982fcf1b097071b4adbe707')
    if(Creep.upgrader(sources) == ERR_NOT_IN_RANGE) {
    Creep.moveTo(sources), {visualizePathStyle: {stroke: '#ffaa00'}};

//
    
    