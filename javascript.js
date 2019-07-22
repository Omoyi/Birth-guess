function myFunct(){
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var text = ["", ""]
var gender = ["male", "female"];
var male = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
var female = ["Adwoa", "Abenaa", "Akua","Yaa","Afua","Ama","Akosua",];

var day = document.getElementById("dd").value;
console.log(day);
var month = document.getElementById("mm").value;
var year = document.getElementById("yy").value;

if(day<=0 || month<=0 || year<=0){
    alert("your input is invalid!");
}
var day =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
}

