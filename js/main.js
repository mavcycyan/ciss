$(window).on('scroll resize load', function(){
    if($(window).scrollTop() > $('header').height()){
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});
$(window).on('scroll resize load', function(){
    if($(window).width() < 768){
        if($(window).scrollTop() > $('.partn').offset().top && $(window).scrollTop() < $('.partn').offset().top+$('.partn').height()+$('.partn').innerHeight()){
            $('header').addClass('color-black');
        }
        else {
            $('header').removeClass('color-black');
        }
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

if($(window).width() < 768){
    $('.fix-menu-cat').appendTo('.fix-menu-forcat'); 
}
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