// var Name = document.querySelector(".profile_page .name_header");
// var FullName = prompt("Enter your full name");
// Name.innerHTML = "<h1>" + FullName.substr(0,  FullName.indexOf(" ")) + "<br>" + FullName.substr(FullName.indexOf(" ")+1) + "</h1>";



// Input Page vars
var inputBar = document.querySelector(".input_page .inputbox input[type='text']");
var addTaskBtn = document.querySelector(".input_page .submitBtn");
var crossBtnInputPage = document.querySelector(".input_page .crossbtn");
var radioBtn = document.querySelectorAll(".input_page .inputbox input[type='radio']");
var input_page = document.querySelector(".input_page");



// Todo Page Vars
var todo_page = document.querySelector(".todo_page");
var hamburgur = document.querySelector(".todo_page .todo_header .hamburgur");
var hamburgurLines = document.querySelectorAll(".todo_page .todo_header .hamburgur .line");
var searchBtn = document.querySelector(".todo_page .todo_header .search");
var notificationBtn = document.querySelector(".todo_page .todo_header .notification");
var addTaskPlusBtn = document.querySelector(".todo_page .addBtn");
var taskList = document.querySelector(".todo_page .tasks .taskList");



// Profile Page vars
var back_btn = document.querySelector(".profile_page .back_btn");
var profile_page = document.querySelector(".profile_page");




var myObj = {};
var TaskArrayToday = new Array();
var TaskArrayTomorrow = new Array();
if(localStorage.length > 0){
    myObj = JSON.parse(localStorage["item"]);
    TaskArrayToday = myObj["todayArray"];
    TaskArrayTomorrow = myObj["tomorrowArray"];
    updateUL(TaskArrayToday, TaskArrayTomorrow, myObj);
}
// console.log(localStorage.length);




window.addEventListener('click', function(e){
    // e.preventDefault();


    // Input Page
    if(e.target == addTaskBtn && inputBar.value != ""){
        if(radioBtn[0].checked == true){
            if(TaskArrayToday.indexOf(inputBar.value) == -1){
                TaskArrayToday.push(inputBar.value);
                inputBar.value = "";            
            }
            else if(TaskArrayToday.indexOf(inputBar.value) != -1){
                this.alert("Already Present Task Entered");
            }
        }
        else {
            if(TaskArrayTomorrow.indexOf(inputBar.value) == -1){
                TaskArrayTomorrow.push(inputBar.value);
                inputBar.value = "";    
            }
            else if(TaskArrayTomorrow.indexOf(inputBar.value) != -1){
                this.alert("Already Present Task Entered");
            }
        }
        myObj["todayArray"] = TaskArrayToday;
        myObj["tomorrowArray"] = TaskArrayTomorrow;
        updateUL(TaskArrayToday, TaskArrayTomorrow, myObj)
        updateLocalStorage(myObj);


        crossBtnInputPage.click();
    }




    //Todo Page Script
    if(e.target == crossBtnInputPage){
        input_page.style.display = "none";
        todo_page.style.display = "block";
    }
    if(e.target == addTaskPlusBtn){
        input_page.style.display = "block";
        todo_page.style.display = "none";
    }
    if(e.target == hamburgur || e.target == hamburgurLines[0] || e.target == hamburgurLines[1]){
        back_btn.style.right = "30%";
        todo_page.style.left = "70%";
        todo_page.style.transform = "scale(0.87)";
        profile_page.style.right = "0px"
    }



    //ProfilePage Script
    if(e.target == back_btn || e.target == back_btn.querySelector(".back_btn i")){
        todo_page.style.left = "0px";
        todo_page.style.transform = "scale(1)";
        profile_page.style.right = "100%"
    }
})

function updateLocalStorage(myObj){
    localStorage.setItem("item", JSON.stringify(myObj));
}

function updateUL(TaskArrayToday, TaskArrayTomorrow, myObj){
    taskList.innerHTML = "";
    
    for(var i=0; i<TaskArrayToday.length; i++){
        var li = document.createElement("LI");
        li.innerHTML = `<input type='checkbox'> ${TaskArrayToday[i]}`;
        taskList.appendChild(li);
    }

}