$(function(){
    FastClick.attach(document.body);

    jQuery(document.body).on('click touchstart', '.testimonial-nav li', function(e){
        var requestId = $(this).attr('id');
        changeTestimonial(requestId);
        $(".testimonial-nav li").removeClass('active');
        $(this).addClass('active');
    });

    $(".testimonials-holder").swipe( {
        swipeLeft:function() {
            nextTestimonial();
        },
        swipeRight:function() {
            prevTestimonial();
        },
        threshold:75
    });

    function changeTestimonial(requestId)
    {
        $(".testimonials-holder .active").fadeOut(function(){
            $(".testimonials-holder li[data-testimonialId="+requestId+"]").fadeIn().addClass('active');
        }).removeClass('active');
    }

    jQuery(document.body).on('click touchstart', '.prev-testimonial', function(e){
        prevTestimonial();
    });

    jQuery(document.body).on('click touchstart', '.next-testimonial', function(e){
        nextTestimonial();
    });

    function nextTestimonial() {
        var active = $('.testimonials-holder .active');
        var prev = (active.is(":last-child") ? $('.testimonials-holder li:first-child'): active.next());
        active.fadeOut(function(){
            $(".testimonial-nav .active").removeClass('active');
            prev.fadeIn().addClass('active');
            var newID = $(".testimonials-holder .active").attr('data-testimonialId');
            $(".testimonial-nav #"+newID).addClass('active');
        }).removeClass('active');
    }

    function prevTestimonial() {
        var active = $('.testimonials-holder .active');
        var prev = (active.index() == 0 ? $('.testimonials-holder li:last-child'): active.prev());
        active.fadeOut(function(){
            $(".testimonial-nav .active").removeClass('active');
            prev.fadeIn().addClass('active');
            var newID = $(".testimonials-holder .active").attr('data-testimonialId');
            $(".testimonial-nav #"+newID).addClass('active');
        }).removeClass('active');
    }

    $(function(){
        $('header').data('size','big');
    });

    $(window).scroll(function(){
      if($(document).scrollTop() > 100)
      {
        if($('header').data('size') == 'big')
        {
            $('header').data('size','small');
            $('header').stop().animate({
                height:'50px'
            },600);
            $('header nav').stop().animate({
                lineHeight:'50px'
            },600);
            $('.menu_collapse_icon_label').stop().animate({
                marginTop:'10px'
            },600);
            $('.logo').stop().animate({
                opacity:'0'
            },600);
            $('.simple-icon').stop().animate({
                opacity:'1'
            },600);
            $('.side-navigation').stop().animate({
                marginTop:'52px'
            },600);
            $('.contact-number a i').stop().animate({
                marginTop:'10px'
            },600);
        }
    }
    else
    {
        if($('header').data('size') == 'small')
        {
            $('header').data('size','big');
            $('header').stop().animate({
                height:'104px'
            },600);
            $('header nav').stop().animate({
                lineHeight:'104px'
            },600);
            $('.menu_collapse_icon_label').stop().animate({
                marginTop:'36px'
            },600);
            $('.logo').stop().animate({
                opacity:'1'
            },600);
            $('.simple-icon').stop().animate({
                opacity:'0'
            },600);
            $('.side-navigation').stop().animate({
                marginTop:'106px'
            },600);
            $('.contact-number a i').stop().animate({
                marginTop:'36px'
            },600);
        }
    }
});

    // font trial
    var path = '//easy.myfonts.net/v2/js?sid=569(font-family=Futura+Light)&sid=571(font-family=Futura+Book)&sid=573(font-family=Futura+Medium)&sid=575(font-family=Futura+Bold)&key=JmeD5mPpFE',
    protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
    trial = document.createElement('script');
    trial.type = 'text/javascript';
    trial.async = true;
    trial.src = protocol + path;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(trial);

});