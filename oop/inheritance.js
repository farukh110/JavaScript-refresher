class User {

    constructor(username) {

        this.username = username;
    }

    logMe() {

        console.log(`username: ${this.username}`);
    }
}

class Teacher extends User {

    constructor(username, email, password) {

        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const item = new Teacher("oan", "oan@gmail.com", "123ccv");

item.addCourse();

const item2 = new User("oan");

item2.logMe();

console.log(item instanceof Teacher);