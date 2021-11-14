 let email = document.getElementById("email");
 let pwd = document.getElementById("pwd");
 let eerror = document.getElementById("email_error");
 let perror = document.getElementById("password_error");

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

  function valide(){
      if(/[a-z]/.test(pwd.value)==-1){
                    perror.innerHTML="INVALID";
                                         return false;
    }
      else if(/[A-Z]/.test(pwd.value)==-1) {
          perror.innerHTML="INVALID";
         return false;
     }
   elseif(/[0-9]/.test(pwd.value)==-1) {
 perror.innerHTML="INVALID";
      return false;
      }
 elseif (pwd.value>8)
 {    return false;
     perror.innerHTML="INVALID" ;  }
  else {
   return true; 
        perror.innerHTML="VALID"; }  }