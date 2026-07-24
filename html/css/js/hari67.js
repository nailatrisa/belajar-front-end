

// SessionStorage - data hilang saat tab ditutup
sessionStorage.setItem("token", "abc123");
const token = sessionStorage.getItem("token");

// Perbedaan:
// localStorage: persisten (tidak hilang)
// sessionStorage: hilang saat tab/browser ditutup

// Cookies
document.cookie = "nama=Andi; max-age=86400; path=/";

// URL Parameters
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Navigate
window.location.href = "https://google.com";
window.location.reload();
history.back();
history.forward();

