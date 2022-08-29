
let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png";
    } else {
        icon.src = "sun.png";
    }
}

let characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];

let passwordLength = window.prompt("Enter password length in digits:");
let wantNumber = window.prompt("Do you want numbers in your passwods?");
let wantSymbol = window.prompt("Do you want symbols in your passwods?");
let firstEl = document.getElementById("password-1");
let secondEl = document.getElementById("password-2");
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let generatedPasswordOne = generatePassword();
let generatedPasswordTwo = generatePassword();

function generateRandomCharacters(){
    if (wantNumber === "Yes" || wantNumber === "Yeah" || wantNumber === "yes" || wantNumber === "yes, please"){
        characters.push(...numbers)
    }
    if (wantSymbol === "Yes" || wantSymbol === "Yeah" || wantSymbol === "yes" || wantNumber === "yes, please"){
        characters.push(...symbols)
    }
    let randChar = Math.floor( Math.random() * characters.length );
    return characters[randChar];
}

function generatePassword(){
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++){
        generatedPassword += generateRandomCharacters()
    }
    return generatedPassword
}

function renderPassword(){
    firstEl.textContent = generatedPasswordOne;
    secondEl.textContent = generatedPasswordTwo;
    alert("Hi! My name is Sabb. And I make nice interactive Apps. Find below, two very strong passwords for your account!")
}

function copyText(htmlElement){
    if (!htmlElement){
        return;
    }
    let passEl = htmlElement.innerText;
    let inputEl = document.createElement("input");
    inputEl.setAttribute("value", passEl);
    document.body.appendChild(inputEl);
    inputEl.select();
    document.execCommand("copy");
    inputEl.parentNode.removeChild(inputEl);

    alert("Password has been copied to clipboard! 👌")
}

document.querySelector(".btnOne").addEventListener("click", function(){
    copyText(document.querySelector("#password-1"));
})

document.querySelector(".btnTwo").addEventListener("click", function(){
    copyText(document.querySelector("#password-2"));
})

