let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let emailDOM = $('#email');
let passwordDOM = $('#password');
let formInfoDOM = $('.form-info');
let rememberMeDOM = $('#remember_me');


if(localStorage.getItem('isRemember') === "true") {
    // render html khi có remember
    let emailCurrent = localStorage.getItem('loginCurrent');
    let userCurrent = JSON.parse(localStorage.getItem(emailCurrent));
    emailDOM.value = emailCurrent;
    passwordDOM.value = userCurrent.password;
    rememberMeDOM.checked = true;
}


// xử lý khi submit
formInfoDOM.onsubmit = function(event) {
    event.preventDefault();
    let emailCurrent = emailDOM.value;
    let passwordCurrent = passwordDOM.value;

    let user = JSON.parse(localStorage.getItem(emailCurrent));

    // kiểm tra xem có khớp user không
    if(user) {

        // kiểm tra khớp password
        if(user.password == passwordCurrent) {

            // lưu thông tin user
            localStorage.setItem("loginCurrent", emailDOM.value);
            localStorage.setItem("isRemember", rememberMeDOM.checked);
            alert('Đăng nhập thành công!');
            formInfoDOM.submit();
            
        } else {
            alert('Mật khẩu không chính xác!');
        }
    } else {
        alert('Tài khoản không tồn tại!');
    }

}