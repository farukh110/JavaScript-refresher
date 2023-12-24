// singleton
// object.create

// object literals

// const sym = new Symbol('dfdfdfd');

const tracking = {

    tracking_no: 21323232323,
    shipper: 'j dot',
    pickup_address: 'karachi',
    drop_at_address: 'karachi',
    phone: '03414285511',
    email: 'info@farukhsajjad.com'
    // [sym]: 'key1'
}

// tracking.email = 'farukhsajjad110@gmail.com';
// // Object.freeze(tracking);
// tracking.email = 'farukh.sajjad@trax.pk';
// // console.log(tracking);

// tracking.addRquest = () => {
//     console.log('request added successfullly');
// }

// // console.log(tracking.addRquest());

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };

// // const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(tracking.hasOwnProperty('email'));

const { tracking_no, email, phone } = tracking;

console.log(email);