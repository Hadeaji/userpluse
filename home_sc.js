

$("#Component_24__3").click(function () {
    $("#tool_list").toggleClass("hide");
    $("#Component_24__3").toggleClass("hide");
});

//   $(window).click(function() {
//     $("#tool_list").removeClass("hide");
//   });

var activeSpaceClass = "";
var activeAlignClass = "textAlign-left";
var activeFontFamClass = "";
var plusSize = 0;

$("span").toggleClass("textAlign-left");


$("#closeList").click(function () {
    $("#tool_list").toggleClass("hide");
    $("#Component_24__3").toggleClass("hide");
});

$(".Group_1178_Class").click(function () {
    if (plusSize < 10) {
        plusSize += 5;
        $("*").map(function () {

            var size = parseInt($(this).css('font-size'));
            $(this).css({ 'font-size': size + 5 + "px" });
    
        })
    } else {
        plusSize -= 10;
        $("*").map(function () {

            var size = parseInt($(this).css('font-size'));
            $(this).css({ 'font-size': size - 10 + "px" });
    
        })
    }

});

$(".Group_1176_Class").click(function () {
    if (activeSpaceClass == "") {
        $("*").toggleClass("wordSpacing-3");
        activeSpaceClass = "wordSpacing-3"
    } else if (activeSpaceClass == "wordSpacing-3") {
        $("*").toggleClass("wordSpacing-3");
        $("*").toggleClass("wordSpacing-5");
        activeSpaceClass = "wordSpacing-5";
    } else if (activeSpaceClass == "wordSpacing-5") {
        $("*").toggleClass("wordSpacing-5");
        $("*").toggleClass("wordSpacing-7");
        activeSpaceClass = "wordSpacing-7";
    } else if (activeSpaceClass == "wordSpacing-7") {
        $("*").toggleClass("wordSpacing-7");
        activeSpaceClass = "";
    }
});



$(".Group_1173_Class").click(function () {
    if (activeAlignClass == "textAlign-left") {
        $("span").toggleClass("textAlign-left");
        $("span").toggleClass("textAlign-center");
        activeAlignClass = "textAlign-center";
    } else if (activeAlignClass == "textAlign-center") {
        $("span").toggleClass("textAlign-center");
        $("span").toggleClass("textAlign-right");
        activeAlignClass = "textAlign-right";
    } else if (activeAlignClass == "textAlign-right") {
        $("span").toggleClass("textAlign-right");
        $("span").toggleClass("textAlign-left");

        activeAlignClass = "textAlign-left";
    }
});

$(".Group_1177_Class").click(function () {
    if (activeFontFamClass == "") {
        $("span").toggleClass("font-family-OpenSans");
        activeFontFamClass = "font-family-OpenSans";
    } else if (activeFontFamClass == "font-family-OpenSans") {
        $("span").toggleClass("font-family-OpenSans");
        $("span").toggleClass("font-family-FiraSans");
        activeFontFamClass = "font-family-FiraSans";
    } else if (activeFontFamClass == "font-family-FiraSans") {
        $("span").toggleClass("font-family-FiraSans");

        activeFontFamClass = "";
    }
});


// reset button needs update
$(".Group_1190_Class").click(function () {
    $("*").toggleClass(activeSpaceClass);
    activeSpaceClass = "";

    $("span").toggleClass(activeAlignClass);
    activeAlignClass = "textAlign-left";
    $("span").toggleClass("textAlign-left");

    $("span").toggleClass(activeFontFamClass);
    activeFontFamClass = "";

    
    $("*").map(function () {
        var size = parseInt($(this).css('font-size'));
        $(this).css({ 'font-size': size - plusSize + "px" });
    })
    plusSize = 0;
});

