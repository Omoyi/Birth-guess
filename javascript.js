function myFunct(){
var day = document.getElementById("dd").value;

var month = document.getElementById("mm").value;
var year = document.getElementById("yy").value;
var type = document.getElementById("type").value;
console.log(type);
var YY = parseInt(year);
var MM = parseInt(month);
var DD = parseInt(day);
var CC = (YY-1)/100+1;
var output =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
var output=parseInt(output);

if(document.getElementById("type").checked)
{
    var type="male";
}
 else{
   var type="Female";
 }
if(day<=0 || day>=32 || month<=0 || month>=13 || month==2 && day>29 || year<=0){
    alert("your input is invalid!");
}

if(type=="male" && output==1){
   document.getElementById("get").innerHTML = ("You were born on a Monday and your Akan name is 'KWADWO'. Monday born are  "); 
}
if(type=="male" && output==2){
    document.getElementById("get").innerHTML = ("You were born on a 'Tuesday' and your Akan name is 'KWABENA'")
}
if(type=="male" && output==3){
    document.getElementById("get").innerHTML = ("You were born on a 'Wednesday' and your Akan name is 'KWAKU'")
}
if(type=="male" && output==4){
    document.getElementById("get").innerHTML = ("You were born on a 'Thursday' and your Akan name is 'YAW'")
}
if(type=="male" && output==5){
    document.getElementById("get").innerHTML = ("You were born on a 'Friday' and your Akan name is 'KOFI'")
}
if(type=="male" && output==6){
    document.getElementById("get").innerHTML = ("You were born on a 'Saturday' and your Akan name is 'KWAME'")
}
if(type=="male" && output==7){
    document.getElementById("get").innerHTML = ("You were born on a 'Sunday' and your Akan name is 'KWASI'")
}
}
