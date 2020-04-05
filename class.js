'use strict';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    };
    save() {
        console.log('saving task: ' + this.name);
    };
}

module.exports = Task;


const task1 = new Task('Create a demo for constructors');
const task2 = new Task('Create a demo for modules');
const task3 = new Task('Create a demo for singletons');
const task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();