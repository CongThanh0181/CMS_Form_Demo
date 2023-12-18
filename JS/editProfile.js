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

// handle submit
formInfoDOM.onsubmit = function(event){
    event.preventDefault();
    userCurrent.firstName = fixName(firstNameDOM.value);
    userCurrent.lastName = fixName(lastNameDOM.value);
    userCurrent.phone = phoneDOM.value;
    userCurrent.desc = descDOM.value;
    localStorage.setItem(emailCurrent, JSON.stringify(userCurrent));
    alert('Update success!');
    formInfoDOM.submit();
}

// function handle string
function fixName(nameStr) {
    nameStr = nameStr.trim().toLowerCase();
    nameStr = nameStr.split(" ");
    
    nameStr = nameStr.filter( (e) => {
        return e!= "";
    });

    nameStr = nameStr.map( (e) => {
        if(e){
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
    });

    return nameStr = nameStr.join(" ");
}



