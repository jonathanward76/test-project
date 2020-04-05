const Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

const TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log(`completing task ${task.name}`);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(`${task.name} completed on ${task.completedDate}`);
        },
        notifyCompletion: function(task, user) {
            console.log(`notifying ${user} of completion of ${task.name}`);
        },
        save: function(task) {
            console.log(`saving task: ${task.name}`);
        }
    }
}();

const TaskServiceWrapper = function() {
    const completeAndNotify = function(task) {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();

const myTask = new Task({
    name: 'my task',
    priority: 1,
    project: 'courses',
    user: 'jon',
    completed: false
})


TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);