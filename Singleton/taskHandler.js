const myRepo = require('./Repo');

const taskHandler = function() {
    return {
        save: function() {
            myRepo.save('hi from taskHandler');
        }
    }
}

module.exports = taskHandler();