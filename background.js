const body = document.querySelector("body");

const IMG_NUM = 5;

function handleImg(event){
    console.log("Image is loaded");
}

function printImage(imgNum){
    const image = new Image();
    image.src = `/images/${imgNum +1}.jpg`;
    image.classList.add("background");
    body.prepend(image);
    
}

function genRanNum(){
    const ranNum = Math.floor(Math.random() * IMG_NUM);
    return ranNum;
}

function init(){
    const ranNum = genRanNum();
    printImage(ranNum);
}
init();