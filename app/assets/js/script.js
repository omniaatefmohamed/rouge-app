(function ($) {
    "use strict";
        // start cart page
        var current_fs, next_fs, previous_fs; 
        var left, opacity, scale; 
        var animating; 
        $(".next").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show(); 
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50)+"%";
                    opacity = 1 - now;
                    current_fs.css({'transform': 'scale('+scale+')'});
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 1000, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                easing: 'easeInOutBack'
            });
        });
        
        $(".previous").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            previous_fs.show(); 
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    scale = 0.8 + (1 - now) * 0.2;
                    left = ((1-now) * 50)+"%";
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                }, 
                duration: 1000, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                easing: 'easeInOutBack'
            });
        });
        
        $(".submit").click(function(){
            return false;
        })
        // end cart page
        // start increase  & decrese product number
        $('.add').on('click',function(){
            var $qty=$(this).closest('.product-number').find('.qty');
            var currentVal = parseInt($qty.val());
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
            });
          $('.minus').on('click',function(){
                var $qty=$(this).closest('.product-number').find('.qty');
                var currentVal = parseInt($qty.val());
                if (!isNaN(currentVal) && currentVal > 1) {
                    $qty.val(currentVal - 1);
                }
            });  
        // end increase & decrese product number
    $('[data-toggle="tooltip"]').tooltip();
    $('.items-slider').slick({
        infinite: true, speed: 300, slidesToShow: 3, slidesToScroll: 3, arrows: false, adaptiveHeight: true 
      });
    $(".prevent-default").click(function(e){
        e.preventDefault();
    });
    $(".osahan-slider").slick({ centerMode: false, slidesToShow: 1, arrows: false, dots: true });
    $(".promo-slider").slick({ infinite: true, speed: 300, slidesToShow: 3, slidesToScroll: 3, arrows: false, adaptiveHeight: true });
    $(".recommend-slider").slick({ centerMode: true, infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: true, arrows: false, autoplay: true });
    $(".trending-slider").slick({
        centerPadding: "30px",
        slidesToShow: 2,
        arrows: false,
        responsive: [
            { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: "40px", slidesToShow: 1 } },
            { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: "40px", slidesToShow: 1 } },
        ],
    });
    var $main_nav = $("#main-nav");
    var $toggle = $(".toggle");
    var defaultOptions = { disableAt: false, customToggle: $toggle, levelSpacing: 40, navTitle: "", levelTitles: true, levelTitleAsBack: true, pushContent: "#container", insertClose: 2 };
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("class", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("class", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("class", "light");
            localStorage.setItem("theme", "light");
        }
    }
  
    $(".form-check").click(function(){
        if($('#english-lang').is(':checked')){
            $(".continue-btn").removeAttr("disabled");
        }
    }); 
    $(".form-check").click(function(){
        if($('#arabic-lang').is(':checked')){
            $(".continue-btn").removeAttr("disabled");
        }
    });

    
    toggleSwitch.addEventListener("change", switchTheme, false);
    $(".go-up").css("opacity", "0.1");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll == 0) {
            $(".go-up").css("opacity", "0.1");
        } else {
            $(".go-up").css("opacity", "1");
        }
    });
})(jQuery);
