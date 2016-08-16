jQuery(document).ready(function($) {
    model.init(30, 20)
    view.init(30, 20);

    $('table').on('click', 'td', function(event) {
        event.preventDefault();
        let x = $(this).attr('x'),
            y = $(this).attr('y');
        if (model.getState(x, y)=="dead"){
            model.setState(x, y, 'alive');
        } else {
            model.setState(x, y, 'dead');
        }
        view.render(model.getCells());
    });

    $('.start').click(function(event) {
        view.setStatus("playing");
        let timer = setInterval( function() {
            view.render(model.iteration());
        } , parseInt($('.speed').val()));
        model.setTimer(timer);
    });

    $('.stop').click(function(event) {
        view.setStatus("stopped");
        model.clearTimer();
    });
});
