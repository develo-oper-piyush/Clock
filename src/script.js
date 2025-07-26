let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    if (Number(htime) > 12) htime -= 12;
    else if (Number(htime == 0)) htime = "12";
    if (Number(mtime) / 10 < 1) mtime = "0" + mtime;

    if (htime > 12) {
        document.querySelector("#digital_clock").textContent = `${
            htime - 12
        } : ${mtime} pm`;
    } else {
        document.querySelector(
            "#digital_clock"
        ).textContent = `${htime} : ${mtime} am`;
    }
}, 1000);
