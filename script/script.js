// nút chuyển trang
const btn = document.getElementById("openPage");

if (btn) {
    btn.addEventListener("click", function () {
        window.location.href = "/eiu/page/eiu.html";
    });
}


// phát nhạc khi click lần đầu
window.onload = function () {

    const music = document.getElementById("music");

    if (music) {
        document.addEventListener("click", function playMusic() {
            music.play().catch(() => {});
            document.removeEventListener("click", playMusic);
        });
    }

};

