
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", (e) => {
    console.log("Diklik!");
    console.log(e.target);     // elemen yang diklik
    e.preventDefault();        // cegah default action
    e.stopPropagation();       // hentikan bubble
});

// Events umum
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // handle form submission
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});

window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});

// Keyboard events
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter ditekan");
    }
});

