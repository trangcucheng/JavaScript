/**
Thư viện jQuery có chứa nhiều phương thức thao tác với DOM
=> cho phép thao tác với elements và attributes dễ dàng hơn
* Get content:
    - text(): đặt/ trả về nội dung text của một element
    - html(): đặt/ trả về nội dung (kể cả HTML "code" ) của một element
    - val(): đặt/ trả về value của một form field
    - attr(""): get attribute values
    - attr("",""): set attribute value ( có thể set nhiều attributes)
 * Add new HTML content
    - append(): chèn vào cuối element
    - prepend(): chèn lên đầu element
    - after(): chèn vào sau element
    - before(): chèn vào trc element

 * Remove Element/content:
    - remove(): xóa 1 element và những child elements
    - empty(): xóa child element của element đc chọn 
    */

$(document).ready(function(){
    $("#show-text").click(function(){
        alert("Text: "+ $("#para0").text());
        $("#para1").text("Nguyễn Thị Huyền Trang!");
    });

    $("#show-html").click(function(){
        alert("HTML: "+ $("#para0").html());
        $("#para2").html("<b>Hello world!</b>");
    })

    $("a").hover(function(){
        alert("The link is "+ $("a").attr("href"));
    })

    $("#set-attrs").click(function(){
        $("#para3").attr({
            "style": "color:pink; width: 50%",
            "href": "https://www.w3schools.com/jquery/jquery_dom_set.asp"
            
        });
    })

    $("#append").click(function(){
        $("#para3").append("<b><i>Hello</i><b>");
    })

    $("#prepend").click(function(){
        $("#para3").prepend("<b><i>Hello</i><b>");
    })

    $("#before").click(function(){
        $("#para3").before("<h1>Hello</i></h1>");
    })

    $("#after").click(function(){
        var txt1 = "<p>Text.</p>";               // Create element with HTML 
        var txt2 = $("<p></p>").text("Text.");
        $("#para3").after(txt1,txt2);
    })

    $("#remove").click(function(){
        $("#test-remove").remove();
    })

    // remove()có thể nhận tham số
    // ex: remove(".test") xóa những element có class = "test"
    $("#empty").click(function(){
        $("#test-remove").empty();
    })


});