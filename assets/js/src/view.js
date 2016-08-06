var view = {
    table: document.getElementById("view"),
    x: 0,
    y: 0,
    init: function(x, y) {
        this.cells = {},
        this.table.innerHTML = '';
        this.x = x;
        this.y = y;
        for (var iy = 0; iy < y; iy++) {
            this.cells[iy] = {};
            var row = document.createElement("tr");
            for (var ix = 0; ix < x; ix++) {
                var cell = document.createElement("td");
                cell.id = iy+"#"+ix;
                cell.className = "dead";
                row.appendChild(cell);
                this.cells[iy][ix] = {
                    state: "dead",
                    cell: cell,
                };
            }
            this.table.appendChild(row);
        }
        return this.cells;
    },
    setState: function(x, y, state){
        this.cells[x][y].state = state;
        this.cells[x][y].cell.className = state;
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
