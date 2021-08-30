$(document).ready(function () {
  $("#product").addClass("green")











  $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products", function (productData) {
    for (var i = 0; i < productData.length; i++) {


      var row = $("<tr>")
      var column1 = $("<td>").html(productData[i].id)
      column1.attr("class", "gray")
      var column2 = $("<td>").html(productData[i].medicineName)
      var column3 = $("<td>").html(productData[i].medicineBrand)
      column3.attr("class","gray")
      var column4 = $("<td>").html(productData[i].expiryDate)
      var column5 = $("<td>").html("$"+productData[i].unitPrice)
      column5.attr("class","gray")
      var column6 = $("<td>").html(productData[i].stock)
      column6.attr("class","gray")
      row.append(column1, column2, column3, column4, column5, column6);
      $(".table").append(row)



    }
    var productExpired = $('#expire');
    productExpired[0].onchange = function(){
        
        var userRow = $(".table tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[3];
            var todayDate = new Date().getFullYear()
            console.log(todayDate)
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.split(',')[1] < todayDate){
                    if(productExpired[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
       
    }
    var rowCounter = $('#row-counter');
    var productStock = $('#stock');
    productStock[0].onchange = function(){
        console.log("Cdscsc")
        var userRow = $(".table tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[5];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue < 700){
                    if(productStock[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.html("count:"+rowCount) 
    }

   
  })





























});
