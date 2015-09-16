$(function(){

    jQuery(document.body).on('click touchstart', '.testimonial-nav li', function(e){
        var requestId = $(this).attr('id');
        changeTestimonial(requestId);
        $(".testimonial-nav li").removeClass('active');
        $(this).addClass('active');
    });

    jQuery(document.body).on("swipe", ".testimonial-item",function(){
        changeTestimonial(1);
        $(".testimonial-nav li").removeClass('active');
        $(this).addClass('active');
    });

    function changeTestimonial(requestId)
    {
        var adjustMargin = requestId * 750;
        $('.testimonials-holder').animate({'margin-left': '-'+adjustMargin+'px'});
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