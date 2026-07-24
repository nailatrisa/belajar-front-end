

const buah = ["Apel", "Mangga", "Jeruk"];

// Akses
console.log(buah[0]);     // "Apel"
console.log(buah.length);  // 3

// Methods
buah.push("Pisang");       // tambah di akhir
buah.pop();                 // hapus dari akhir
buah.unshift("Anggur");    // tambah di awal
buah.shift();               // hapus dari awal

// Array methods (ES6)
const angka = [1, 2, 3, 4, 5];

angka.map(n => n * 2);          // [2, 4, 6, 8, 10]
angka.filter(n => n > 3);      // [4, 5]
angka.find(n => n > 3);        // 4
angka.forEach(n => console.log(n));
angka.reduce((sum, n) => sum + n, 0); // 15
angka.includes(3);               // true
angka.indexOf(3);                // 2

// Destructuring
const [pertama, kedua] = buah;
const [...sisanya] = buah.slice(1);

