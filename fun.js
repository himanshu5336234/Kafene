$(document).ready(function(){

    $("#order").click(function(){
        window.location.href="./orderList.html";
        $("#order").addClass("green")
    });
    $("#product").click(function(){
        window.location.href="./productList.html";

    });
    $("#user").click(function(){
        window.location.href="./userList.html";
    
    });
    $("#logout").click(function(){
        console.log("Cwvr");
        localStorage.setItem("isLoggedIn",false)
        location.replace("index.html")
    })


})