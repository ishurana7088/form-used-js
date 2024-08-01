let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let input2  = document.querySelector(".input2")
let input3  = document.querySelector(".input3")
let input4 = document.querySelector(".input4")

let fun1 =()=>{

    let li = document.createElement("li");

    li.innerHTML=`The First Name is :-  ${input.value} `;
    console.log(input.value)
    input.value ="";
    let body=document.querySelector("body");
   body.appendChild(li);
   
 }
 let fun2 =()=>{
    let li = document.createElement("li");

    li.innerHTML=`The Last Name is :-  ${input2.value} `;
    console.log(input2.value)
    input2.value ="";
    let body=document.querySelector("body");
   body.appendChild(li);
  }
  let fun3 =()=>{

    let li = document.createElement("li");
    li.innerHTML=`Gmail is  :-  ${input3.value} `;
    console.log(input3.value)
    input3.value ="";
   

    let body=document.querySelector("body");
   body.appendChild(li);
 }
 let fun4 =()=>{

    let li = document.createElement("li");

    li.innerHTML=`Password is   :-  ${input4.value} `;
    console.log(input4.value)
    input3.value ="";
    let body=document.querySelector("body");
   body.appendChild(li);
 }
btn.addEventListener("click",()=>{
 fun1();
 fun2();
 fun3();
 fun4();
});
