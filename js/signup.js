let nameInput = document.getElementById("nameinput");
let emailInput = document.getElementById("emailinput");
let passwordInput = document.getElementById("passwordinput");

let users = [];

if (localStorage.getItem("listUser") !== null) {
  users = JSON.parse(localStorage.getItem("listUser"));
}


    nameInput.addEventListener("input", function () {
      validateName();
    });


  emailInput.addEventListener("input", function () {
    validateEmail();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
  });

function addUser() {
  if (validateName() && validateEmail() && validatePassword()) {
    var x=false
    for (let i = 0; i < users.length; i++) {
  
      if (emailInput.value === users[i].email) {
        
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This email is not available",
          showConfirmButton: false,
          timer: 1500,
        });
        x=true
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
      }
      
    }
    if (x==false) {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");

      let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
  
      users.push(user);
      localStorage.setItem("listUser", JSON.stringify(users));
  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign Up is Successful",
        showConfirmButton: false,
        timer: 1000,
      });


    }
   












  } else {
    Swal.fire({
      icon: "error",
      title: "Can't Sign Up",
      text: "Please Enter Valid Data",
    });
  }
}






function validateName() {
  let regex = /^[a-z0-9_-]{3,15}$/;
  let term = nameInput.value;
  if (regex.test(term)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    return true;
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    return false;
  }
}

function validateEmail() {
  let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  let term = emailInput.value;
  if (regex.test(term)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    return true;
  } else {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    return false;
  }
}

function validatePassword() {
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  let term = passwordInput.value;
  if (regex.test(term)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    return true;
  } else {
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    return false;
  }
}


document.getElementById("eye").addEventListener("click",  function(){

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; 
  } else {
    passwordInput.type = "password";  
  }


  
} )