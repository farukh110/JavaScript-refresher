const promiseOne = new Promise(function (resolve, reject) {

    // do an async task
    // db calls, network

    setTimeout(function () {

        console.log('Async task has completed');
        resolve();
    }, 1000);
});

promiseOne.then(function () {

    console.log('Promised consumed')
})

new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log('Async task 2');
        resolve();
    }, 1000);

}).then(function () {

    console.log('Async task 2 resolved');
});

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {

        resolve({ username: 'oan', email: 'info@farukhsajjad.com' });

    }, 1000);
});

promiseThree.then(function (user) {

    console.log('user: ', user);
});

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = false;

        if (!error) {

            resolve({ username: 'oan 2', email: 'info@farukhsajjad.com' });

        } else {

            reject('Error something went wrong');
        }

    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;

    })
    .then((username) => {

        console.log(username);

    })
    .catch(function (error) {

        console.log(error);

    }).finally(() => {

        console.log('promise is either resolved or rejected');
    });


const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = true;

        if (!error) {

            resolve({ username: 'JavaScript', password: '123' });

        } else {

            reject('Error JavaScript went wrong');
        }

    }, 1000);
});

async function consumePromiseFive() {

    try {

        const response = await promiseFive
        console.log(response);

    } catch (error) {

        console.log(error);
    }

};

consumePromiseFive();

// async function getAllUsers() {

//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json();
//         console.log(data);

//     } catch (error) {

//         console.log('api error', error);
//     }

// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {

        return response.json();

    })
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);
    });