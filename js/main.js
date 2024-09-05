$(function(){

    $('.btn_close').click(function(){
        $('.search').slideUp();
    })
    
    $('.bannerslide').slick({
        autoplay: true,
        dots:true,
        pauseOnHover:false,
        speed:800,
        fade:true,
        cssEase: 'linear'
    });

    // 모바일 2차메뉴
    $('.btn_menu').on('click',function(){
        $('.m_menu_wrap').show().animate({'right':0},300);
        $('body,html').css({'overflow':'hidden'});
    })
    $('.m_btn_menu').on('click',function(){
        $('.m_menu_wrap').animate({'right':'-100%'},300);
        $('body,html').css({'overflow':'auto'});
    })

    $('.m_depth2').hide();
    $('.m_menu_wrap .menu li').on('click',function(){
        let num = $(this).index();
        // console.log(num);
        $(this).find('.down').toggleClass('on')
        $(this).siblings().find('.down').removeClass('on');

        $(this).find('.m_depth2').slideToggle();
        $(this).siblings().find('.m_depth2').slideUp();
    })


    // slide 컨트롤
    let sw = true;
    $('.visual #control').click(function(){
        if(sw == true){
            $('.visual #control').addClass('on');
            $('.bannerslide').slick('slickPause');
            sw = false;
        }else{
            $(this).removeClass('on');
            $('.bannerslide').slick('slickPlay');
            sw = true;
        }
    })

    // 숨기는 목록 !!
    $('.search').hide(); // 검색창 숨기기
    $('.bg_graphic').hide();


    // load 애니메이션
    $(window).on('load',function(){
        let num = $(this).width();
        $('.content').addClass('on');
        $('.search').slideDown();

        if(num <= 767){
            $('.util .btn_li').show();
        }else{
            $('.util .btn_li').hide();
        }
    })

    // pc - header depth2
    $('.depth2').hide();
    $('.inner .gnb li').on('mouseenter',function(){
        let num = $(this).index();
        // console.log(num);

        $(this).find('.depth2').stop().slideToggle(300);
        $(this).siblings().find('.depth2').slideUp(300);
    })
    $('.inner .gnb li').on('mouseleave',function(){
        let num = $(this).index();
        // console.log(num);

        $(this).find('.depth2').stop().slideUp(300);
    })


    // 반응형일 때
    $('.util .btn_li').hide();
    $(window).on('resize',function(){
        // 창의 현재 크기를 알아야 함.
        let num = $(this).width();
        // console.log(num);

        // 창의 가로 사이즈가 767보다 작거나 같은 경우 모바일 이미지로 교체
        if(num <= 767){
            $('.util .btn_li').show();
            $('.m_menu_wrap').hide();
            $('.util a.btn_menu').show();
        }else{
            $('.util .btn_li').hide();
            $('.m_menu_wrap').hide();
            $('.util a.btn_menu').hide();
        }
    })

    // promo tab
    $('.tab_btn li').click(function(){
        let num = $(this).index();
        // console.log(num);
        $('.tab_btn li').removeClass('on');
        $(this).addClass('on');
        
        if(num == 1){
            $('.promo_list').hide();
            $('.promo_list').eq(1).fadeIn(800);
        }else{
            $('.promo_list').hide();
            $('.promo_list').eq(0).fadeIn(800);
        }
    })



    // floating btn
    $('.delivery').mouseenter(function(){
        $(this).toggleClass('on');
    })
    $('.delivery').mouseleave(function(){
        $(this).removeClass('on');
    })
    $('.reservation').mouseenter(function(){
        $(this).toggleClass('on')
    })
    $('.reservation').mouseleave(function(){
        $(this).removeClass('on');
    })

    // floationg btn
    $('.floating_btn').hide()

    // 스크롤 애니
    $(window).on('scroll',function(){
        let num = $(window).scrollTop();
        console.log(num);
        
        let visual = $('.visual')
        let quick = $('.quick')
        let promo = $('.promotion');
        let banner = $('.banner');
        let news = $('.news');
        let notice = $('.notice_qna');


        let visual_hi = visual.outerHeight();
        let quick_hi = quick.outerHeight();
        let promo_hi = promo.outerHeight();
        let banner_hi = banner.outerHeight();
        let news_hi = news.outerHeight();
        let notice_hi = notice.outerHeight();
        // console.log(visual_hi);
        
        if( num >= visual_hi){
            $('.floating_btn').fadeIn()
            $('.promotion .bg_graphic').fadeIn();
        }else{
            $('.floating_btn').fadeOut()
            $('.bg_graphic').fadeOut();
        }

        if( num >= 1200){
            $('.banner .bg_graphic').fadeIn();
        }

        if (num >= 1714){
            $('.introduce .inner').addClass('on');
        }else{
            $('.introduce .inner').removeClass('on');
        }
        
        let news_ani = visual_hi+quick_hi+promo_hi+banner_hi;
        // console.log(news_ani);
        if (num >= news_ani-20) {
            $('.news .title').addClass('on');
            $('.content .youtube').addClass('on');
            $('.content .news_list').addClass('on');
        }else{
            $('.news .title').removeClass('on');
            $('.content .youtube').removeClass('on');
            $('.content .news_list').removeClass('on');
        }
    })
    
    $('.floating_btn .top').on('click',function(){
        $('body,html').animate({'scrollTop':0},500);
    })



    // introduce 메뉴
    $('.introduce .intro_list>li').on('mouseenter',function(){
        let num = $(this).index();
        // console.log(num);
        $(this).css({'opacity':1})
        $(this).siblings().css({'opacity':.5})
    })
    $('.introduce .intro_list>li').on('mouseleave',function(){
        $(this).css({'opacity':1})
        $(this).siblings().css({'opacity':1})
    })


    // notice
    $('.notice_list>li').on('click',function(){
        window.alert("준비중인 콘텐츠 입니다 :)");
    })


    // qna list
    $("ul.qna_list li>a").click(function(){
        // 메뉴 열고 닫기
        $(this).next().slideToggle().parents().siblings().find('.answer').slideUp();

        // li on 붙이기
        $(this).parents().toggleClass("on").siblings().removeClass("on");
    })


    // footer family site
    $('.sns>li .family').on('click',function(){
        $('.sites').slideToggle();
        $('.sns>li .family').toggleClass('on');
    })
    
})