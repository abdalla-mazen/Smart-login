let nameInput = document.getElementById("nameinput");
let emailInput = document.getElementById("emailinput");
let passwordInput = document.getElementById("passwordinput");


if (localStorage.getItem("listUser") !== null) {
    users = JSON.parse(localStorage.getItem("listUser"));
  }
  

  if (window.location.pathname.includes("home.html")) {
    document.addEventListener("DOMContentLoaded", function() {
      displayWelcome();
    });
  }
  
  
  
  
  function displayWelcome() {
  
  let x=  localStorage.getItem("currentEmail")
     let welcome = document.getElementById("welcome");
    
       welcome.innerHTML = `<h1> Welcome ${x}</h1>`;
  
   }

  
    document.getElementById("logout").addEventListener("click",  function(){
      window.location= './index.html'
    localStorage.removeItem("currentEmail")
    
    } )

  