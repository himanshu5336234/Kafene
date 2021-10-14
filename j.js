$(document).ready(function () {


    $("#order").addClass("green")

    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", function (Data) {
        for (var i = 0; i < Data.length; i++) {
            var r = $("<tr>")
            var c1 = $("<td>").html(Data[i].id)
            c1.attr("class", "gray")
            var c2 = $("<td>").html(Data[i].customerName)
            var c3 = $("<td>").html(Data[i].orderDate + "<br>")
            var tim = $("<spam>").html(Data[i].orderTime)
            tim.attr("class", "gray")
            c3.append(tim)
            var c4 = $("<td>").html("$" + Data[i].amount)
            c4.attr("class", "gray")
            var c5 = $("<td>").html(Data[i].orderStatus)
            c5.attr({ class: Data[i].orderStatus })
            r.append(c1, c2, c3, c4, c5);
            $(".tab").append(r)
        }




        $(":checkbox").change(function () {

            var name = $(this).attr("id")
            if (this.checked == false) {
                unchecked(name)

            }
            else {

                checked(name)
            }
        })

        function unchecked(name) {


            for (i = 1; i < row.length; i++) {

                var data = row[i].getElementsByTagName("td")[4];
                if (data.innerText.toUpperCase() == name.toUpperCase()) {
                    row[i].style.display = "none";
                }
                else {
                    ;
                }
            }
            counter(row)
        }
        var row = $(".tab tr")
        function checked(name) {


            for (i = 1; i < row.length; i++) {

                var data = row[i].getElementsByTagName("td")[4];
                if (data.innerText.toUpperCase() == name.toUpperCase()) {
                    row[i].style.display = "";
                }
                else {
                    ;
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