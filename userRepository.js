const userRepo = function() {

    const get = function(id) {
        console.log('getting user: ' + id);
        return {
            name: 'new task from db'
        }
    }

    const save = function(task) {
        console.log('saving ' + task.name + ' to the db');
    }

    return {
        get: get,
        save: save
    }

}

module.exports = userRepo();