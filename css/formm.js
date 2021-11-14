let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let number = document.getElementById("number");
let namee = document.getElementById("namee");
let eerror = document.getElementById("email_error");
let perror = document.getElementById("password_error");
let nerror = document.getElementById("name_error");
let nuerror = document.getElementById("num_error");


 function validate(){
          let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
       eerror.innerHTML="VALID";
      eerror.style.color="green";
         return true;
  }
     else{
      eerror.innerHTML="INVALID";
    eerror.style.color="red";
       return false
    }
}

 

 function validd(){
     if(email.value.trim==""||pwd.value.trim=="")
     {
         alert("FIELDS CANNOT BE EMPTY");
         return false;
        
        }
         else{
               return true;
         }
 }

 function valiid(){
    if(pwd.value>=8){
return true;
perror.innerHTML="VALID";
    }
    else{
       return false;
    }
 }
  