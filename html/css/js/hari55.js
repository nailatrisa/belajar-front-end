// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// For...of (array)
const buah = ["Apel", "Mangga", "Jeruk"];
for (const item of buah) {
    console.log(item);
}

// For...in (object)
const user = { nama: "Andi", umur: 25 };
for (const key in user) {
    console.log(key + ": " + user[key]);
}

// Break & Continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // lewati 3
    if (i === 7) break;    // berhenti di 7
    console.log(i);
}

