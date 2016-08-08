QUnit.test("Initial test", function(assert) {
    var cells = view.init(10, 12);
    assert.deepEqual(Object.keys(cells).length, 12, "y table size test passed");
    assert.deepEqual(Object.keys(cells[0]).length, 10, "x table size  test passed");
});

QUnit.test("Count cells", function(assert) {
    view.init(10, 10);
    view.render([
        [0, 1],
        [0, 2]
    ]);
    assert.deepEqual($(".alive").length, 2, "2 alive cells test passed");
    view.render([
        [0, 1],
        [0, 2],
        [1, 2],
        [4, 4],
        [5, 5]
    ]);
    assert.deepEqual($(".alive").length, 5, "5 alive cells test passed");
    assert.deepEqual($(".dead").length, 95, "95 dead cells test passed");
    view.render([]);
    assert.deepEqual($(".alive").length, 0, "0 alive cells test passed");
    assert.deepEqual($(".dead").length, 100, "100 dead cells test passed");
});

QUnit.test("Life iteration tests", function(assert) {
    view.init(30, 20);
    view.render([
        [0, 1],
        [0, 2]
    ]);
    assert.deepEqual(life.iteration().length, 0, "all died test passed");
    view.render([
        [1, 1],
        [1, 2],
        [1, 3]
    ]);
    assert.deepEqual(life.iteration(), [
        [0, 2],
        [1, 2],
        [2, 2]
    ], "line test passed");
    view.render([
        [3, 5],
        [4, 5],
        [5, 5],
        [5, 4],
        [4, 3]
    ]);
    assert.deepEqual(life.iteration(), [
        [3, 4],
        [4, 5],
        [4, 6],
        [5, 4],
        [5, 5]
    ], "glider test passed");
});
