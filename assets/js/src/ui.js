jQuery(document).ready(function($) {
    view.init(30, 20);

    $("table").on('click', 'td', function(event) {
        event.preventDefault();
        var x = $(this).attr('x');
        var y = $(this).attr('y');
        if($(this).hasClass('dead')){
            view.setState(y, x, "alive");
        }else{
            view.setState(y, x, "dead");
        }
    });

    $(".start").click(function(event) {
        life.start($(".speed").val());
    });

    $(".stop").click(function(event) {
        life.stop();
    });

});
