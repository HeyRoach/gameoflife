QUnit.test("Initial test", function(assert) {
    cells = model.init(10, 12);
    assert.deepEqual(Object.keys(cells).length, 12, "y table size test passed");
    assert.deepEqual(Object.keys(cells[0]).length, 10, "x table size  test passed");
});

QUnit.test("Count cells", function(assert) {
    view.init(10, 10);

    model.init(10, 10, [
        [0, 1],
        [0, 2]
    ]);
    view.render(model.getCells());
    assert.deepEqual($(".alive").length, 2, "2 alive cells test passed");

    model.init(10, 10, [
        [0, 1],
        [0, 2],
        [1, 2],
        [4, 4],
        [5, 5]
    ]);
    view.render(model.getCells());
    assert.deepEqual($(".alive").length, 5, "5 alive cells test passed");
    assert.deepEqual($(".dead").length, 95, "95 dead cells test passed");

    model.init(10, 10);
    view.render(model.getCells());
    assert.deepEqual($(".alive").length, 0, "0 alive cells test passed");
    assert.deepEqual($(".dead").length, 100, "100 dead cells test passed");
});
