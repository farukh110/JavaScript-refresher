// const sayName = () => {
//     console.log('testing');
// }

// sayName();

// const addTwoNumbers = (num1, num2) => {

//     console.log(num1 + num2);
// }

// const addTwoNumbers = (num1, num2) => {

//     return num1 + num2;
//     console.log('tester');
// }

// const result = addTwoNumbers(3, 6);

// console.log(result);

const loginUserMessage = (username = 'john') => {

    if(!username) {
       console.log('please enter an username'); 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage('oan'));