

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Ambil data form
    const formData = new FormData(form);
    const nama = formData.get("nama");
    const email = formData.get("email");
    
    // Atau langsung dari elemen
    const namaVal = document.querySelector('[name="nama"]').value;
    
    // Validasi
    if (nama.length < 3) {
        alert("Nama minimal 3 karakter");
        return;
    }
    
    console.log({ nama, email });
});

// Real-time validation
input.addEventListener("input", (e) => {
    const isValid = e.target.value.length >= 3;
    e.target.classList.toggle("error", !isValid);
});

