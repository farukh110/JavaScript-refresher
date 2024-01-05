const user = {

    username: 'oan',
    price: 500,
    welcome: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcome();
// user.username = 'farukh110';
// user.welcome();

// this keyword is described about current context or current context ko refer karta hai

// function chai() {

//     let username = 'abu';
//     console.log(this.username);
// }

const chai = () => {

    let username = 'abu';
    console.log(this);
}

chai();