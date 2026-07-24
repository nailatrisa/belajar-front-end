
// GET request
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

// POST request
const response = await fetch('https://api.contoh.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'Postingan Baru',
        content: 'Konten...'
    })
});

// Error handling
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}

