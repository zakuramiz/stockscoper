const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "media/gifs/get-this-man-a-true.gif") {
        myImage.setAttribute("src", "media/images/therizzler.jpg");
    } else {
        myImage.setAttribute("src", "media/gifs/get-this-man-a-true.gif");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `MANGO, MANGO, MANGO, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
