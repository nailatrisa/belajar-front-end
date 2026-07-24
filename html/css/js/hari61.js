// getElementById
const el = document.getElementById("myId");

// querySelector (pertama ditemukan)
const btn = document.querySelector(".btn");
const item = document.querySelector("#list > li:first-child");

// querySelectorAll (semua)
const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.style.color = "blue";
});

// getElementsByClassName
const cards = document.getElementsByClassName("card");

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");

// Parent/Child navigation
const parent = el.parentElement;
const children = el.children;
const first = el.firstElementChild;
const last = el.lastElementChild;