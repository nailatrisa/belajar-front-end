// Destructuring
const [a, b, ...rest] = [1, 2, 3, 4];
const { nama, umur } = { nama: "Andi", umur: 25, kota: "JKT" };

// Spread & Rest
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };

// Optional chaining
const kota = user?.alamat?.kota ?? "Unknown";

// Nullish coalescing
const nilai = input ?? "default";

// Template literals
const msg = `Halo ${nama}, umur ${umur}`;


// Logical assignment
x ||= 10;  // x = x || 10
x &&= 20;  // x = x && 20
x ??= 30;  // x = x ?? 30