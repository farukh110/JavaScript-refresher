const user = {
    username: 'farukh110',
    loginCount: 5,
    signedIn: true,
    getUserDetails: function () {

        // console.log(this.username);
        console.log(this);
    }
};

console.log(user.getUserDetails());

console.log(this);

function User(username, loginCount, isLoggedIn) {

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {

        console.log(`welcome to user: ${this.username}`);
    }
    // return this;
}

const userOne = new User('Oan Sajjad', 12, true);
const userTwo = new User('Oan 2', 10, false);

console.log(userOne.constructor);
console.log(userTwo);