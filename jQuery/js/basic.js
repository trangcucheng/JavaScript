$(document).ready(function(){

    // some basic events
    $("h1:nth-child(1)").click(function(){
        $(this).hide();
    })

    $("h1:nth-child(2)").dblclick(function(){
        $(this).hide();
    })

    $("h1:nth-child(3)").mouseenter(function(){
        $(this).hide();
    })

    $("h1:nth-child(4)").mouseleave(function(){
        $(this).hide();
    })

    $("h1:nth-child(5)").mousedown(function(){
        $(this).hide();
    })

    $("h1:nth-child(6)").mouseup(function(){
        $(this).hide();
    })

    $("h1:nth-child(7)").hover(function(){
        $(this).hide();
    })

    // more events
    $("p").on({
        mouseenter: function(){
            $(this).css("color","pink");
        },
        mouseleave: function(){
            $(this).css("color","green");
        },
        click: function(){
            $(this).css("color","blue");
        }
    })

});
