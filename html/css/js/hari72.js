class User {
    // Constructor
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }

    // Method
    sapa() {
        return `Halo, saya ${this.nama}`;
    }

    // Getter
    get info() {
        return `${this.nama} (${this.email})`;
    }

    // Static method
    static fromJSON(json) {
        const data = JSON.parse(json);
        return new User(data.nama, data.email);
    }
}

// Inheritance
class Admin extends User {
    constructor(nama, email, role) {
        super(nama, email);
        this.role = role;
    }
}

const admin = new Admin("Andi", "andi@email.com", "super");

