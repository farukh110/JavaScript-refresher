// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currentValue) => {

//     console.log(`acc: ${acc} and current value: ${currentValue}`);

//     return acc + currentValue;

// }, 0);

// console.log('my total: ',myTotal);

const shoppingCart = [
    {
        itemName: 'item 1',
        price: 1000
    },
    {
        itemName: 'item 2',
        price: 2000
    },
    {
        itemName: 'item 3',
        price: 3000
    }
];

let priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);