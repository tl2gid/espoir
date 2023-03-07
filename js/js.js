$(document).ready(function(){
    var sw=screen.availWdith;
    
    $("body").css({
        "width":sw,
        "overflow-x":"hidden"
    });
    
    var sh=window.innerHeight;

    $("#keyimage").height(sh);

    //bxslider
    $(document).ready(function(){
        $('#slide-contents').bxSlider({
            auto: true,
            pause: 3000,
            mode:'fade'
        });
    });

    //menu hover
    $(".menu-hover, .menu").hover(function(){
        $(".menu").css({
            "left":"0",
        });
    },function(){
        $(".menu").css({
            "left":"-350px",
        });
    });

    //스크롤
    $(window).on("scroll",function(){

    var pos=$("html").scrollTop();
    //$("#info").text(pos);

    $(".pro-txt")[pos>=300 ? "addClass" : "removeClass"]("on");
    $(".be-txt")[pos>=800 ? "addClass" : "removeClass"]("on");
    $(".look-txt")[pos>=1700 ? "addClass" : "removeClass"]("on");
    $(".be-img1")[pos>=2600 ? "addClass" : "removeClass"]("on");
    $(".be-img2")[pos>2600 ? "addClass" : "removeClass"]("on");
    $(".water-txt")[pos>3000 ? "addClass" : "removeClass"]("on");
    $(".w-img3")[pos>4100 ? "addClass" : "removeClass"]("on");
    $(".peach-txt")[pos>5500 ? "addClass" : "removeClass"]("on");
    $(".peach-img1")[pos>5800 ? "addClass" : "removeClass"]("on");
    $(".peach-img2")[pos>5800 ? "addClass" : "removeClass"]("on");
    });
    
    function carousel(){
        /*
        var $clone=$(".carousel-content > span").first().clone();
        $(".carousel-content").append($clone);
        $(".carousel-content > span").first().remove();
        */

        $(".carousel-content").animate({
            left:"-3000px"
        },{
            complete:function(){
                var $clone = $(".txt-wrap").first().clone();
                $(".carousel-content").append($clone);
                $(".txt-wrap").first().remove();
                $(".carousel-content").css("left","0px");
            }
            ,duration:90000,easing:"linear"
        });
    }	
    setInterval(carousel,00);
});