$(document).ready(function () {
    var rowCounter = $('#row-counter');

    $("#order").addClass("green");

    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", function (orderData) {
        for (var i = 0; i < orderData.length; i++) {
            var row = $("<tr>")
            var column1 = $("<td>").html(orderData[i].id)
            column1.attr("class", "gray")
            var column2 = $("<td>").html(orderData[i].customerName)
            var column3 = $("<td>").html(orderData[i].orderDate + "<br>")
            var tim = $("<spam>").html(orderData[i].orderTime)
            tim.attr("class", "gray")
            column3.append(tim)
            var column4 = $("<td>").html("$" + orderData[i].amount)
            column4.attr("class", "gray")
            var column5 = $("<td>").html(orderData[i].orderStatus)
            column5.attr({ class: orderData[i].orderStatus })
            row.append(column1, column2, column3, column4, column5);
            $(".table").append(row)
        }

    });

    var newOrder = $('#new');
    newOrder[0].onchange = function () {
        var userRow = $(".table tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'NEW') {
                    if (newOrder[0].checked == true) {
                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
                    }
                }

            }
            var rowCount = 0;
            for (j = 0; j < userRow.length; j++) {
                if (userRow[j].style.display == 'none') {
                    ;
                }
                else {
                    rowCount++;
                }
            }
            rowCounter.html("count:" + rowCount)
        }
        var rowCount = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.html("count:" + rowCount)
    }
    var packedOrder = $('#packed');
    packedOrder[0].onchange = function () {

        var userRow = $(".table tr");
        for (i = 2; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'PACKED') {
                    if (packedOrder[0].checked == true) {
                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 2; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.html("count:" + rowCount)
    }


    var inTransitOrder = $('#transit');
    inTransitOrder[0].onchange = function () {

        var userRow = $(".table tr");
        for (i = 2; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'INTRANSIT') {
                    if (inTransitOrder[0].checked == true) {
                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 2; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.html("count:" + rowCount)
    }
    var deliveredOrder = $('#delivered');
    deliveredOrder[0].onchange = function () {

        var userRow = $(".table tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'DELIVERED') {
                    if (deliveredOrder[0].checked == true) {
                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 2; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.html("count:" + rowCount)
    }














});
