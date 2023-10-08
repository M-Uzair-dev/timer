const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
let a = Array.from(hour.childNodes);
let b = Array.from(minute.childNodes);
let c = Array.from(second.childNodes);
let id;
const playTimer = () => {
  id = setInterval(() => {
    c[1].innerHTML++;
    if (c[1].innerHTML == 10) {
      c[1].innerHTML = 0;
      c[0].innerHTML++;
    }
    if (c[0].innerHTML == 6) {
      c[0].innerHTML = "0";
      c[1].innerHTML = "0";
      b[1].innerHTML++;
    }
    if (b[1].innerHTML == 10) {
      b[1].innerHTML = 0;
      b[0].innerHTML++;
    }
    if (b[0].innerHTML == 6) {
      b[0].innerHTML = "0";
      b[1].innerHTML = "0";
      a[1].innerHTML++;
    }
    if (a[1].innerHTML == 10) {
      a[1].innerHTML = 0;
      a[0].innerHTML++;
    }
  }, 1000);
};
const stopTimer = () => {
  clearInterval(id);
};
const resetTimer = () => {
  clearInterval(id);
  a[0].innerHTML = "0";
  a[1].innerHTML = "0";
  b[0].innerHTML = "0";
  b[1].innerHTML = "0";
  c[0].innerHTML = "0";
  c[1].innerHTML = "0";
};
