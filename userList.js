$(document).ready(function () {

  $("#user").addClass("green")
  var value = "";







  $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users", function (userData) {
    for (var i = 0; i < userData.length; i++) {
      var row = $("<tr>").attr("class", "target")
      var column1 = $("<td>").html(userData[i].id);
      column1.attr("class", "gray")
      var column2 = $("<td>")
      var im = $("<img>").attr({ src: userData[i].profilePic })
      column2.append(im)
      var column3 = $("<td>").html(userData[i].fullName);
      column3.attr("class", "fullname")
      column3.attr("class", "gray")
      var column4 = $("<td>").html(userData[i].dob);
      var column5 = $("<td>").html(userData[i].gender);
      var column6 = $("<td>").html(userData[i].currentCity + "," + userData[i].currentCountry);
      column6.attr("class", "gray")
      row.append(column1, column2, column3, column4, column5, column6);
      $("#table").append(row)
    }


  })





  $("#search-input").on("keypress", function () {
    if (event.keyCode === 13) {
      value = $("#search-input").val().toUpperCase();
      
      $("#table").addClass("hide")
   
      if (value.length < 2) {
        alert("DCFsvefrv")
      } else {
        $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=" + value, function (userData) {
          for (var i = 0; i < userData.length; i++) {
            var row = $("<tr>").attr("class", "target")
            var column1 = $("<td>").html(userData[i].id);
            column1.attr("class", "gray")
            var column2 = $("<td>")
            var im = $("<img>").attr({ src: userData[i].profilePic })
            column2.append(im)
            var column3 = $("<td>").html(userData[i].fullName);
            column3.attr("class", "fullname")
            column3.attr("class", "gray")
            var column4 = $("<td>").html(userData[i].dob);
            var column5 = $("<td>").html(userData[i].gender);
            var column6 = $("<td>").html(userData[i].currentCity + "," + userData[i].currentCountry);
            column6.attr("class", "gray")
            row.append(column1, column2, column3, column4, column5, column6);
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
