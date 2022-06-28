const copyBtn = document.querySelector(".copy_btn");
const facebookShare = document.querySelector(".facebook_share");

//  카카오 공유 코드
// 강의 결과페이지 만들기 - js
const kakaoShare = document.querySelector(".kakao_share");
// kakao.init(""); // 추후작업

$(function(){
    let url = window.location.href;
    let img = $(".result_img img").attr("src");
    $("meta[property = 'og\\:url']").attr('content', url);
    $("meta[property = 'og\\:image']").attr("content",img);
    console.log($("meta[property = 'og\\:image']").attr("content",img));
});
function sendLink(){
    let url = window.location.href;
}
function copyUrl(){
    let tmp = document.createElement("input");
    let url = window.location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}
function sharefacebook(){
    let url = window.location.href;
    // facebook share page는 facebook에서 제공해준다.
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener("click",copyUrl);
facebookShare.addEventListener("click",sharefacebook);
kakaoShare.addEventListener("click",sendLink);