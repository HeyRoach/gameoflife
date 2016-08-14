const model = {
    timer: null,
    matrix: [[-1, -1], [0, -1], [1, -1],
             [-1, 0], [1, 0],
             [-1, 1], [0, 1], [1, 1]],
    iteration(cells, x, y) {
        let lifeCells = [];

        for (let iy = 0; iy < y; iy++) {
            for (let ix = 0; ix < x; ix++) {
                let nearby = 0;

                $.each(model.matrix, function(index, matrix) {
                    if (cells[iy + matrix[0]] === undefined || cells[iy + matrix[0]][ix + matrix[1]] === undefined) {
                        return;
                    }

                    if (cells[iy + matrix[0]][ix + matrix[1]].state == 'alive') {
                        nearby++;
                    }
                });


                switch (nearby) {
                    case 3:
                        lifeCells.push([iy, ix]);
                        break;
                    case 2:
                        if ( cells[iy][ix].state=='alive' ){
                            lifeCells.push([iy, ix]);                            
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return lifeCells;
    },
};
