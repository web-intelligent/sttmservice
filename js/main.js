$(document).ready(function () {
    // Проверка на распродажу
    $('.product').each(function (index, element) {
        // element == this
        if ($(element).find('.old-price').html()) {
            $(element).append('<div class="sale">Распродажа</div>');
        }
    });
    window.onscroll = function() {
        var height = $(window).scrollTop();
        var asidePosition = $('aside').offset().top;
        if (height >= asidePosition) {
            $('aside').addClass('static');
        }
        console.log(asidePosition);
        console.log(height);
    }
});

