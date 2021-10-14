$(document).ready(function () {

    $("#product").addClass("green")
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products", function (productData) {
        for (var i = 0; i < productData.length; i++) {


            var row = $("<tr>")
            var c1 = $("<td>").html(productData[i].id)
            c1.attr("class", "gray")
            var c2 = $("<td>").html(productData[i].medicineName)
            var c3 = $("<td>").html(productData[i].medicineBrand)
            c3.attr("class", "gray")
            var c4 = $("<td>").html(productData[i].expiryDate.split("-").join(" "))
            var c5 = $("<td>").html("$" + productData[i].unitPrice)
            c5.attr("class", "gray")
            var c6 = $("<td>").html(productData[i].stock)
            c6.attr("class", "gray")
            row.append(c1, c2, c3, c4, c5, c6);
            $(".tab").append(row)

        

        }
        var row = $(".tab tr")
        $(":checkbox").change(function () {

            var name = $(this).attr("id");
            if (this.checked == false) {

                unchecked(name)
            }
            else {
                checked(name)
            }
        })





        function checked(name) {

          

            for (i = 1; i < row.length; i++) {
                if (name.toUpperCase() == "STOCK") {

                    var data = row[i].getElementsByTagName("td")[5];

                    if (data.innerText < 400) {
                        row[i].style.display = "";

                    }
                    else {
                        ;
                    }
                }


                else {
                    var data = row[i].getElementsByTagName("td")[3];
                    var todayDate = new Date().getFullYear()
                    if (data.innerText.split(" ")[2] < todayDate) {
                        row[i].style.display = "";
                    }
                    else {
                        ;
                    }

                }

            }
            counter(row)
        }


        function unchecked(name) {

         

            for (i = 1; i < row.length; i++) {
                if (name.toUpperCase() == "STOCK") {

                    var data = row[i].getElementsByTagName("td")[5];

                    if (data.innerText < 400) {
                        row[i].style.display = "none";

                    }
                    else {
                        ;
                    }
                }


                else {
                    var data = row[i].getElementsByTagName("td")[3];
                    var todayDate = new Date().getFullYear()
                    if (data.innerText.split(" ")[2] < todayDate) {
                        row[i].style.display = "none";
                    }
                    else {
                        ;
                    }
                }

            }
            counter(row)
        }
       
        function counter(r) {
            var rowCount = 0;
            var rowCounter = $("#counter");

            for (j = 1; j < r.length; j++) {
                if (r[j].style.display == 'none') {
                    ;
                }
                else {
                    rowCount++;
                }
            }
            rowCounter.html("count:" + rowCount)


        }
        counter(row)






    });







});
