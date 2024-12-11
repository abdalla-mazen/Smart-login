let nameInput = document.getElementById("nameinput");
let emailInput = document.getElementById("emailinput");
let passwordInput = document.getElementById("passwordinput");

let users = [];

if (localStorage.getItem("listUser") !== null) {
  users = JSON.parse(localStorage.getItem("listUser"));
}

document.getElementById("login").addEventListener("click", function () {
  logIN();
});

// index
function logIN() {
  var x = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === emailInput.value &&
      users[i].password === passwordInput.value
    ) {
      window.location = "./home.html";
      localStorage.setItem("currentEmail", users[i].name);
      x = true;
      break;
    
    }
  }
  if (x == false)
    Swal.fire({
      icon: "error",
      title: "Cant Sign Up",
      text: "Please Enter Valid Data",
    });
}



document.getElementById("eye").addEventListener("click",  function(){

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; 
  } else {
    passwordInput.type = "password";  
  }


  
} )