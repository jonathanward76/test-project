const Task = require('./task');
const taskRepo = require('./taskRepository');
const userRepo = require('./userRepository');
const projectRepo = require('./projectRepository');

const task1 = new Task(taskRepo.get(1));

const user1 = userRepo.get(1);
const project1 = projectRepo.get(1);

task1.user = user1;
task1.project = project1;

console.log(task1);
task1.save();