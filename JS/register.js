let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let userNameDOM = $('#user-name');
let emailDOM = $('#email');
let passwordDOM = $('#password');
let rePasswordDOM = $('#re-password');
let registerBtnDOM = $('.register-btn');
let formInfoDOM = $('.form-info');


// handle click register button
registerBtnDOM.onclick = function(event) {
    
    // start check user or email exists
    let currentKey = emailDOM.value;
    let isRepeat = false;
    let emailsStorage = [];
    let userNamesStorage = [];

    for (let i = 0; i < localStorage.length; i++) {
        // if not undefined
        if((localStorage.getItem(localStorage.key(i)))["userName"]){
            let userNameStorage = JSON.parse(localStorage.getItem(localStorage.key(i)))["userName"];
            let emailStorage = localStorage.key(i);
            emailsStorage.push(emailStorage);
            userNamesStorage.push(userNameStorage);
        }
    }

    if(emailsStorage.includes(currentKey) || userNamesStorage.includes(userNameDOM.value)){
        isRepeat = true;
    }

    if(isRepeat){
        event.preventDefault();
        alert('User or Email exists!');
        return;
    }
    // end check user or email exists

    // start check 2 passwords
    if(passwordDOM.value.length >= 8 
        && rePasswordDOM.value.length >= 8 
        && passwordDOM.value !== rePasswordDOM.value){
            
            event.preventDefault();
            alert('Confirmation passwords do not match!');
            rePasswordDOM.focus();
            return;
    }
    // end check 2 passwords
};


// handle form submit
formInfoDOM.onsubmit = function(event) {
    event.preventDefault();
    const user = {
        userName: userNameDOM.value.trim(),
        email: emailDOM.value.trim(),
        password: passwordDOM.value,
        rePassword: rePasswordDOM.value
    }
    let json = JSON.stringify(user);

    // save user for key: email, value: user
    localStorage.setItem(emailDOM.value, json);
    alert('Sign Up Success!');
    formInfoDOM.submit();
};




