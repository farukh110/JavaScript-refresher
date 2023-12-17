// data types

// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, Functions

// const id = Symbol('123');

// const anotherId = Symbol('123');

// console.log(id === anotherId);

// ---------------------------------------------------------------------------------

// memory

// Stack (Primitive), Heap (Non-Primitive)

// in primitive copy of data will change
// in non primitive reference of data

let name = 'Farukh Sajjad';

let another_name = name;

another_name = 'Oan Sajjad';

console.log('name: ',name);
console.log('another_name: ', another_name);

let user_one = {
    email: 'oan@gmail.com',
    nic: 1213213232323
};

let user_two = user_one;

user_two.email = 'farukh.sajjad@trax.pk'

console.log('user_one: ', user_one.email);
console.log('user_two: ', user_two.email);