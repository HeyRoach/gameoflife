var life = {
    timer: null,
    start: function(speed) {
        $(".status").text("playing");
        this.timer = setInterval( function() {
            life.iteration();
        } , parseInt(speed));
    },
    stop: function(){
        $(".status").text("stopped");
        clearInterval(this.timer);
    },
    iteration: function() {
        var lifeCells = [];
        for (var iy = 0; iy < view.y; iy++) {
            for (var ix = 0; ix < view.x; ix++) {
                var nearby = 0;

                if (ix > 0 && iy > 0)
                    if (view.cells[iy - 1][ix - 1].state == "alive")
                        nearby++;
                if (iy > 0)
                    if (view.cells[iy - 1][ix].state == "alive")
                        nearby++;
                if (ix > 0)
                    if (view.cells[iy][ix - 1].state == "alive")
                        nearby++;

                if (ix > 0 && iy < view.y - 1)
                    if (view.cells[iy + 1][ix - 1].state == "alive")
                        nearby++;

                if (iy > 0 && ix < view.x - 1)
                    if (view.cells[iy - 1][ix + 1].state == "alive")
                        nearby++;

                if (ix < view.x - 1)
                    if (view.cells[iy][ix + 1].state == "alive")
                        nearby++;

                if (iy < view.y - 1)
                    if (view.cells[iy + 1][ix].state == "alive")
                        nearby++;

                if (iy < view.y - 1 && ix < view.x - 1)
                    if (view.cells[iy + 1][ix + 1].state == "alive")
                        nearby++;

                if(view.cells[iy][ix].state=="dead" && nearby==3){
                    lifeCells.push([iy,ix]);
                }

                if(view.cells[iy][ix].state=="alive" && (nearby==2 || nearby==3)){
                    lifeCells.push([iy,ix]);
                }

            }
        }
        view.render(lifeCells);
        return lifeCells;
    }
}
