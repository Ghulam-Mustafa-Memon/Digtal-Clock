setInterval(() => {
    let hours = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");
    let ampm = document.getElementById("ampm");

    let hh = document.getElementById("hh")
    let mm = document.getElementById("mm")
    let ss = document.getElementById("ss")

    let hourDot = document.querySelector(".hour-dot")
    let minDot = document.querySelector(".min-dot")
    let secDot = document.querySelector(".sec-dot")

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "AM" : "PM";

    // __________ 12 Hours Format __________
    if (h > 12) {
        h = h - 12
    }
    // __________ Adding Before Single Digits __________
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m

    }
    if (s < 10) {
        s = "0" + s
    }


    hours.innerText = h;
    mins.innerText = m;
    secs.innerText = s;
    ampm.innerText = ap;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60
});