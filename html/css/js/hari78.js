

const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
const phoneRegex = /^\+?[0-9]{10,13}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Methods
emailRegex.test("andi@email.com");     // true
"andi@email.com".match(emailRegex);    // ["andi@email.com"]
"abc123def".replace(/\d/g, "*");     // "abc***def"

// Pattern
/*
 * .    - karakter apapun
 * *    - 0 atau lebih
 * +    - 1 atau lebih
 * ?    - 0 atau 1
 * ^    - awal string
 * $    - akhir string
 * []   - karakter set
 * {}   - jumlah
 * |    - atau
 * \d  - digit
 * \w  - word character
 * \s  - whitespace
 */

