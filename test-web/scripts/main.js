let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world";

let image = document.querySelector("img")
image.onclick = function() {
    if (image.getAttribute("src") === "images/sun.jpeg") {
        image.setAttribute("src", "images/night.jpeg")
    } else {
        image.setAttribute("src", "images/sun.jpeg")
    }
}

let button = document.querySelector("button")
button.onclick = function() {
    setUserNmae();
}

function setUserNmae() {
    let myName = prompt("请输入你的名字")
    if (!myName || myName === null) {
        setUserNmae()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = myName + "欢迎你"
    }
    
}

if (!localStorage.getItem("name")) {
    setUserNmae()
} else {
    let storeName = localStorage.getItem("name")
    myHeading.textContent = storeName + "欢迎你"
}