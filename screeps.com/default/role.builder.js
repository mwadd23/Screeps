var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#66ff33'}});
                }
            }
	    }
	    else {
			 //how to get energy from a different source
			 var sources = Game.getObjectById('5982fcf1b097071b4adbe706')
			 if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
			 creep.moveTo(sources), {visualizePathStyle: {stroke: '#66ff33'}};		
            }
	    }
	}
};

module.exports = roleBuilder;