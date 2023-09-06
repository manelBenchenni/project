let i = document.querySelector('i');
let ul= document.querySelector('ul');
let li = document.querySelectorAll('li');
i.onclick = function (){
   ul.classList.toggle('active');
   for(let i=0 ; i<li.length ;i++){
    li[i].classList.toggle('activ');
 }
   
    
}