let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let emailDOM = $('#email');
let passwordDOM = $('#password');
let formInfoDOM = $('.form-info');
let rememberMeDOM = $('#remember_me');


if(localStorage.getItem('isRemember') === "true") {
    // render html when remember is true
    let emailCurrent = localStorage.getItem('loginCurrent');
    let userCurrent = JSON.parse(localStorage.getItem(emailCurrent));
    emailDOM.value = emailCurrent;
    passwordDOM.value = userCurrent.password;
    rememberMeDOM.checked = true;
}


// handle submit
formInfoDOM.onsubmit = function(event) {
    event.preventDefault();
    let emailCurrent = emailDOM.value;
    let passwordCurrent = passwordDOM.value;

    let user = JSON.parse(localStorage.getItem(emailCurrent));

    // check user
    if(user) {

        // check password
        if(user.password == passwordCurrent) {

            // save user
            localStorage.setItem("loginCurrent", emailDOM.value);
            localStorage.setItem("isRemember", rememberMeDOM.checked);
            alert('Logged in successfully!');
            formInfoDOM.submit();
            
        } else {
            alert('incorrect password!');
        }
    } else {
        alert('Account does not exist!');
    }

}