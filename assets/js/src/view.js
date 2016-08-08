var view = {
    table: $("#view"),
    x: 0,
    y: 0,
    init: function(x, y) {
        this.cells = {},
        this.table.html("");
        this.x = x;
        this.y = y;
        for (var iy = 0; iy < y; iy++) {
            this.cells[iy] = {};
            var row = $("<tr></tr>");
            for (var ix = 0; ix < x; ix++) {
                var cell = $("<td class='dead'></td>").attr({'x': ix,'y': iy});
                row.append(cell);
                this.cells[iy][ix] = {
                    state: "dead",
                    cell: cell,
                };
            }
            this.table.append(row);
        }
        return this.cells;
    },
    setState: function(y, x, state){
        this.cells[y][x].state = state;
        this.cells[y][x].cell.removeClass('dead alive').addClass(state)
    },
    render: function(array){
        for (var iy = 0; iy < this.y; iy++) {
            for (var ix = 0; ix < this.x; ix++) {
                this.setState(iy, ix, "dead");
            }
        }
        $.each(array, function(index, el) {
            view.setState(el[0], el[1], "alive");
        });
    }
};
