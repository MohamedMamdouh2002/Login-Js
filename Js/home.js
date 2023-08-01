var arrOfObject=[];
var index;
if (localStorage.getItem("arrOfObject")!=null) {
    arrOfObject= JSON.parse(localStorage.getItem("arrOfObject"))
    
}
if (localStorage.getItem("index")!=null) {
    index= JSON.parse(localStorage.getItem("index"))
    
}
var welcome = document.getElementById("welcome");
welcome.innerHTML=`welcome ${arrOfObject[index].signUpName}`
