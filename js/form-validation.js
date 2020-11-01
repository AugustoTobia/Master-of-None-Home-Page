
// var input = [document.getElementById('fullName'), document.getElementById('email'), document.getElementById('password'), 
//     document.getElementById('repeatPassword'), document.getElementById('age'), document.getElementById('phoneNumber'), 
//     document.getElementById('city'), document.getElementById('direction'), document.getElementById('postalCode'), 
//     document.getElementById('dni')];

// var patterns = [/[a-zA-Z]+\s[a-zA-Z]+/,/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
// /[a-zA-Z0-9]{8,}/,document.getElementById('password').value,/[18,]/,
// // /\d{7,}/,/\w{5,}\s\d+/,/[a-zA-Z0-9]{3,}/,/[a-zA-Z0-9]{3,}/,/[0-9]{7,8}/];






var form = document.getElementById('form');

form.addEventListener('submit', prevent);

function prevent(e){
    e.preventDefault();
    console.log(tel)
}


var inputs = [fullName, email, password, repeatPassword, age, tel, direction, city, postalCode, dni],
fullName = document.getElementById('fullName'),
email = document.getElementById('email'),
password = document.getElementById('password'),
repeatPassword = document.getElementById('repeatPassword'),
age = document.getElementById('age'),
tel = document.getElementById('phoneNumber'),
direction = document.getElementById('direction'),
postalCode = document.getElementById('postalCode'),
city = document.getElementById('city'),
dni = document.getElementById('dni');

var submit = document.getElementById('submit')

fullName.querySelector('input').addEventListener('blur', valFullName);
email.querySelector('input').addEventListener('blur', valEmail);
password.querySelector('input').addEventListener('blur',valPassword);
repeatPassword.querySelector('input').addEventListener('blur', valRepeatPassword);
age.querySelector('input').addEventListener('blur', valAge);
tel.querySelector('input').addEventListener('blur', valTel);
direction.querySelector('input').addEventListener('blur', valDirection);
city.querySelector('input').addEventListener('blur', valCity);
postalCode.querySelector('input').addEventListener('blur', valOrPostalCode );
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


submit.addEventListener('click', submitForm)

/*Se podria realizar un array con los hijos del nodo Form y un loop cargando los valores de cada input y 
chequeandolos contra el pattern correspondiente. Si tengo tiempo lo hago*/
function valFullName(e){
    var fullNameInput = fullName.querySelector('input').value,
    patt = /[a-zA-Z]+\s[a-zA-Z]+/;

    if (patt.test(fullNameInput) && fullNameInput.length >= 8){
        console.log('right');
        return true;
    } else {
        console.log('wrong');
        fullName.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valEmail(e){
    var value = email.querySelector('input').value,
    patt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patt.test(value) === true){
    console.log(value);
    return true;
    } else {
        console.log('Wrong')
        email.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valPassword(e){
    var val = password.querySelector('input').value,
    patt = /[a-zA-Z0-9]{8,}\d+\D+/
    if(patt.test(val) === true){
        console.log(val)
        return true;
    } else{
        console.log('error')
        password.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valRepeatPassword(e){
    var val = repeatPassword.querySelector('input').value,
    ref = document.getElementById('repeatPassword').value;
    if (val === ref){
        console.log('Bien hecho');
        return true;
    } else {
        console.log('Maaal');
        repeatPassword.querySelector('p').className = 'errorActive';
        return false;
    }
}
function valAge(){
    var val = age.querySelector('input').value;
    if (val < 18){
        console.log('Que hace aca pibe');
        age.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}
function valTel(){
    var val = tel.querySelector('input').value,
    patt = /\d{7,}/;
    if (patt.test(val) == false){
        console.log('you made a mistake');
        tel.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}
function valDirection(){
    var val = direction.querySelector('input').value,
    patt = /\w{5,}\s\d+/;
    if(patt.test(val) == false){
        console.log('la cagaste');
        direction.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valCity(){
    var val = city.querySelector('input').value,
    patt = /[a-zA-Z0-9]{3,}/;
    if(patt.test(val) == false){
        console.log('mala esa')
        city.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valOrPostalCode(){
    var val = city.querySelector('input').value,
    patt = /[a-zA-Z0-9]{3,}/;
    if(patt.test(val) == false){
        console.log('mala esa')
        postalCode.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}

function valDni(){
    var val = dni.querySelector('input').value,
    patt = /[0-9]{7,8}/
    if(patt.test(val) == false){
        console.log('mala esa')
        dni.querySelector('p').className = 'errorActive';
        return false;
    } else {
        return true;
    }
}
var count = 0,
submitTxt = '';
function submitForm(e){
    e.preventDefault
    var validations = [valFullName(),valEmail(),valPassword(),valRepeatPassword(),valAge(),valTel(),valDirection(),valCityOrPostalCode(),valDni()];
    for(i = 0; i < validations.length; i++){
        console.log(validations[i]);
        if (validations[i] = true){
            submitTxt = submitTxt + inputs[i]
            count = count++;
            return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        }
    }
    if (count == 9){
        alert(submitTxt);
    } else {
        console.log(count)
        alert('error');
    }
}
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
