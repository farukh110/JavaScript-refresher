class User {

    constructor(email, password) {

        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {

        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {

        this._password = value.toUpperCase();
    }
}

const obj = new User("info@farukhsajjad.com", "abc");

console.log(obj.email);
console.log(obj.password);