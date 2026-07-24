// try...catch
try {
    let hasil = JSON.parse("bukan json");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Selalu dijalankan");
}

// Throw custom error
function bagi(a, b) {
    if (b === 0) throw new Error("Tidak bisa bagi dengan 0");
    return a / b;
}

// Debugging tips
console.log("Debug:", variabel);
console.table(array);       // tampilkan sebagai tabel
console.time("proses");     // mulai timer
console.timeEnd("proses");  // selesai timer

// Debugger (breakpoint di browser)
debugger;