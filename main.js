
// JavaScript Basic /*
// console.log('Hello');
// // alert("Hello this is Jhanril");

// var someText = 'Jhanril';
// console.log(someText);

// var someNumber = 12;
// console.log(someNumber);

// */

// /****************** Manipulate DOM with javaScript *********************/
            
// //    Just a fancy way of saying change HTML using javaScript


// // var age = prompt('What is your age?');

// // document.getElementById('text').innerHTML = 'So you are ' + age;

// /****************** end DOM manipulation *********************/



// /****************** Function examples *********************/
// /*
//     function askName() {
//         var name = prompt('What is your name');
//         var result = 'oh Hello' + ' ' + name;
//         console.log(result);
//     }

//     //askName();


//     //Function with arguments

//     function addTwoNumber(num1, num2) {
//         var result = num1 + num2;
//         console.log(result);
//     }

// */
// /****************** end Function examples *********************/


// /******************  Loop example *********************/
// /* While Loop
// var num = 0;

// while(num < 100) {
//     num += 1;
//     console.log(num);
// }
// */
// /* For Loop

// for (let num = 0; num < 100; num++) {
//     console.log(num);
// }

// */
// /******************  end Loop example *********************/


// /******************  DATATYPES example *********************/


// /******************  Constructor function and Class *********************/
// // //Contructor function
// // function Person(firstName, lastName, dob) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);
// // }
// // //prototype object
// // Person.prototype.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`;
// // }
// // Person.prototype.getBirthYear = function() {
// //     return this.dob.getFullYear();
// // }

// // //Class    'works the same with constructor fucntion'
// // class Person {
// //     constructor(firstName, lastName, dob) {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //         this.dob = new Date(dob);
// //     }
// //     getFullName() {
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// //     getBirthYear() {
// //         return this.dob.getFullYear();
// //     }
// // }


// // //Intantiate object

// // const person1 = new Person('Jhanril', 'Bucod', '1-4-1998');
// // const person2 = new Person('Sha', 'Baguio', '11-12-1997');

// // console.log(person1.getFullName());
// // console.log(person2.getBirthYear());

// /******************  End Constructor function and Class *********************/

/* JavaScript DOM */
// console.log(window);


// // Single Element Selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// // Multiple Element Selector
// console.log(document.querySelectorAll('item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('item'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// // manipulate dom

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ='Hello';
// ul.children[1].innerText = 'Jhan';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}