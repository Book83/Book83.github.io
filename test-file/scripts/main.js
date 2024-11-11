// image switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/thaifood.jpeg") {
        myImage.setAttribute("src", "images/thaifood2.jpeg");
    } else {
        myImage.setAttribute("src", "images/thaifood.jpeg");
    }
};
// personolized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt ("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = 'Thai food is delicious, ' + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.innerHTML = 'Thai food is delicious, ' +storedName;
}
myButton.onclick = () => {
    setUserName();
};