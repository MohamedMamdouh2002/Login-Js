var signUpName=window.document.getElementById("yourName")
var signUpEmail=window.document.getElementById("yourEmail")
var signUpPassword=window.document.getElementById("yourPassword")
var signInEmail=window.document.getElementById("email")
var signInPassword=window.document.getElementById("password")
var errorMessage = document.getElementById("errorMessage");
var welcome = document.getElementById("welcome");


var arrOfObject=[];

if (localStorage.getItem("arrOfObject")!=null) {
    arrOfObject= JSON.parse(localStorage.getItem("arrOfObject"))
    
}

function signUp() {
    var test=true;
    if (signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === "") {
        errorMessage.innerHTML = "All inputs is required.";
    } else {
        for(i=0; i<arrOfObject.length ;i++){
            if(signUpEmail.value==arrOfObject[i].signUpEmail){
                errorMessage.innerHTML = "email already exists.";
                test=false;
            }

        }
         if(test==true){
            var registration = {
                signUpName: signUpName.value,
                signUpEmail: signUpEmail.value,
                signUpPassword: signUpPassword.value
            };
            arrOfObject.push(registration);
            localStorage.setItem("arrOfObject", JSON.stringify(arrOfObject));
            clear();
         }
    
    }
    
    
}
function signIn() {
    var index;
    var testLogin=true;
    if (signInEmail.value === "" || signInPassword.value === "") {
        errorMessage.innerHTML = "All inputs are required.";

    } else{
        for(i=0; i<arrOfObject.length ;i++){
            if(signInEmail.value==arrOfObject[i].signUpEmail&&signInPassword.value==arrOfObject[i].signUpPassword){
                testLogin=false;
                index=i;
            }
        }
        if(testLogin==true){
            errorMessage.innerHTML = "incorrect email or password";
        }
        else{
             window.location.href='Home.html'
            localStorage.setItem("index", JSON.stringify(index));
            
        }

    }


}
function clear() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}
