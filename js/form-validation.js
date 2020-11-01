
// var input = [document.getElementById('fullName'), document.getElementById('email'), document.getElementById('password'), 
//     document.getElementById('repeatPassword'), document.getElementById('age'), document.getElementById('phoneNumber'), 
//     document.getElementById('city'), document.getElementById('direction'), document.getElementById('postalCode'), 
//     document.getElementById('dni')];

// var patterns = [/[a-zA-Z]+\s[a-zA-Z]+/,/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
// /[a-zA-Z0-9]{8,}/,document.getElementById('password').value,/[18,]/,
// /\d{7,}/,/\w{5,}\s\d+/,/[a-zA-Z0-9]{3,}/,/[a-zA-Z0-9]{3,}/,/[0-9]{7,8}/];






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

fullName.addEventListener('blur', valFullName);
email.addEventListener('blur', valEmail);
password.addEventListener('blur',valPassword);
repeatPassword.addEventListener('blur', valRepeatPassword);
age.addEventListener('blur', valAge);
tel.addEventListener('blur', valTel);
direction.addEventListener('blur', valDirection);
city.addEventListener('blur', valCityOrPostalCode);
postalCode.addEventListener('blur', valCityOrPostalCode);
dni.addEventListener('blur', valDni);

submit.addEventListener('click', submitForm)

/*Se podria realizar un array con los hijos del nodo Form y un loop cargando los valores de cada input y 
chequeandolos contra el pattern correspondiente. Si tengo tiempo lo hago*/
function valFullName(e){
    var fullNameInput = fullName.value,
    patt = /[a-zA-Z]+\s[a-zA-Z]+/;

    if (patt.test(fullNameInput) && fullNameInput.length >= 8){
        console.log('right');
        return true;
    } else {
        console.log('wrong');
        return false;
    }
}
function valEmail(e){
    var value = document.getElementById('email').value,
    patt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patt.test(value) === true){
    console.log(value);
    return true;
    } else {
        console.log('Wrong')
        return false;
    }
}
function valPassword(e){
    var val = document.getElementById('password').value,
    patt = /[a-zA-Z0-9]{8,}/
    if(patt.test(val) === true){
        console.log(val)
        return true;
    } else{
        console.log('error')
        return false;
    }
}
function valRepeatPassword(e){
    var val = document.getElementById('password').value,
    ref = document.getElementById('repeatPassword').value;
    if (val === ref){
        console.log('Bien hecho');
        return true;
    } else {
        console.log('Maaal');
        return false;
    }
}
function valAge(){
    var val = document.getElementById('age').value;
    if (val < 18){
        console.log('Que hace aca pibe');
        return false;
    } else {
        return true;
    }
}
function valTel(){
    var val = document.getElementById('phoneNumber').value,
    patt = /\d{7,}/;
    if (patt.test(val) == false){
        console.log('you made a mistake');
        return false;
    } else {
        return true;
    }
}
function valDirection(){
    var val = document.getElementById('direction').value,
    patt = /\w{5,}\s\d+/;
    if(patt.test(val) == false){
        console.log('la cagaste');
        return false;
    } else {
        return true;
    }
}

function valCityOrPostalCode(){
    var val = document.getElementById('city').value,
    patt = /[a-zA-Z0-9]{3,}/;
    if(patt.test(val) == false){
        console.log('mala esa')
        return false;
    } else {
        return true;
    }
}

function valDni(){
    var val = document.getElementById('dni').value,
    patt = /[0-9]{7,8}/
    if(patt.test(val) == false){
        console.log('mala esa')
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