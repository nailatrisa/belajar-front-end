const teks = "Hello, World!";

console.log(teks.length);           // 13
console.log(teks.toUpperCase());    // "HELLO, WORLD!"
console.log(teks.toLowerCase());    // "hello, world!"
console.log(teks.charAt(0));       // "H"
console.log(teks.indexOf("World")); // 7
console.log(teks.includes("World")); // true
console.log(teks.slice(0, 5));     // "Hello"
console.log(teks.replace("World", "JS")); // "Hello, JS!"
console.log(teks.split(", "));     // ["Hello", "World!"]
console.log(teks.trim());          // hapus spasi di awal/akhir
console.log(teks.startsWith("Hello")); // true
console.log(teks.endsWith("!"));   // true
console.log(teks.repeat(3));       // "Hello, World!Hello, World!Hello, World!"