const repoFactory = function() {

    this.getRepo = function(repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository');
                return this.taskRepo;
            }
        }
        if (repoType === 'user') {
            const userRepo = require('./userRepository');
            return userRepo;
        }
        if (repoType === 'project') {
            const projectRepo = require('./projectRepository');
            return projectRepo;
        }
    }
}

module.exports = new repoFactory;