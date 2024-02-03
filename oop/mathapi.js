const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// console.log(descripter);

const obj = {
    name: 'horror series',
    price: 40,
    isAvailable: true,
    orderDetails: function () {
        console.log('details');
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, 'name', {

    // writable: false,
    enumerable: false,
    // configurable: false

});

Object.defineProperty(obj, 'price', {

    // writable: false,
    enumerable: false,
    // configurable: false

});

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {

    if (typeof value !== "function") {

        console.log(`${key} : ${value}`);
    }

}