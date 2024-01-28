// let name = 'item1    ';

// console.log(name.truelength);

let myHeros = ['batman', 'spiderman', 'superman'];

let heroPower = {

    batman: 'bike',
    spiderman: 'sling',
    getSpiderPower: function() {

        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.oan = function () {
    
    console.log(`oan is available in all objects`);
}

Array.prototype.hiOan = function () {
    
    console.log(`oan is available in all Arrays`);
}

// heroPower.oan();

// myHeros.oan();
// myHeros.hiOan();
// heroPower.hiOan();

// inheritance

const User = {
    name: 'oan sajjad',
    email: 'info@farukhsajjad.com'
}

const Teacher = {
    
    makeVideo: true
}

const TeachingSupport = {
    
    isAvailable: false
}

const TASupport = {

    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherName = 'mern    ';

String.prototype.trueLength = function() {

    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherName.trueLength();