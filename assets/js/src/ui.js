jQuery(document).ready(function($) {
    view.init(30, 20);

    $("table").on('click', 'td', function(event) {
        event.preventDefault();
        var cell = this.id.split("#");
        if($(this).hasClass('dead')){
            view.setState(cell[0], cell[1], "alive");
        }else{
            view.setState(cell[0], cell[1], "dead");
        }
    });

    $(".start").click(function(event) {
        life.start($(".speed").val());
    });

    $(".stop").click(function(event) {
        life.stop();
    });

});
