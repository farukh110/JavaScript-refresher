class User {

    constructor(username) {

        this.username = username;
    }

    logMe() {

        console.log(`username: ${this.username}`);
    }

    // static createId() {
    //     return `123`;
    // }

    createId() {
        return `123`;
    }
}

const oan = new User('item');

console.log(oan.createId());

class Teacher extends User {

    constructor(username, email) {

        super(username);
        this.email = email;
    }
}

const item = new Teacher("item 1", "item@gmail.com");

console.log(item.username);