// console.log(date);
var min;
var hour;
var sec;
var date;


var cont = document.querySelectorAll(".hand");
// console.log(cont);
var cont = document.getElementsByClassName("hand");
console.log(cont);


setInterval(() => {    

    date= new Date();
    min= (date.getMinutes()*5)+180;
    sec= (date.getSeconds()*5)+180;
    hour=(date.getHours()*30)+180;    
    console.log(min);
    // console.log(sec);
    // console.log(hour);
    // console.log(cont[1]);
    
    cont[0].style.transform=`rotate(${hour}deg)`;
    cont[1].style.transform=`rotate(${min}deg)`;
    cont[2].style.transform=`rotate(${sec}deg)`;
    
    
},1000);