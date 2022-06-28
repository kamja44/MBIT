function scrollUp(){
    const vheight = $(".test").height();
    $("html, body").animate({
        scrollTop : ((Math.floor($(window).scrollTop() / Math.floor(vheight)) - 1) * vheight)
    },500);
}

function scrollDown(){
    const vheight = $(".test").height();
    $("html, body").animate({
        scrollTop : ((Math.floor($(window).scrollTop() / Math.floor(vheight)) + 1) * vheight)
    },500);
}

$(function(){
    $(".next_btn").click(function(e){
        // if(inputs.length < 1){
        //     alert("문항을 선택해주세요");
        //     return false;
        // }
        e.preventDefault();
        scrollDown();
    });

    $(".prev_btn").click(function(e){
        e.preventDefault();
        scrollUp();
    });

    $(".submit_btn").click(function(e){
        // let radios=  $("input[type=radio]:checked");
        // if(radios.length<3){
        //     alert("문항이 선택되지 않았습니다.");
        //     return false;
        // }
    });

    $("html, body").animate({

    });
})