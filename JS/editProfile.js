let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let emailCurrent = localStorage.getItem("loginCurrent");
let emailDom = $(".email");
let submitBtnDOM = $("button[type='submit']");
let firstNameDOM = $("#firstName");
let lastNameDOM = $("#lastName");
let phoneDOM = $("#phone");
let descDOM = $("#desc");
let formInfoDOM = $(".form-info");

// render user current
let userCurrent = JSON.parse(localStorage.getItem(emailCurrent));
emailDom.innerHTML = emailCurrent;
if(userCurrent["firstName"]){
    firstNameDOM.value = userCurrent["firstName"];
}
if(userCurrent["lastName"]){
    lastNameDOM.value = userCurrent["lastName"];
}
if(userCurrent["phone"]){
    phoneDOM.value = userCurrent["phone"];
}
if(userCurrent["desc"]){
    descDOM.value = userCurrent["desc"];
}

// xử lý khi submit
formInfoDOM.onsubmit = function(event){
    event.preventDefault();
    userCurrent.firstName = fixName(firstNameDOM.value);
    userCurrent.lastName = fixName(lastNameDOM.value);
    userCurrent.phone = phoneDOM.value;
    userCurrent.desc = descDOM.value;
    localStorage.setItem(emailCurrent, JSON.stringify(userCurrent));
    alert('Cập nhật thành công!');
    formInfoDOM.submit();
}

// Hàm xử lý chuỗi loại bỏ khoảng trắng dư thừa, viết hoa chữ cái đầu
function fixName(nameStr) {
    nameStr = nameStr.trim().toLowerCase();
    nameStr = nameStr.split(" ");
    
    // lưu ý nó chỉ lọc chứ không gán được element
    nameStr = nameStr.filter( (e) => {
        return e!= "";
    });

    // lưu ý nó chỉ gán thay đổi dữ liệu chứ không xóa được element
    nameStr = nameStr.map( (e) => {
        if(e){
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
    });

    return nameStr = nameStr.join(" ");
}



