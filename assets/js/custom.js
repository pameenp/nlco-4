
// Content Animations 
// AOS.init({
//     easing: 'ease-in-out-sine'
// });

/* MENU DROP DOWN ICON ACTIONS --*/
$('.menu-item-has-children').append(" <div class='drop-down-icon'><i class='menu-fadown fas fa-angle-down'></i></div> ");

//dop down menu hover
$('.menu-item-has-children').mouseover(function(){
    $(this).find('.sub-menu').addClass('submenu-active');
});
$('.menu-item-has-children').mouseout(function(){
    $(this).find('.sub-menu').removeClass('submenu-active');
});

//downdown menu click 
$(".drop-down-icon").click(function(){
    $(this).parent('.menu-item-has-children').find('.sub-menu').toggleClass('submenu-active');
    $(this).find('.menu-fadown').toggleClass('fa-angle-up fa-angle-down');
    $('body').addClass('primal');
});

//mouse hove and mouse out 
$('.sub-menu').mouseover(function(){
    $(this).parent('.menu-item-has-children').find('.menu-fadown').removeClass('fa-angle-down');
    $(this).parent('.menu-item-has-children').find('.menu-fadown').addClass('fa-angle-up');
});
$('.sub-menu').mouseout(function(){
    $(this).parent('.menu-item-has-children').find('.menu-fadown').addClass('fa-angle-down');
    $(this).parent('.menu-item-has-children').find('.menu-fadown').removeClass('fa-angle-up');
});

//MENU SECTION WITH RESPONSIVE CLASSES
$('.menu-button').click(function(){
    $('.menu-area').toggleClass('menu-active');
    $('body').addClass('fixedPosition');
});
$('.menu-close').click(function(){
    $('.menu-area').removeClass('menu-active');
    $('body').removeClass("fixedPosition");
});
$('.menu-area a').click(function(){
    $('.menu-area').removeClass('menu-active');
    $('body').removeClass('fixedPosition');
});

$('.opt-popupblock').click(function(){
    $('.opt-popupblock').removeClass('popup-active');
    $('body').removeClass('bodyfix');
});
$('.otp-popupclose img').click(function(){
    $('.opt-popupblock').removeClass('popup-active');
    $('.opt-popupblock').removeClass('verfypopup');
    $('body').removeClass('bodyfix');
});


// drop down for login
$('.dropdown_userlogin').click(function(){
    $('.dropdownlogin').toggleClass('dropdownlogin-open');
});



//BANNER SLIDER ------------
$('.brands-slider .owl-carousel').owlCarousel({
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true,
    smartSpeed:450, loop:true, margin:0, 
    // autoHeight:true,
    dots: false, nav: true,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    stagePadding:0,
    responsive:{ 
           0:{ items:3},
         600:{ items:4},
        1000:{ items:6} 
    }
});

$('.banner-slider .owl-carousel').owlCarousel({
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true,
    smartSpeed:450, loop:true, margin:0, 
    // autoHeight:true,
    dots: false, nav: true,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    stagePadding:0,
    responsive:{ 
           0:{ items:1},
         600:{ items:1},
        1000:{ items:1} 
    }
});

// GALLERY POUP  ------------
$('.photo-gallery a').simpleLightbox();


