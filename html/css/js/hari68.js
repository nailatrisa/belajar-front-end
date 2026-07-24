
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
    <h3>${judul}</h3>
    <p>${deskripsi}</p>
    <button class="btn">Detail</button>
`;

container.appendChild(card);

// DocumentFragment (lebih efisien)
const fragment = document.createDocumentFragment();
data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nama;
    fragment.appendChild(li);
});
list.appendChild(fragment);

// insertAdjacentHTML
el.insertAdjacentHTML("beforeend", "<p>Baru</p>");
// beforebegin, afterbegin, beforeend, afterend