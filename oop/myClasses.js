// ES6

// class User {

//     constructor(username, email, password) {

//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {

//         return `${this.password}abc`;
//     }

//     changeUsername() {

//         return `${this.username.toUpperCase()}`;
//     }
// }

// const item = new User("nabo mamo", "nabo@gmail.com", "1234");

// console.log(item.encryptPassword());
// console.log(item.changeUsername());

// behind the scene

function User(username, email, password) {

    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {

    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {

    return `${this.username.toUpperCase()}`;
}

const item2 = new User("papo", "papo@gmail.com", "12346");

console.log(item2.encryptPassword());
console.log(item2.changeUsername());
