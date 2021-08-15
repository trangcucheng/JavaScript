/**
jQuery Manipulating CSS:
- addClass()
- removeClass()
- toggleClass()
- css()
 */

$(document).ready(function(){
    $("#add").click(function(){
        $("#container" ).addClass("red-text gray-bg")
    })   
    $("#remove").click(function(){
        $("#container" ).removeClass("red-text")
    })
    $("#toggle").click(function(){
        $("#container" ).toggleClass("red-text")
    })
    $("#css").click(function(){
        $("#container" ).css({
            "width": "50%"
        })
    })

})