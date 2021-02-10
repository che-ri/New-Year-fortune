function back() {
    let url = window.location.href;
    //다른페이지로 이동시키고 싶을때 window.location.href를 사용한다!! 
    let new_url = url.split('result.html')[0] + 'index.html';
    window.location.href = new_url;
}

function share() {
    let text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value = window.location.href;
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);
    alert('복사 완료!')
}