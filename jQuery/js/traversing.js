/**
===== Ancestors
Three useful jQuery methods for traversing up the DOM tree are:

    - parent(): returns the direct parent element of the selected element
    - parents(): returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
    - parentsUntil(): returns all ancestor elements between two given arguments.
ex: 
$(document).ready(function(){
  $("span").parentsUntil("div");
});
=> những ancestor giữa <span> và <div> (không tính <span> và <div>)

=== Decendants
Two useful jQuery methods for traversing down the DOM tree are:

    - children(): returns all direct children of the selected element. ( chỉ "down" xét 1 cấp)
    Ex:
    $(document).ready(function(){
        $("div").children("p.first");  // lọc ra con là p.first
    });
    - find(): returns descendant elements of the selected element, all the way down to the last descendant.

==== Siblings:
There are many useful jQuery methods for traversing sideways in the DOM tree:

    - siblings(): returns all sibling elements of the selected element
    - next(): returns the next sibling element of the selected element
    - nextAll(): returns all next sibling elements of the selected element
    - nextUntil(): returns all next sibling elements between two given arguments.
    - prev()
    - prevAll()
    - prevUntil()

==== Filtering

 */

$(document).ready(function(){
    $(".span1").parent().css({"color": "red", "border": "2px solid red"});
    $(".span2").parents().css({"color": "red", "border": "2px solid red"});

});