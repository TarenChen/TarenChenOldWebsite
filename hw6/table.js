/*
    Taren Chen
    HW6 
    CS UserName: tchen1
    This is the javascript file for the multi table using jquery as validation

    passed JS Validator
*/

function makeTable() {
    //Clears table and errors
    var minX = parseInt(document.getElementById("minRows").value);
    var maxX = parseInt(document.getElementById("maxRows").value);
    var minY = parseInt(document.getElementById("minColumns").value);
    var maxY = parseInt(document.getElementById("maxColumns").value);
    console.log("The min X is: " + minX +
        "\nThe max X is: " + maxX +
        "\nThe min Y is: " + minY +
        "\nThe max Y is: " + maxY);

    //In case min > max
    // var swapMsg = "";
    // if(minX > maxX || minY > maxY){
    //     if(minX > maxX){
    //         [minX, maxX] = [maxX, minX];
    //         swapMsg += "Swapped Min Row value with Max Row value because Min Row can not be greater than Max Row. <br>";
    //     }
    //     if(minY > maxY){
    //         [minY, maxY] = [maxY, minY];
    //         swapMsg += "Swapped Min Col value with Max Col value because Min Col can not be greater than Max Col."
    //     }
    // }
    // if(swapMsg){
    //     document.getElementById("swapXY").innerHTML = swapMsg;
    // }
    createTable(minX, maxX, minY, maxY);
}
function createTable(minX, maxX, minY, maxY){
    var table = ""
    document.getElementById("generateTable").innerHTML = table;

    // Math for the table, simply adding HTML code together with correct values
    for (var row = minX - 1; row <= maxX; row++) {
        table += "<tr>";
        if (row == minX - 1) {
            table += "<td></td>";
            for (var col = minY; col <= maxY; col++) {
                table += "<td>" + col + "</td>";
            }
        }
        else {
            table += "<td>" + row + "</td>";
            for (col = minY; col <= maxY; col++) {
                table += "<td>" + row * col + "</td>";
            }
        }
        table += "</tr>";
    }

    //Display the table
    document.getElementById("generateTable").innerHTML = table;
}

//jQuery Validation
$(document).ready(function () {
    //Make sure the min < max for rows
    $.validator.addMethod("rowMaxValid", function(value, param) {
        if (parseInt($("#maxRows").val()) < parseInt($("#minRows").val())){
          return false;
        }
        else{
          return true;
        }
    });
    //Make sure the min < max for columns
    $.validator.addMethod("colMaxValid", function(value, param) {
        if (parseInt($("#maxColumns").val()) < parseInt($("#minColumns").val())){
          return false;
        }
        else{
          return true;
        }
    });
    $("#multiForm").validate({
        //Rules for the validations
        /*
        required: must have something in field
        number: has to be a number
        min: minimum number
        max: maximum number
        rowMaxValid: make sure min < max
        */
        rules: {
            minRows: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxRows: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                rowMaxValid: "#minRows"
            },
            minColumns: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxColumns: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                colMaxValid: "#minColumns"
            }
        },
        //What to display as error messages. Using built in msgs for other rules.
        messages: {
            maxRows: {
                rowMaxValid: "Max Row can not be less than Max Row"
            },
            maxColumns: {
                colMaxValid: "Max Col can not be less than Max Col"
            }
        },
        // changing the styling for inputs that don't pass validation
        highlight: function (element) {
            $(element).addClass('error');
        }, 
        unhighlight: function (element) {
            $(element).removeClass('error');
        },
        //submit calls the makeTable function
        submitHandler: function(form, e){
            e.preventDefault();
            makeTable();
        }
    })
});
