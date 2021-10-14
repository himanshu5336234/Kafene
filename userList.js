$(document).ready(function () {

  $("#user").addClass("green")
  var value = "";







  $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users", function (userData) {
    for (var i = 0; i < userData.length; i++) {
      var row = $("<tr>").attr("class", "target")
      var C1 = $("<td>").html(userData[i].id);
      C1.attr("class", "gray")
      var C2 = $("<td>")
      var im = $("<img>").attr({ src: userData[i].profilePic })
      C2.append(im)
      var C3 = $("<td>").html(userData[i].fullName);
      C3.attr("class", "fullname")
      C3.attr("class", "gray")
      var C4 = $("<td>").html(userData[i].dob);
      var C5 = $("<td>").html(userData[i].gender);
      var C6 = $("<td>").html(userData[i].currentCity + "," + userData[i].currentCountry);
      C6.attr("class", "gray")
      row.append(C1, C2, C3, C4, C5, C6);
      $("#table").append(row)
    }


  })





  $("#search-input").on("keypress", function () {
    if (event.keyCode === 13) {
      value = $("#search-input").val().toUpperCase();
      $("#tab").empty()
      $("#table").addClass("hide")
   
      if (value.length <= 2) {
        alert(" enter more then two value")
      } else {
        $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=" + value, function (userData) {
          for (var i = 0; i < userData.length; i++) {
            var row = $("<tr>").attr("class", "target")
            var C1 = $("<td>").html(userData[i].id);
            C1.attr("class", "gray")
            var C2 = $("<td>")
            var im = $("<img>").attr({ src: userData[i].profilePic })
            C2.append(im)
            var C3 = $("<td>").html(userData[i].fullName);
            C3.attr("class", "fullname")
            C3.attr("class", "gray")
            var C4 = $("<td>").html(userData[i].dob);
            var C5 = $("<td>").html(userData[i].gender);
            var C6 = $("<td>").html(userData[i].currentCity + "," + userData[i].currentCountry);
            C6.attr("class", "gray")
            row.append(C1, C2, C3, C4, C5, C6);
            $("#tab").append(row)
          }


        })
      }
    }



    $("#btn").click(function () {
      value=null;
      $("#tab").empty()
      $("#table").removeClass("hide")
    })
  
  

  });





















});
