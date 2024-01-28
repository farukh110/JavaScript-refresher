function setUsername(username) {

    this.username = username;
    // console.log('called');
}

function createUser(username, email, password) {

    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const item = new createUser("item1", "item@gmail.com", "123");

console.log(item);