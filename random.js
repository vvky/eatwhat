$(function () {
    var run = 0,
        heading = $("h1"),
        timer;
    console.log(
        "该工具用来解决「吃啥」这一被人类公认排在人生 N 大难题前列的问题。\n" +
        "\n" +
        "简单，小巧，能够迅速帮助人们解决苦恼，消除纠纷。\n" +
        "\n" +
        "无数个日子里，无数个高矮胖瘦男女老少各不相同的个体每天都会思考的问题。\n" +
        "\n" +
        "「吃啥」，从现在起，就要被改变。\n" +
        "\n" +
        "还有一周就口蘑口蘑 🙏"
    )
    $("#start").click(function () {
        var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
        if (!run) {
            heading.html(heading.html().replace("吃这个！", "吃什么？"));
            $(this).val("停止");
            timer = setInterval(function () {
                var r = Math.ceil(Math.random() * list.length),
                    food = list[r - 1];
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
            heading.html(heading.html().replace("吃什么？", "吃这个！"));
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        }
        ;
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});