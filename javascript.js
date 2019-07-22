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
   var type="female";
 }
if(day<=0 || day>=32 || month<=0 || month>=13 || month==2 && day>29 || year<=0){
    alert("your input is invalid!");
}

if(type=="male" && output==1){
   document.getElementById("get").innerHTML = ("You were born on a Monday and your Akan name is KWADWO. 'Monday's child is fair of face,'"); 
}
if(type=="male" && output==2){
    document.getElementById("get").innerHTML = ("You were born on a 'Tuesday' and your Akan name is KWABENA. 'Tuesday's child is full of grace,'")
}
if(type=="male" && output==3){
    document.getElementById("get").innerHTML = ("You were born on a 'Wednesday' and your Akan name is KWAKU. 'Wednesday's child is full of courage,'")
}
if(type=="male" && output==4){
    document.getElementById("get").innerHTML = ("You were born on a 'Thursday' and your Akan name is YAW. 'Thursday's child has far to go.'")
}
if(type=="male" && output==5){
    document.getElementById("get").innerHTML = ("You were born on a 'Friday' and your Akan name is KOFI. 'Friday's child is loving and giving,'")
}
if(type=="male" && output==6){
    document.getElementById("get").innerHTML = ("You were born on a 'Saturday' and your Akan name is KWAME. 'Saturday's child works hard for a living,'")
}
if(type=="male" && output==7){
    document.getElementById("get").innerHTML = ("You were born on a 'Sunday' and your Akan name is KWASI. 'But the child born on the Sunday, is fair and wise and good in every way.'")
}
else if(type=="female" && output==1){
    document.getElementById("get").innerHTML = ("You were born on a Monday and your Akan name is ADWOA. 'Monday's child is fair of face,'"); 
 }
 else if(type=="female" && output==2){
     document.getElementById("get").innerHTML = ("You were born on a 'Tuesday' and your Akan name is ABENAA. 'Tuesday's child is full of grace,'")
 }
 else if(type=="female" && output==3){
     document.getElementById("get").innerHTML = ("You were born on a 'Wednesday' and your Akan name is AKUA. 'Wednesday's child is full of courage,'")
 }
 else if(type=="female" && output==4){
     document.getElementById("get").innerHTML = ("You were born on a 'Thursday' and your Akan name is YAA. 'Thursday's child has far to go.'")
 }
else if(type=="female" && output==5){
     document.getElementById("get").innerHTML = ("You were born on a 'Friday' and your Akan name is AFUA. 'Friday's child is loving and giving,'")
 }
 else  if(type=="female" && output==6){
     document.getElementById("get").innerHTML = ("You were born on a 'Saturday' and your Akan name is AMA. 'Saturday's child works hard for a living,'")
 }
 else if(type=="female" && output==7){
     document.getElementById("get").innerHTML = ("You were born on a 'Sunday' and your Akan name is AKOSUA. 'But the child born on the Sunday, is fair and wise and good in every way.'")
 }
}

