const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const LS_USER = "currentUser";
const CN_SHOWING = "showing";

function saveName(name){
    localStorage.setItem(LS_USER,name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(CN_SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function printGreeting(text){
    const currentTime = new Date().getHours();
    form.classList.remove(CN_SHOWING);
    greetings.classList.add(CN_SHOWING);
    if(currentTime > 6 && currentTime < 12){
        greetings.innerText = `Good Morning, ${text}`;
    }else if (currentTime >=12 && currentTime < 18){
        greetings.innerText = `Good Afternoon, ${text}`;
    }else if (currentTime >=18 && currentTime < 22){
        greetings.innerText = `Good Evening, ${text}`;
    }else{
        greetings.innerText = `Silence is your inspiration\nWelcome ${text}`
    }

    
}

function getName(){
    const currentUser = localStorage.getItem(LS_USER);
    if(currentUser === null){
        askForName();
    }else{
        printGreeting(currentUser);
    }
}

function init(){
    getName();
}

init();