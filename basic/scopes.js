// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var can access from scope/block scope out of carle braces

// out of block scope it is called global scope and global variable value can access in block scope

// block scope
// if (true) {

//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300;

// if (true) {

//     let a = 10;
//     const b = 20;
//     var c = 30;

//     // console.log('inner a: ',a);
// }

// console.log('outer a: ',a);

// const one = () => {

//     const username = 'Farukh Sajjad';

//     const two = () => {

//         const website = 'youtube';
//         console.log(username);
//     }

//     // console.log('website: ', website);
//     // two();
// }

// one();

// if(true) {
//     const username = 'farukh sajjad';

//     if (username === 'farukh sajjad') {

//         const website = 'youtube.com';
//         console.log(username + website);
//     }

//     console.log(website);
// }

// console.log(username);

console.log(addone(5));

function addone(num) {
    return num + 1;
}

console.log(addTwo(5));

const addTwo = (num) => {

    return num + 2;
} 
