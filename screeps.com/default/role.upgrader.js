var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            //how to get energy from a different source (left)
            var sources = Game.getObjectById('5982fcf1b097071b4adbe707')
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources), {visualizePathStyle: {stroke: '#ffaa00'}};

            }
        }
	}
};

module.exports = roleUpgrader;