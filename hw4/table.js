function makeTable(){
    var minX = document.getElementById("minRows").value;
    var maxX = document.getElementById("maxRows").value;
    var minY = document.getElementById("minColumns").value;
    var maxY = document.getElementById("maxColumns").value;
    window.alert("The min X is: " + minX + 
                "\nThe max X is: " + maxX + 
                "\nThe min Y is: " + minY +
                "\nThe max Y is: " + maxY);
}
