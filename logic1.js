//Add items in the list
let count = 0;

function add_item(){  
  document.getElementById('list_1').innerHTML ;
  count = count + 1;
  document.getElementById('list_1').innerHTML += `<li id="item${count}" ><input type="text" id="text${count}" class="input"><button onclick="change()" class="add" >+</button></li>`;   
 }

 function remove_item(){
    let t ="item" + count ;
    console.log(t);
    document.getElementById(t).remove() ;
    count = count - 1;

 }

 function change(){
    let value = document.getElementById(`text${count}`).value;
    document.getElementById(`text${count}`).remove();
    document.getElementById(`item${count}`).innerHTML = `<p>${value}</p>`
 }
