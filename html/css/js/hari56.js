

// Function declaration
function sapa(nama) {
    return `Halo, ${nama}!`;
}

// Function expression
const tambah = function(a, b) {
    return a + b;
};

// Arrow function (ES6)
const kali = (a, b) => a * b;
const kuadrat = x => x * x;
const hello = () => "Hello!";

// Default parameter
const greet = (nama = "Teman") => `Halo, ${nama}!`;

// Rest parameter
const jumlahkan = (...angka) => {
    return angka.reduce((total, n) => total + n, 0);
};
jumlahkan(1, 2, 3, 4); // 10

// Penggunaan
console.log(sapa("Andi"));  // "Halo, Andi!"
console.log(tambah(5, 3));  // 8

