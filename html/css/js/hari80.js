'use strict';

// Gunakan const dan let, hindari var
const nama = "Naila";
let umur = 17;

// Gunakan template literals
console.log(`Nama: ${nama}, Umur: ${umur}`);

// Gunakan arrow function
const sapa = (nama) => {
    return `Halo, ${nama}!`;
};

console.log(sapa(nama));

// Gunakan optional chaining (?.)
const user = {
    profile: {
        email: "naila@example.com"
    }
};

console.log(user.profile?.email);
console.log(user.alamat?.kota); // undefined, tidak error

// Async/Await
const ambilData = async () => {
    try {
        console.log("Loading...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        console.log("Data berhasil:", data);

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Selesai");
    }
};

// Panggil fungsi
ambilData();