jQuery(function($){
    $('.owl-carousel').owlCarousel();

    $('.featured-item a').click(function(event){
        event.preventDefault();
        alert('Produto fora de estoque, por favor escolha outro produto ou encomende esse conosco :)');
    })

    $('.featured-item').hover(
        function(){$(this).css('background-color', '#e6e6e6')},
        function(){$(this).css('background-color', '#ffffff')})
})
