document.getElementById('button').onclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    document.getElementsByTagName('span')[0].innerHTML = 'You are fabulous!';
    return false;
});
