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

let a = 300;

if (true) {

    let a = 10;
    const b = 20;
    var c = 30;

    // console.log('inner a: ',a);
}

console.log('outer a: ',a);