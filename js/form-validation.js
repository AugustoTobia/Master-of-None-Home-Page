var text = ' ';
// Elements
var fullName = document.getElementById('fullName'),
email = document.getElementById('email'),
password = document.getElementById('password'),
repeatPassword = document.getElementById('repeatPassword'),
age = document.getElementById('age'),
tel = document.getElementById('phoneNumber'),
direction = document.getElementById('direction'),
postalCode = document.getElementById('postalCode'),
city = document.getElementById('city'),
dni = document.getElementById('dni');

var form = document.getElementById('form');

//Event Listeners
fullName.querySelector('input').addEventListener('blur', valFullName);
email.querySelector('input').addEventListener('blur', valEmail);
password.querySelector('input').addEventListener('blur', valPassword);
repeatPassword.querySelector('input').addEventListener('blur', valRepeatPassword);
age.querySelector('input').addEventListener('blur', valAge);
tel.querySelector('input').addEventListener('blur', valTel);
direction.querySelector('input').addEventListener('blur', valDirection);
city.querySelector('input').addEventListener('blur', valCity);
postalCode.querySelector('input').addEventListener('blur', valPostalCode );
dni.querySelector('input').addEventListener('blur', valDni);

fullName.querySelector('input').addEventListener('focus', focusFullName);
email.querySelector('input').addEventListener('focus', focusEmail);
password.querySelector('input').addEventListener('focus',focusPassword);
repeatPassword.querySelector('input').addEventListener('focus', focusRepeatPassword);
age.querySelector('input').addEventListener('focus', focusAge);
tel.querySelector('input').addEventListener('focus', focusTel);
direction.querySelector('input').addEventListener('focus', focusDirection);
city.querySelector('input').addEventListener('focus', focusCity);
postalCode.querySelector('input').addEventListener('focus', focusPostalCode );
dni.querySelector('input').addEventListener('focus', focusDni);

form.addEventListener('submit', submitForm);


//Function On Blur
/*It's posible to make just 1 function to validate every pattern using arrays
This is the prototype*/

// fullName.querySelector('input').addEventListener('blur', validate(0));
// email.querySelector('input').addEventListener('blur', validate(1));
// password.querySelector('input').addEventListener('blur',validate(2));
// repeatPassword.querySelector('input').addEventListener('blur', validate(3));
// age.querySelector('input').addEventListener('blur', validate(4));
// tel.querySelector('input').addEventListener('blur', validate(5));
// direction.querySelector('input').addEventListener('blur', validate(6));
// city.querySelector('input').addEventListener('blur', validate(7));
// postalCode.querySelector('input').addEventListener('blur', validate(8));
// dni.querySelector('input').addEventListener('blur', validate(9));

// function validate(i){
//     if (patterns[i].test(questions[i].querySelector('input').value) === false ){
//         questions[i].querySelector('p').className = 'errorActive';
//     }    
// }

function valFullName(){
    var val = fullName.querySelector('input').value,
    patt = /[a-zA-Z]+\s[a-zA-Z]+/,
    exclude = /\d/;

    if (patt.test(val) === true && val.length >= 6 && exclude.test(val) == false){
        return true;
    } else {
        fullName.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valEmail(){
    var value = email.querySelector('input').value,
    patt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patt.test(value) === true){
    console.log(value);
    return true;
    } else {
        email.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valPassword(){
    var val = password.querySelector('input').value,
    patt = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(patt.test(val) === true){
        return true;
    } else{
        password.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valRepeatPassword(){
    var val = repeatPassword.querySelector('input').value,
    patt = document.getElementById('password').querySelector('input').value;
    if (val === patt){
        return true;
    } else {    
        repeatPassword.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valAge(){
    var val = age.querySelector('input').value;
    if (val < 18){
        age.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}
function valTel(){
    var val = tel.querySelector('input').value,
    patt = /^([0-9]{7,}$)/;
    if (patt.test(val) === false){
        tel.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}
function valDirection(){
    var val = direction.querySelector('input').value,
    patt = /[a-zA-Z]{5,}\s\d+/;
    if(patt.test(val) === false){
        direction.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valCity(){
    var val = city.querySelector('input').value,
    patt = /[a-zA-Z0-9]{3,}/;
    if(patt.test(val) === false){
        city.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valPostalCode(){
    var val = postalCode.querySelector('input').value,
    patt = /[a-zA-Z0-9]{3,}/;
    if(patt.test(val) === false){
        postalCode.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valDni(){
    var val = dni.querySelector('input').value;
    if(val.length < 7 || val.length >8){
        dni.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

// Function On Focus
function focusFullName(){
    fullName.querySelector('p').className = 'errorMessage';
}
function focusEmail(){
    email.querySelector('p').className = 'errorMessage';
}
function focusPassword(){
    password.querySelector('p').className = 'errorMessage';
}
function focusRepeatPassword(){
    repeatPassword.querySelector('p').className = 'errorMessage';
}
function focusAge(){
    age.querySelector('p').className = 'errorMessage';
}
function focusTel(){
    tel.querySelector('p').className = 'errorMessage';
}
function focusDirection(){
    direction.querySelector('p').className = 'errorMessage';
}
function focusCity(){
    city.querySelector('p').className = 'errorMessage';
}
function focusPostalCode(){
    postalCode.querySelector('p').className = 'errorMessage';
}
function focusDni(){
    dni.querySelector('p').className = 'errorMessage';
}

//Function Submit

function submitForm(e){
    var validations = [valFullName(),valEmail(),valPassword(),valRepeatPassword(),valAge(),valTel(),valDirection(),valCity(),valPostalCode(),valDni()],
    questions = [fullName, email, password, repeatPassword, age, tel, direction, city, postalCode, dni];
    for (i=0; i < questions.length; i++){
        if (validations[i] === true){
        text = text + questions[i].querySelector('label').innerText + ': ' + questions[i].querySelector('input').value + '\n\n';
        } else {
            text = text +  questions[i].querySelector('label').innerText + ': ' + questions[i].querySelector('p').innerText + '\n\n';
        }
    }
    alert(text);
    text = '';
    e.preventDefault();
}
