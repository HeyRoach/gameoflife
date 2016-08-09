var model = {
    timer: null,
    iteration: function(cells, x, y) {
        var lifeCells = [];
        for (var iy = 0; iy < y; iy++) {
            for (var ix = 0; ix < x; ix++) {
                var nearby = 0;

                if (ix > 0 && iy > 0)
                    if (cells[iy - 1][ix - 1].state == "alive")
                        nearby++;
                if (iy > 0)
                    if (cells[iy - 1][ix].state == "alive")
                        nearby++;
                if (ix > 0)
                    if (cells[iy][ix - 1].state == "alive")
                        nearby++;

                if (ix > 0 && iy < y - 1)
                    if (cells[iy + 1][ix - 1].state == "alive")
                        nearby++;

                if (iy > 0 && ix < x - 1)
                    if (cells[iy - 1][ix + 1].state == "alive")
                        nearby++;

                if (ix < x - 1)
                    if (cells[iy][ix + 1].state == "alive")
                        nearby++;

                if (iy < y - 1)
                    if (cells[iy + 1][ix].state == "alive")
                        nearby++;

                if (iy < y - 1 && ix < x - 1)
                    if (cells[iy + 1][ix + 1].state == "alive")
                        nearby++;

                if(cells[iy][ix].state=="dead" && nearby==3){
                    lifeCells.push([iy,ix]);
                }

                if(cells[iy][ix].state=="alive" && (nearby==2 || nearby==3)){
                    lifeCells.push([iy,ix]);
                }

            }
        }
        return lifeCells;
    }
}
