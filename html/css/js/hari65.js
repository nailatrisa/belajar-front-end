

// Event delegation - satu listener untuk banyak elemen
const list = document.querySelector("#todoList");

list.addEventListener("click", (e) => {
    if (e.target.matches(".delete-btn")) {
        e.target.closest("li").remove();
    }
    if (e.target.matches(".edit-btn")) {
        const li = e.target.closest("li");
        const newText = prompt("Edit:", li.textContent);
        if (newText) li.textContent = newText;
    }
});

// Matches untuk cek selector
e.target.matches("button");
e.target.closest(".card");
e.target.parentElement;

