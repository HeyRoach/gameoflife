const model = {
    timer: null,
    cells: {},
    matrix: [[-1, -1], [0, -1], [1, -1],
             [-1, 0], [1, 0],
             [-1, 1], [0, 1], [1, 1]],
    setTimer(timer){
        this.timer=timer;
    },
    clearTimer(){
        clearInterval(this.timer);
    },
    init(x, y, cells = false){
        this.cells = {};
        this.x = x;
        this.y = y;
        for (let iy = 0; iy < y; iy++) {
            this.cells[iy] = {};
            for (let ix = 0; ix < x; ix++) {
                this.cells[iy][ix] = {state: 'dead'};
            }
        }
        if(cells){
            cells.forEach(c => {
                this.cells[c[0]][c[1]].state = "alive";
            });
        }
        return this.cells;
    },
    getState(x, y){
        return this.cells[y][x].state;
    },
    setState(x, y, state){
        this.cells[y][x].state = state;
    },
    getCells(){
        return this.cells;
    },
    iteration() {
        let lifeCells = [];

        for (let iy = 0; iy < this.y; iy++) {
            for (let ix = 0; ix < this.x; ix++) {
                let nearby = 0;

                this.matrix.forEach(m => {
                    if (!this.cells[iy + m[0]] || !this.cells[iy + m[0]][ix + m[1]]) {
                        return;
                    }

                    if (this.cells[iy + m[0]][ix + m[1]].state == 'alive') {
                        nearby++;
                    }
                });


                switch (nearby) {
                    case 3:
                        lifeCells.push([iy, ix]);
                        break;
                    case 2:
                        if ( this.cells[iy][ix].state=='alive' ){
                            lifeCells.push([iy, ix]);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        this.init(this.x, this.y, lifeCells);
        return this.cells;
    },
};
