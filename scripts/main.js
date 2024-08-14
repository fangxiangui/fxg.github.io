let myImg = document.querySelector("img");
myImg.onclick = () => {
    let src = myImg.getAttribute("src");
    if(src === "./images/demo.jpg"){
        src = "./images/demo2.jpg";
    } else {
        src = "./images/demo.jpg";
    }
    myImg.setAttribute("src",src);
}

let myButton = document.querySelector("button");
let myH1 = document.querySelector("h1");

function setUserName(){
    let userName = prompt('请输入你的名字：');
    if(userName) {
        localStorage.setItem("name",userName);
    } else {
        userName = localStorage.getItem("name");
    }
    myH1.textContent = '仙逆，'+userName+'!';
}

myButton.onclick = () => {
    setUserName();
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    myH1.textContent = '仙逆，'+localStorage.getItem("name")+'!';
}
