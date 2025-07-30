let name=document.getElementById("myName");
let clock=document.getElementById("myClock");

var enter_name=prompt("Please enter your name: ")
name.innerHTML=enter_name;

function showTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = `${hh}:${mm}:${ss} ${session}`;
    clock.innerHTML = time;

    setTimeout(showTime, 1000);
}
    showTime();

