console.log("Script loaded!");
const endDate1="27 November 2023 12:00 PM"
document.getElementById("endDate").innerText=endDate1;

const input=document.querySelectorAll('.input');

function clock(){
    var endDate=new Date(endDate1);
    var currDate=new Date();

    var diff=(endDate-currDate)/1000;
    // console.log(diff);
    // console.log(currDate);
    
    input[0].value=Math.floor(diff/86400);
    input[1].value=Math.floor(diff/3600)%24;
    input[2].value=Math.floor(diff/60)%60;
    input[3].value=Math.floor(diff%60);


}

clock();

setInterval(()=>{
    clock();
},1000);