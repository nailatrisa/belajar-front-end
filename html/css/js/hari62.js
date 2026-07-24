
el.textContent = "Teks baru";
el.innerHTML = "<strong>HTML baru</strong>";

// Mengubah atribut
el.setAttribute("href", "https://baru.com");
el.getAttribute("href");
el.removeAttribute("disabled");

// Mengubah style
el.style.color = "red";
el.style.fontSize = "20px";
el.style.backgroundColor = "#f0f0f0";

// Class manipulation
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("visible");
el.classList.contains("active"); // true/false

// Membuat elemen baru
const newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.textContent = "Card baru";
document.body.appendChild(newDiv);

// Menghapus elemen
el.remove();