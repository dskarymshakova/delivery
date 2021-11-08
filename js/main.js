const buttonAuth = document.querySelector('.button-auth') //получение формы
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
//const logInForm = document.querySelector('.#logInForm')//по идентификатору
const logInForm = document.getElementById('logInForm')//работает быстрее, тк после нахождения id останавливает свою работу
const inputLogin = document.getElementById('login')//работает быстрее, тк после нахождения id останавливает свою работу
const inputPassword = document.getElementById('password')//работает быстрее, тк после нахождения id останавливает свою работу
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')


//console.log(buttonAuth);
//console.log(document);

/*
function sayMeow(){
    console.log('Meow');
}
sayMeow();
*/

/*
const sayMeow = function (){ //анонимная функция
    console.log('Meow');
}
sayMeow();
*/

const sayMeow = () => { //стрелочная функция
    console.log('Meow');
}
sayMeow();

//обьект служит для хранения инф в структурированном виде
const obj = {
    name: 'Alex',
    age: 34,
    sayHello: function(){
        console.log('Привет, меня зовут Алекс');
    }
}

console.log(obj.name); 
obj.sayHello();

//метод это та же функция, кот принадлежит объекту

console.log(modalAuth);

const cnt =(a,b) => { //a, b параметры функции
    return a + b;
}
console.log(cnt(2,3)); //вызов функции через консоль
console.log(cnt(6,8));

/*
buttonAuth.addEventListener('click', () => {
    console.log('click'); 
}) //по клику на кнопку войти в консоль пишется click
*/

/*
buttonAuth.addEventListener('click', () => {
    console.dir(modalAuth); 
}) //по клику на кнопку войти в консоль пишутся свойства модального окна
*/

/*
modalAuth.style.color='red' //задаем свойства inline style 
*/

//авторизация пользователя
const login = (user) => {
    buttonAuth.style.display='none'
    buttonOut.style.display='flex' //смена кнопки войти на выйти
    userName.style.display='flex'

    userName.textContent = user.login //имя пользователя на странице
    modalAuth.style.display = 'none' //закрытие модального окна
}

buttonOut.addEventListener('click', () =>{
    logout()
})

const logout = () => {
    buttonAuth.style.display='flex'
    buttonOut.style.display='none' //смена кнопки выйти на войти
    userName.style.display='none'

    userName.textContent=''

    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
}) //по клику на кнопку войти модальное окно становится посередине


closeAuth.addEventListener('click', () =>{
    modalAuth.style.display = 'none'
})//закрывается модальное окно

logInForm.addEventListener('submit', (event) =>{ //событие отправка формы
    event.preventDefault()
    console.dir(event);
})

logInForm.addEventListener('submit', (event) =>{ //событие отправка формы
    event.preventDefault()

    //console.log(inputLogin.value);
    //console.log(inputPassword.value); //получение введенного логина и пароля в консоли
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    
    localStorage.setItem('user', JSON.stringify(user)) //set item, remove item, get item
    //JSON.stringify преобразование из обьекта в строку
    login(user);
})

if(localStorage.getItem('user')){
    login(JSON.parse(localStorage.getItem('user')));
}
