$(document).ready(function () {
    $("button").click(function () {
        // p태그이면서 class가 intro인 경우
        //$("p.intro").css("background-color", "gold");

        // p 태그의 후손 중 class가 intro인 경우
        //$("p .intro").css("background-color", "gold");

        // first와 last는 무조건 맨 처음 혹은 마지막에 나오는애만 선택이 됨
        //$("p:first").css("background-color", "red");
        //$("p:last").css("background-color", "red");

        // 각 li태그에서 첫번째들을 선택함
        //$("ul li:first-child").css("background-color", "red");

        // href 속성이 있는 요소를 조작
        //$("a[href!='http://www.naver.com']").css("background-color", "green");
        //$("a[href='http://www.naver.com']").css("background-color", "gold");

        //
        $("tr:even").css("background-color", "gold");
        $("tr:odd").css("background-color", "red");
    })
})