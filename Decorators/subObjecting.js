const Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log(`Saving: ${this.name}`);
}

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

const UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
    console.log('notifying important people...');
}
UrgentTask.prototype.save = function() {
    this.notify();
    console.log('doing special stuff before saving...');
    Task.prototype.save.call(this);
}
const ut = new UrgentTask('this is urgent', 1);
console.log(ut);
ut.complete();
ut.save();