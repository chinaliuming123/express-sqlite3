const assert = require('assert')
const Todo = require('./todo')
const todo = new Todo();

let testsCompleted = 0;

function deleteTest() {
    todo.add('delete me');
    assert.equal(todo.length, 1, '1 item should exist')
    todo.deleteAll()
    assert.equal(todo.length, 0, '0 itemNo items should exist');
    testsCompleted++;
}
deleteTest()

function addTest() {
    todo.deleteAll();
    todo.add('added');
    assert.notEqual(todo.length, 0, '1 item should exist')
    testsCompleted++;
}
addTest()

function doAsyncTest(cb) {
    todo.doAsync(value => {
        assert.ok(value, 'Callback should be passed true');
        testsCompleted++;
        cb()
    })
}
doAsyncTest(() => {
    console.log(`completed ${testsCompleted} tests`)
})

function throwsTest(cb) {
    assert.throws(todo.add, /require/);
    testsCompleted++;
}
throwsTest()