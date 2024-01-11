// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((item) => item + 10);

// console.log(newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((item) => item * 10)
                         .map((item => item + 10));

console.log(newNums);