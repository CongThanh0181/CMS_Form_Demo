let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let userNameDOM = $('#user-name');
let emailDOM = $('#email');
let passwordDOM = $('#password');
let rePasswordDOM = $('#re-password');
let registerBtnDOM = $('.register-btn');
let formInfoDOM = $('.form-info');


// xử lý khi click register button
registerBtnDOM.onclick = function(event) {
    
    // start kiểm tra user hoặc email đã tồn tại
    let currentKey = emailDOM.value;
    let isRepeat = false;
    let emailsStorage = [];
    let userNamesStorage = [];

    for (let i = 0; i < localStorage.length; i++) {
        // nếu không undefined
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
        alert('User hoặc Email đã tồn tại!');
        return;
    }
    // end kiểm tra user hoặc email đã tồn tại

    // start kiểm tra 2 mật khẩu khớp nhau
    if(passwordDOM.value.length >= 8 
        && rePasswordDOM.value.length >= 8 
        && passwordDOM.value !== rePasswordDOM.value){
            
            event.preventDefault();
            alert('Mật khẩu xác nhận không khớp nhau!');
            rePasswordDOM.focus();
            return;
    }
    // end kiểm tra 2 mật khẩu khớp nhau
};


// xử lý khi form submit thông tin
formInfoDOM.onsubmit = function(event) {
    event.preventDefault();
    const user = {
        userName: userNameDOM.value.trim(),
        email: emailDOM.value.trim(),
        password: passwordDOM.value,
        rePassword: rePasswordDOM.value
    }
    let json = JSON.stringify(user);

    // lưu từng user theo key: email, value: user
    localStorage.setItem(emailDOM.value, json);
    alert('Đăng ký thành công!');
    formInfoDOM.submit();
};




