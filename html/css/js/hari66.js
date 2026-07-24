

// Simpan data
localStorage.setItem("nama", "Andi");
localStorage.setItem("user", JSON.stringify({ nama: "Andi", umur: 25 }));

// Baca data
const nama = localStorage.getItem("nama");
const user = JSON.parse(localStorage.getItem("user"));

// Hapus data
localStorage.removeItem("nama");
localStorage.clear(); // hapus semua

// Contoh: Todo App
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

