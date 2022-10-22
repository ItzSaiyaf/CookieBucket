// Select Input Fields
let firstName = document.querySelector('input[name = FirstName]');
let lastName = document.querySelector('input[name = LastName]');
let address = document.querySelector('input[name = Address]');
let expDate = document.querySelector('input[name = ExpDate]');
// Random Cookie
let random = document.querySelector('input[name = random]');
let randomValue = document.querySelector('input[name = randomVal]');
let randomDate = document.querySelector('input[name = randomDate]');
// Delete Cookie
let delName = document.querySelector('input[name = delete]');
// Select Buttons
const createBtn = document.querySelector('button[type = submit]');
const randomBtn = document.querySelector('button.createRandom');
const delteBtn = document.querySelector('button.delete');
const displayBtn = document.querySelector('.display');


createBtn.addEventListener('click', () => {
    createCookie(firstName.value, lastName.value, address.value, expDate);
    console.log(document.cookie)
})

randomBtn.addEventListener('click', () => {
    randomCookie(random.value, randomValue.value, randomDate.value)
    console.log(document.cookie)
})

delteBtn.addEventListener('click', () => {
    delteCookie(delName.value)
    console.log(document.cookie)
})

displayBtn.addEventListener('click', () => {
    const app = document.createElement('li');
    const textnode = document.createTextNode("Water");
    app.appendChild(textnode)
    document.querySelector('.show').appendChild(app)
})


const createCookie = (fName, lName, Address, expDate) => {
    var date = new Date(expDate.value);
    document.cookie = `FirstName= ${fName}; expires=${date.toUTCString()}`;
    document.cookie = `LastName= ${lName}; expires=${date.toUTCString()}`;
    document.cookie = `Address= ${Address}; expires=${date.toUTCString()}`;
}

const randomCookie = (name, val, expDate) => {
    var date = new Date(expDate.value);
    document.cookie = `${name}= ${val}; expires=${date.toUTCString()}`;
}

const delteCookie = (name) => {
    var date = new Date();
    date.setDate(date.getDate() - 5);
    document.cookie = `${name}=; expires=${date.toUTCString()}`;
}