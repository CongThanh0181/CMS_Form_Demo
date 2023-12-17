let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let emailCurrent = localStorage.getItem("loginCurrent");
let formInfoDOM = $(".form-info");
let briefDOM = $("#brief");
let titleDOM = $("#title");
let contentDOM = $("#content");

let userCurrent = JSON.parse(localStorage.getItem(emailCurrent));
// thêm thuộc tính datas nếu chưa có
if(!Array.isArray(userCurrent.datas)){
    userCurrent.datas = [];
}


// xử lý khi submit
formInfoDOM.onsubmit = function(event) {
    event.preventDefault();

    // format date
    let dateCurrent = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
    };

    let data = {
        title: titleDOM.value,
        brief: briefDOM.value,
        content: contentDOM.value,
        dateCreated: 
        `${dateCurrent.toLocaleDateString('vi-VN')}
        <br>${dateCurrent.toLocaleString('vi-VN', options)}`
    }
    userCurrent.datas.push(data);

    let json = JSON.stringify(userCurrent);
    localStorage.setItem(emailCurrent, json);
    alert('Thêm content thành công!');
    formInfoDOM.submit();
}