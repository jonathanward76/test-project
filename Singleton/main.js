const taskHandler = require('./taskHandler');
const myRepo = require('./Repo');

myRepo.save('fromMain');
myRepo.save('fromMain');
myRepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();