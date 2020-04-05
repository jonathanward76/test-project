const repo = function() {

    let called = 0;

    const save = function(task) {
        called++;
        console.log(`Saving ${task} caled ${called} times`);
    }
    console.log('newing up new task repo');
    return {
        save: save
    }
}

module.exports = repo();