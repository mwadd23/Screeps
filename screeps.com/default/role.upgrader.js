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
	        var controllerlocation = Game.getObjectById ('5982fcc1b097071b4adbe0b1')
            if(creep.upgradeController(controllerlocation) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controllerlocation, {visualizePathStyle: {stroke: '#ff66cc'}});
            }
        }
        else {
            //how to get energy from a different source (left)
            var sources = Game.getObjectById('5982fcc1b097071b4adbe0b2')
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources), {visualizePathStyle: {stroke: '#ff66cc'}};

            }
        }
	}
};

module.exports = roleUpgrader;