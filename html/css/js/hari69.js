// setTimeout - jalankan sekali setelah delay
const timerId = setTimeout(() => {
    console.log("Dijalankan setelah 3 detik");
}, 3000);

// clearTimeout - batalkan
clearTimeout(timerId);

// setInterval - jalankan berulang
const intervalId = setInterval(() => {
    console.log("Dijalankan setiap 1 detik");
}, 1000);

// clearInterval - hentikan
clearInterval(intervalId);

// Contoh: Countdown
let count = 10;
const countdown = setInterval(() => {
    if (count <= 0) {
        clearInterval(countdown);
        console.log("Waktu habis!");
        return;
    }
    console.log(count--);
}, 1000);