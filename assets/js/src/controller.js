jQuery(document).ready(function($) {
    view.init(30, 20);

    $('table').on('click', 'td', function(event) {
        event.preventDefault();
        let x = $(this).attr('x');
        let y = $(this).attr('y');
        if ($(this).hasClass('dead')){
            view.setState(y, x, 'alive');
        } else {
            view.setState(y, x, 'dead');
        }
    });
    $('.start').click(function(event) {
        $('.status').text('playing');
        model.timer = setInterval( function() {
            let c = model.iteration(view.cells, view.x, view.y);
            view.render(c);
        } , parseInt($('.speed').val()));
    });

    $('.stop').click(function(event) {
        $('.status').text('stopped');
        clearInterval(model.timer);
    });
});
