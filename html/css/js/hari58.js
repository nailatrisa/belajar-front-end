const user = {
    nama: "Andi",
    umur: 25,
    email: "andi@email.com",
    alamat: {
        kota: "Jakarta",
        kodePos: "12345"
    },
    hobby: ["Coding", "Gaming"],
    sapa() {
        return `Halo, saya ${this.nama}`;
    }
};

// Akses property
console.log(user.nama);           // "Andi"
console.log(user["email"]);      // "andi@email.com"
console.log(user.alamat.kota);   // "Jakarta"
console.log(user.sapa());        // "Halo, saya Andi"

// Destructuring
const { nama, umur, email } = user;

// Object methods
const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

// Spread operator
const newUser = { ...user, role: "developer" };