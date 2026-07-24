
// Async function
async function getData() {
    try {
        const response = await fetch('https://api.contoh.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Menggunakan
const data = await getData();

// Parallel execution
const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
]);

// Async IIFE
(async () => {
    const data = await getData();
    console.log(data);
})();

