$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000,function(){
            alert("This paragraph has been hidden!");
        });
    });

    $("#show").click(function(){
        $("p").show(1000);
    });

    $("#toggle").click(function(){
        $("p").toggle();
    });

    $("#fade-in").click(function(){
        $("p").fadeIn(1000);
    });

    $("#fade-out").click(function(){
        $("p").fadeOut(1000);
    });

    // fadeToggle(); 

    $("#fade-to").click(function(){
        $("p").fadeTo(1000,0.5);
    });

    // slideUp(), slideDown()
    $("#slideToggle").click(function(){
        $("p").slideToggle(1000);
    });

    // animation: syntax: $(selector).animate({params},speed,callback);
    // params: defines css properties to be animated
    $("#animation").click(function(){

        /** 
        $("p").animate({
            left: '250px',
            opacity: '0.5',
            height: '+=200px', // using relative values tăng chiều cao của phần tử
            width: '150px' 
        },1000);
        */
        // using pre-defined values
        /**
         $("p").animate({
            height: "toggle"
        },1000);
         */

        // uses Queue functionality: 
        var p = $("p");
        p.animate({height: '300px', opacity: '0.4'}, "slow");
        p.animate({width: '300px', opacity: '0.8'}, "slow");
        p.animate({height: '+=100px', opacity: '0.4'}, "slow");
    });

    $("#stop").click(function(){
        $("p").stop();
    });

    // CallBack: JS statements được thực thi line by line. Sẽ có trường hợp dòng tiếp theo được thực thi khi hiệu ứng trc đó chưa kết thúc => xảy ra lỗi => sử dụng callback để tránh
    /**
     $("#hide").click(function(){
        $("p").hide(1000, function(){
            alert("This paragraph has been hidden!");
        });
    });
     */


    // jQuery Method Chaining: nối chuỗi các hành động/ sự kiện xảy ra
    $("#test-chain").click(function(){
        $("p").css("color", "red").slideUp(2000).slideDown(2000);
    });
    // có thể viết:
    /**
    $("#test-chain").click(function(){
        $("p").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
     */
});