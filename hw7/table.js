/*
    Taren Chen
    HW7
    CS UserName: tchen1
    This is the javascript file for the multi table using jquery ui for slider and tabs.

    passed JS Validator
*/

function makeTable() {
    // Clears table and errors
    var minX = parseInt(document.getElementById("minRows").value);
    var maxX = parseInt(document.getElementById("maxRows").value);
    var minY = parseInt(document.getElementById("minColumns").value);
    var maxY = parseInt(document.getElementById("maxColumns").value);
    console.log("The min X is: " + minX +
        "\nThe max X is: " + maxX +
        "\nThe min Y is: " + minY +
        "\nThe max Y is: " + maxY);

    var table = createTable(minX, maxX, minY, maxY);
    document.getElementById("generateTable").innerHTML = table;
    return table;
}
function createTable(minX, maxX, minY, maxY) {
    var table = "";
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

    // Display the table
    return table;
}

// jQuery Validation
$(document).ready(function () {
    //Make sure the min < max for rows
    $.validator.addMethod("rowMaxValid", function (value, param) {
        if (parseInt($("#maxRows").val()) < parseInt($("#minRows").val())) {
            return false;
        }
        else {
            return true;
        }
    });
    // Make sure the min < max for columns
    $.validator.addMethod("colMaxValid", function (value, param) {
        if (parseInt($("#maxColumns").val()) < parseInt($("#minColumns").val())) {
            return false;
        }
        else {
            return true;
        }
    });
    // No decimals
    $.validator.addMethod("noDecimal", function (value, element) {
        return !(value % 1);
    }, "No decimal numbers");

    $("#multiForm").validate({
        /*
        Rules for the validations
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
                noDecimal: true,
                min: -50,
                max: 50
            },
            maxRows: {
                required: true,
                number: true,
                noDecimal: true,
                min: -50,
                max: 50,
                rowMaxValid: "#minRows"
            },
            minColumns: {
                required: true,
                number: true,
                noDecimal: true,
                min: -50,
                max: 50
            },
            maxColumns: {
                required: true,
                number: true,
                noDecimal: true,
                min: -50,
                max: 50,
                colMaxValid: "#minColumns"
            }
        },
        //What to display as error messages. Using built in msgs for other rules.
        messages: {
            maxRows: {
                rowMaxValid: "Max Row can not be less than Min Row"
            },
            maxColumns: {
                colMaxValid: "Max Col can not be less than Min Col"
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
        submitHandler: function (form, e) {
            e.preventDefault();
            makeTable();
        }
    })
});

/* 
update form number using the slider as well as call makeTable function
Also has validation for sliders
*/
$(function () {
    $("#sliderMinRows").slider({
        min: -50,
        max: 50,
        range: [-50, 50],
        value: 0,
        slide: function (event, ui) {
            $("#minRows").val(ui.value);
            if ($("#multiForm").valid()) {
                makeTable();
            }
        }
    });
    $("#minRows").val($("#sliderMinRows").slider("value"));
});

$(function () {
    $("#sliderMaxRows").slider({
        min: -50,
        max: 50,
        range: [-50, 50],
        value: 0,
        slide: function (event, ui) {
            $("#maxRows").val(ui.value);
            if ($("#multiForm").valid()) {
                makeTable();
            }
        }
    });
    $("#maxRows").val($("#sliderMaxRows").slider("value"));
});
$(function () {
    $("#sliderMinColumns").slider({
        min: -50,
        max: 50,
        range: [-50, 50],
        value: 0,
        slide: function (event, ui) {
            $("#minColumns").val(ui.value);
            if ($("#multiForm").valid()) {
                makeTable();
            }
        }
    });
    $("#minColumns").val($("#sliderMinColumns").slider("value"));
});
$(function () {
    $("#sliderMaxColumns").slider({
        min: -50,
        max: 50,
        range: [-50, 50],
        value: 0,
        slide: function (event, ui) {
            $("#maxColumns").val(ui.value);
            if ($("#multiForm").valid()) {
                makeTable();
            }
        }
    });
    $("#maxColumns").val($("#sliderMaxColumns").slider("value"));
});

/* update slider position using the form then calls makeTable function */
$("#minRows").change(function () {
    var value = this.value;
    $("#sliderMinRows").slider("value", parseInt(value));
    makeTable();
});

$("#maxRows").change(function () {
    var value = this.value;
    $("#sliderMaxRows").slider("value", parseInt(value));
    makeTable();
});

$("#minColumns").change(function () {
    var value = this.value;
    $("#sliderMinColumns").slider("value", parseInt(value));
    makeTable();
});

$("#maxColumns").change(function () {
    var value = this.value;
    $("#sliderMaxColumns").slider("value", parseInt(value));
    makeTable();
});

/* jQuery for tabs section */
$(function () {
    $("#tabs").tabs();
});

/* Function that saves the current table into a tab */
function addTab() {
    if ($("#multiForm").valid()) {
        var minX = parseInt(document.getElementById("minRows").value);
        var maxX = parseInt(document.getElementById("maxRows").value);
        var minY = parseInt(document.getElementById("minColumns").value);
        var maxY = parseInt(document.getElementById("maxColumns").value);
        var count = $("#tabs li").length + 1;
        /* got span class from jQuery tabs documentation */
        var list = `<li><input type="checkbox"><a href='#tab${count}'</a>Rows: ${minX}-${maxX} <br> Columns: ${minY}-${maxY}<br><br><span class='ui-icon ui-icon-close'role='presentation'>Remove Tab</span></li>`;
        $("div#tabs ul").append(list);
        console.log(makeTable());
        $("div#tabs").append('<div id="tab' + count + '">' + "<table>" + makeTable() + "</table" + '</div>');
        $("#tabs").tabs("refresh");
        $("#tabs").tabs("option", "active", -1);
    }
    else {
        console.log("table not valid");
    }

    /* 
    Got this from jQuery tabs documentation 
    remove individual tags
    */
    $("#tabs").delegate("span.ui-icon-close", "click", function () {
        var panelID = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelID).remove();
        $("#tabs").tabs("refresh");
    });

}
/* Function to remove all tabs */
function removeAllTabs() {
    $("#tabs ul li").each(function () {
        var panelID = $(this).attr("aria-controls");
        console.log(panelID);
        console.log($(this).attr("tabCheckBox"));
        $(this).remove()
        $("#" + panelID).remove();
        $("#tabs").tabs("refresh");
    });
}
/* Function that removes the selected checkbox tabs */
function removeSelectedTabs() {
    $("#tabs ul li").each(function () {
        var panelID = $(this).attr("aria-controls");
        console.log(panelID);
        console.log($(this).attr("tabCheckBox"));
        if ($(this).find('input').prop("checked")) {
            $(this).remove()
            $("#" + panelID).remove();
            $("#tabs").tabs("refresh");
        }
    });
}