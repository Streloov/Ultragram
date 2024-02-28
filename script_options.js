let popup = document.querySelector('.popup');
let popupToggle = document.querySelector('.options');

popup.style.display = 'none';

popupToggle.onclick = function() {
    popup.style.display = "block";
};

window.onclick = function (e) {
    if(e.target == popup) {
        popup.style.display = "none";
    }
}