var swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
});
setInterval(function() {
    document.getElementsByClassName("tab")[swiper.activeIndex].classList.add("active");

}, 100);

swiper.on('transitionEnd', function() {
    document.getElementsByClassName("tab")[2].classList.remove("active");
    document.getElementsByClassName("tab")[0].classList.remove("active");
    document.getElementsByClassName("tab")[1].classList.remove("active");
});

function goToPage(pageNo) {
    swiper.slideTo(pageNo);
    document.getElementsByClassName("tab")[pageNo].classList.add("active");
}

function validate() {
    var flag = true;
    document.forms[swiper.activeIndex].querySelectorAll('input').forEach(i = function(currElem) {
        flag = !(currElem.value == "");
    });
    return flag;
}