//MVP
//if HW finished and time of day 
var d= new Date();
var t= d.getHours();
function snackTime(){
    if(t<10){
        console.log("LATTE PLEASE!");
    }
    else if(t>10 && t<16){
        console.log("I want a hot chocolate!");
    }
    else if(t>16 && t<22){
        console.log("I want ice cream!");
    }
    else{
        console.log("Go to bed!");
    }
}
snackTime();