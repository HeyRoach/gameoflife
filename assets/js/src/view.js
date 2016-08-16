const view = {
    table: $('#view'),
    init(x, y) {
        this.table.html('');
        this.x = x;
        this.y = y;
        for (let iy = 0; iy < y; iy++) {
            let row = $('<tr></tr>');
            for (let ix = 0; ix < x; ix++) {
                let cell = $('<td class="dead"></td>').attr({ x: ix, y: iy });
                row.append(cell);
            }
            this.table.append(row);
        }
    },
    setStatus(status){
        $('.status').text(status);
    },
    render(cells){
        for (let iy = 0; iy < this.y; iy++) {
            for (let ix = 0; ix < this.x; ix++) {
                this.table
                    .find("tr").eq(iy)
                    .find("td").eq(ix)
                    .removeClass("dead alive")
                    .addClass(cells[iy][ix].state);
            }
        }
    },
};
