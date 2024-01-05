// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log('DB Connected');
})();

(() => {
    console.log('DB Connected 2');
})();

((port) => {
    // simple IIFE
    console.log(`DB Connected on ${port}`);
})(300);

