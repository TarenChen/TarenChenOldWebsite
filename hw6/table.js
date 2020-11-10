/*
    Taren Chen
    HW6 
    CS UserName: tchen1
    This is the javascript file for the multi table using jquery as validation

    passed JS Validator
*/

function makeTable() {
    //Clears table and errors
    var table = ""
    var errorMsg = ""
    document.getElementById("errors").innerHTML = errorMsg;
    document.getElementById("generateTable").innerHTML = table;

    var minX = parseInt(document.getElementById("minRows").value);
    var maxX = parseInt(document.getElementById("maxRows").value);
    var minY = parseInt(document.getElementById("minColumns").value);
    var maxY = parseInt(document.getElementById("maxColumns").value);
    console.log("The min X is: " + minX +
        "\nThe max X is: " + maxX +
        "\nThe min Y is: " + minY +
        "\nThe max Y is: " + maxY);

    //Error cases
    if (!Number.isInteger(minX) || !Number.isInteger(maxX) || !Number.isInteger(minY) || !Number.isInteger(maxY)) {
        var error = "Make sure your inputs are integers."
        errorMsg += error;
        errorMsg += "<br>";
    }
    if (minX > maxX) { // Min is bigger then Max
        var error1 = "The minimum row is bigger then the maximum row.";
        errorMsg += error1;
        errorMsg += "<br>";
    }
    if (minY > maxY) { // Min is bigger then Max
        var error2 = "The minimum column is bigger then the maximum column.";
        errorMsg += error2;
        errorMsg += "<br>";
    }
    if (minX < -50 || minY < -50 || maxX > 50 || maxY > 50) { // Bounds
        var error3 = "Please keep the values between -50 to 50.";
        errorMsg += error3;
        errorMsg += "<br>";
    }
    if (errorMsg != "") { //Stop the table from generating if Error is found
        return;
    }

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

$(function validateInputs() {


    $.validator.addMethod("greaterThan", function (value, element, param) {
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-greaterThan-blur").length) {
            target.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan", function () {
                $(element).valid();
            });
        }
        return value >= target.val();
    });
    $.validator.addMethod("lessThan", function (value, element, param) {
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-lessThan-blur").length) {
            target.addClass("validate-lessThan-blur").on("blur.validate-lessThan", function () {
                $(element).valid();
            });
        }
        return value <= target.val();
    });
    $("#multiForm").validate({
        rules: {
            minRows: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThan: "#maxRows"
            },
            maxRows: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan: "#minRows"
            },
            minColumns: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                lessThan: "#maxColumns"
            },
            maxColumns: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                greaterThan: "#minColumns"
            }
        },
        messages: {
            minRows: {
                lessThan: "This field can not be more than maxRows"
            },
            maxRows: {
                greaterThan: "This field can not be less then minRows"
            },
            minColumns: {
                lessThan: "This field can not be more than maxColumns"
            },
            maxColumns: {
                greaterThan: "This field can not be less then minColumns"
            }
        },
        highlight: function (element) {
            $(element).addClass('error');
        }, unhighlight: function (element) {
            $(element).removeClass('error');
        }
    })
});
