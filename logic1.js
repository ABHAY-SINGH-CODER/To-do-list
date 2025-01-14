let add_instance = document.getElementById("enter");
add_instance.addEventListener("click",add_item);
count = 0;
let task = [];
function add_item(){
   let val = document.getElementById("taskname");
   let task_name = val.value;
   let add_task = document.getElementById("task");
   count++;
   let n = `t${count}`;
  
   add_task.innerHTML += `<div class="box" id="${n}">${task_name}<a class="delete"  onclick="deletet('${n}')">
   Delete</a></div>`;
  
   

}



function deletet(string1){
   console.log(string1);
   let now = document.getElementById(string1);
   now.style.textDecoration = "line-through";
   now.style.color ="red";
   now.style.fontStyle = "italics";
   
   
       
}