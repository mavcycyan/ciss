$(window).on('scroll resize load', function(){
    if($(window).scrollTop() > $('header').height()){
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});


/***/

jQuery(document).ready(function($){	
    $(".call_us").fancybox({ 
        href: '#modal_call_us', 
        wrapCSS: 'modal_call_us_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        autoScale: true
    });
});
/***/

$('.btn-clck').click(function(){
    if($('.fix-menu').hasClass('hidden')){
        /***/
        $('.fix-srch').addClass('hidden');
        $('.srch-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-auth').addClass('hidden');
        $('.auth-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-menu').removeClass('hidden');
        $(this).addClass('opened');
        $('header').addClass('color-white');
    }
    else{
        $('.fix-menu').addClass('hidden');
        $(this).removeClass('opened');
        $('header').removeClass('color-white');
    }
});  

/***/
$(window).on('scroll resize load', function(){
    if($(window).width() < 768){
        $('.fix-menu-cat').appendTo('.fix-menu-forcat'); 
    }
    else {
        $('.fix-menu-cat').appendTo('.fix-menu-cont'); 
    }
});
/***/

$('.h-mob-lang button').click(function(){
    if($('.h-lang-cont').hasClass('opened')){
        $('.h-lang-cont').removeClass('opened');
    }
    else{
        $('.h-lang-cont').addClass('opened');
    }
});  

/***/

$('.srch-clck').click(function(){
    if($('.fix-srch').hasClass('hidden')){
        /***/
        $('.fix-menu').addClass('hidden');
        $('.btn-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-auth').addClass('hidden');
        $('.auth-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-srch').removeClass('hidden');
        $(this).addClass('opened');
        $('header').addClass('color-white');
    }
    else{
        $('.fix-srch').addClass('hidden');
        $(this).removeClass('opened');
        $('header').removeClass('color-white');
    }
});  

/***/

$('.auth-clck').click(function(){
    if($('.fix-auth').hasClass('hidden')){
        /***/
        $('.fix-menu').addClass('hidden');
        $('.btn-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-srch').addClass('hidden');
        $('.srch-clck').removeClass('opened');
        $('header').removeClass('color-white');
        /***/
        $('.fix-auth').removeClass('hidden');
        $(this).addClass('opened');
        $('header').addClass('color-white');
    }
    else{
        $('.fix-auth').addClass('hidden');
        $(this).removeClass('opened');
        $('header').removeClass('color-white');
    }
});  

/***/

