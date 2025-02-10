$(function () {
    // dblclick -> 마우스 더블 클릭
    // $("#btn").dblclick(function () {
    //     $("p").hide();
    //     $(this).hide();
    // });

    // mouse가 올라가면 움직임
    // $("p").mouseenter(function () {
    //     $(this).css("background-color", "gold");
    // });
    // mouse가 안올라가있을때
    // $("p").mouseleave(function () {
    //     $(this).css("background-color", "pink");
    // });

    // 이게 마우스 클릭하고 올릴때
    // $("p").mouseup(function () {
    //     $(this).css("background-color", "pink");
    // });

    // 마우스 클릭할때
    // $("p").mousedown(function () {
    //     $(this).css("background-color", "gold");
    // });

    // mouseenter vs mouseover 차이
    // $("div.outer").mouseover(function () {
    //     console.log("mouse over event 발생");
    // });

    // $("div.outer").mouseenter(function () {
    //     console.log("mouse enter event 발생");
    // });

    // $("div.inner").mouseover(function () {
    //     console.log("내부 mouse over event 발생");
    // });

    // $("div.inner").mouseenter(function () {
    //     console.log("내부 mouse enter event 발생");
    // });
    
    // mouseover vs mousehover 차이
    // $("div.outer").mouseover(function () {
    //     console.log("mouse over 이벤트 발생")
    // });

    // $("div.outer").hover(function () {
    //     console.log("mouse hover -> over 이벤트 발생")
    // }, function () {
    //     console.log("mouse hover -> out 이벤트 발생")
    //     }
    // );
    
    // focus vs blur
    // $("[name='subject']").focus(function (e) {
    //     e.preventDefault();
    //     $(this).css("background-color", "gray");
    // });
    // $("input").blur(function (e) {
    //     e.preventDefault();
    //     $(this).css("background-color", "white");
    // });

    // on method -> 동적 생성된 태그나 클래스에도 적용이 가능하다고 함
    // $("[name='subject']").on('focus', function () {
    //     $(this).css("background-color", "gray");
    // });
    // $("[name='subject']").on('blur', function () {
    //     $(this).css("background-color", "yellow");
    // });

    $("h1").on({
        click: function () {
            $(this).css("background-color", "yellow")
        },
        mouseleave: function () {
            $(this).css("background-color", "green")
        },
        mouseenter: function () {
            $(this).css("background-color", "red")
        },
    });
});