// if...else
let umur = 18;

if (umur >= 18) {
    console.log("Dewasa");
} else if (umur >= 13) {
    console.log("Remaja");
} else {
    console.log("Anak-anak");
}

// Ternary operator
let status = umur >= 18 ? "Dewasa" : "Anak-anak";

// Switch
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Awal minggu");
        break;
    case "Jumat":
        console.log("TGIF!");
        break;
    default:
        console.log("Hari biasa");
}