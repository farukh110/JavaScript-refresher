const User = {

    _email: 'oan@gmail.com',
    _password: '121123',

    get email() {

        return this._email;
    },

    set email(value) {

        this._email = value;
    },

    get password() {

        return this._password.toUpperCase();
    },

    set password(value) {

        this._password = value;
    },

}

const obj = Object.create(User);

console.log(obj.email);
console.log(obj.password);