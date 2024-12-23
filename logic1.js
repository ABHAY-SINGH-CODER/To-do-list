/*Author Name:Abhay Singh
  Dated:21.12.2024
  Time:30 past 6
  Objective:To make logic behined working of To do list project*/

let count = 0;  //Calculate Number of objective in list


//This add a itemm in the list
function add_item(){  
  document.getElementById('list_1').innerHTML ;
  count = count + 1;
  document.getElementById('list_1').innerHTML += `<li id="item${count}" ><input type="text" id="text${count}" class="input"><button onclick="change()" class="add" >+</button></li>`;   
 }

 //This remove last item from the list
 function remove_item(){
    let t ="item" + count ;
    console.log(t);
    document.getElementById(t).remove() ;
    count = count - 1;

 }


 //This change text type input to text after user define its objective in list
 function change(){
    let value = document.getElementById(`text${count}`).value;
    document.getElementById(`text${count}`).remove();
    document.getElementById(`item${count}`).innerHTML = `<p>${value}</p>`
 }
