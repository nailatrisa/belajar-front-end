
// JSON (JavaScript Object Notation)
const user = {
    nama: "Andi",
    umur: 25,
    hobby: ["coding", "gaming"],
    alamat: { kota: "Jakarta" }
};

// Object → JSON string
const jsonStr = JSON.stringify(user);
// '{"nama":"Andi","umur":25,...}'

// JSON string → Object
const parsed = JSON.parse(jsonStr);

// Pretty print
console.log(JSON.stringify(user, null, 2));

// JSON dengan localStorage
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));

