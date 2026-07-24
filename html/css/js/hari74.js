// Membuat Promise
const ambilData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ data: "Data berhasil" });
            } else {
                reject(new Error("Gagal mengambil data"));
            }
        }, 2000);
    });
};

// Menggunakan Promise
ambilData()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Selesai"));

// Fungsi untuk Promise.all
function fetchData1() {
    return Promise.resolve("Data 1");
}

function fetchData2() {
    return Promise.resolve("Data 2");
}

Promise.all([fetchData1(), fetchData2()])
    .then(([data1, data2]) => {
        console.log(data1);
        console.log(data2);
    });

// Fungsi untuk Promise.race
function request1() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Request 1"), 1000)
    );
}

function request2() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Request 2"), 2000)
    );
}

Promise.race([request1(), request2()])
    .then(fastest => {
        console.log(fastest);
    });