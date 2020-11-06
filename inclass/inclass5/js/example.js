// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];
var item1 = document.createElement("li");
item1.appendChild(document.createTextNode("cream"));
ul.appendChild(item1);
// ADD NEW ITEM START OF LIST
var item2 = document.createElement("li");
item2.appendChild(document.createTextNode("kale"));
ul.prepend(item2);
// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
    items[i].classList.add("cool");
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
numItems = items.length;
document.getElementsByTagName("h2")[0].innerHTML += "<span>" + numItems +
    "</span>";