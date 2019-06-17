let hrHand = document.querySelector(".hr-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".sec-hand");

// converts a time into degrees
// offset by 90 degrees given divs starting position
function convert(t) {
    return (360 / 60) * t + 90;
}

function convertHours(t) {
    return (360 / 12) * (t % 12) + 90;
}

function transform() {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hrHand.style.transform = "rotate(" + convertHours(hr) + "deg)";
    minHand.style.transform = "rotate(" + convert(min) + "deg)";
    secHand.style.transform = "rotate(" + convert(sec) + "deg)";
}

setInterval(transform, 100);