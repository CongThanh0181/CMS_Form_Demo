let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let tbodyDOM = $("tbody");

// lấy data của user current
let emailCurrent = localStorage.getItem("loginCurrent");
let userCurrentDatas = JSON.parse(localStorage.getItem(emailCurrent))["datas"];

// render html
let htmls = "";
userCurrentDatas.forEach((element, index) => {
    let html = 
    `<tr>
    <td>${index+1}</td>
    <td>${element.title}</td>
    <td>${element.brief}</td>
    <td>${element.dateCreated}</td>
    </tr>`
    htmls = htmls + html;
});
tbodyDOM.innerHTML = htmls;