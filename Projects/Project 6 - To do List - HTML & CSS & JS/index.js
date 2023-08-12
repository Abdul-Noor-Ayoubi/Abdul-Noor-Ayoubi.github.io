const textEntered = document.getElementById("textBox");
const addBtn = document.getElementById("addBtn");

const myList = document.getElementById("list");
addBtn.addEventListener("click", addTask);

const changeBackgroundBtn = document.getElementById("BGBtn");
changeBackgroundBtn.addEventListener("click", changeBackground);

function addTask()
{
    if(textEntered.value == "null" || textEntered.value == "")
    {
        alert("You didn't type anything");
    }
    else
    {
        const listItem = document.createElement("li");
        listItem.textContent = textEntered.value;
        myList.append(listItem);
    }
}

function deleteTask()
{
    myList.removeChild(myList.firstChild);
}

let bCounter = 1;

function changeBackground()
{
    bCounter++;
    if(bCounter % 2 == 0)
    {
        document.body.style.backgroundImage = "url('Images/background\ Image\ -\ 2.png')";
    }
    else
    {
        document.body.style.backgroundImage = "url('Images/background\ Image.png')";
    }
}