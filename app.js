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
var addTaskBtn = document.querySelector(".todo_page .addBtn");



// Profile Page vars
var back_btn = document.querySelector(".profile_page .back_btn");
var profile_page = document.querySelector(".profile_page");




var myObj = {};
var TaskArrayToday = new Array();
var TaskArrayTomorrow = new Array();

window.addEventListener('click', function(e){
    // e.preventDefault();


    // Input Page
    if(e.target == addTaskBtn){
        if(radioBtn[0].checked == true){

            if(inputBar.value != "" && TaskArrayToday.indexOf(inputBar.value) == -1){
                TaskArrayToday.push(inputBar.value);
                inputBar.value = "";
                
            }
            else if(TaskArrayToday.indexOf(inputBar.value) != -1){
                this.alert("Already Present Task Entered");
            }

        }
        else {
            if(inputBar.value != "" && TaskArrayTomorrow.indexOf(inputBar.value) == -1){
                TaskArrayTomorrow.push(inputBar.value);
                inputBar.value = "";
                
            }
            else if(TaskArrayTomorrow.indexOf(inputBar.value) != -1){
                this.alert("Already Present Task Entered");
            }
        }
    }
    



    //Todo Page Script
    if(e.target == crossBtnInputPage){
        input_page.style.display = "none";
        todo_page.style.display = "block";
    }
    if(e.target == addTaskBtn){
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
        console.log("kljdfh");
        // back_btn.style.right = "36px";
        todo_page.style.left = "0px";
        todo_page.style.transform = "scale(1)";
        profile_page.style.right = "100%"
    }
})


function updateLocalStorage(array){

}