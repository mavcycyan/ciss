$(window).on('scroll resize load', function(){
    if($(window).scrollTop() > $('header').height()){
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});


/***/

$('.btn-clck').click(function(){
    if($('.fix-menu').hasClass('hidden')){
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