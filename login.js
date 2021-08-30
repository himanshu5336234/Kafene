$(document).ready(function () {
var info =localStorage.getItem("isLoggedIn")
if(info==="true"){
  location.replace("orderList.html")
}

  
 
  var input1 = $("#username")
  var input2 = $("#password")
   var submit=$("#submit")



  submit.click(function () {
    if (input1.val() === "qaifi" && input2.val() === "qaifi") {
      alert("Login Successful")
      localStorage.setItem("isLoggedIn", "true")
      var obj = {
        username : input1.val(),
        password : input2.val()
    }
    localStorage.setItem('userInfo',JSON.stringify(obj));
      location.replace("orderList.html")
    }
    else {
      
      alert("Please enter valid credentials!")
    }

  })





});