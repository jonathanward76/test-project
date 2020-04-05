const TaskRepo = (function() {
    let taskRepo;
    function createRepo() {
        const taskRepo = new Object('Task');
        return taskRepo;
    }
    return {
        getInstance: function() {
            if (!taskRepo) {
                taskRepo = createRepo();
            }
                return taskRepo;
            }
        }
    }
)();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log('both repos are the same!');
}