const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const LS_TODOS = 'toDos';

let toDos =[];            //Array to save each toDos


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter( function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

//save toDos(array) as toDos(name)
function saveToDos(){
    localStorage.setItem(LS_TODOS, JSON.stringify(toDos));      //make object to string = stringify
}

//Create HTML elements in JS
function printToDo(text){
    //create HTML elements and initialize it and appenChild to li
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    //AppenChild created li to toDoList
    toDoList.appendChild(li);

    //Create toDo object and push to the array
    const toDoObj = {
        text:text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();                 //prevent reload
    const currentValue = toDoInput.value;   //set input value to current value
    printToDo(currentValue);
    toDoInput.value = "";                   //reset the input box
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(LS_TODOS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);    //make string to Object = parse
        parsedToDos.forEach(function(toDo){             //forEach = excute function for each elements in array
            printToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();