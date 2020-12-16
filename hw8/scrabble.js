/* I took the data structure and modified it by adding "letter" and "img" for me to use later. */
var data = []
data["A"] = { "letter": "A", "value": 1, "amount": 9, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_A.jpg'>" }
data["B"] = { "letter": "B", "value": 3, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_B.jpg'>" }
data["C"] = { "letter": "C", "value": 3, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_C.jpg'>" }
data["D"] = { "letter": "D", "value": 2, "amount": 4, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_D.jpg'>" }
data["E"] = { "letter": "E", "value": 1, "amount": 12, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_E.jpg'>" }
data["F"] = { "letter": "F", "value": 4, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_F.jpg'>" }
data["G"] = { "letter": "G", "value": 2, "amount": 3, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_G.jpg'>" }
data["H"] = { "letter": "H", "value": 4, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_H.jpg'>" }
data["I"] = { "letter": "I", "value": 1, "amount": 9, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_I.jpg'>" }
data["J"] = { "letter": "J", "value": 8, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_J.jpg'>" }
data["K"] = { "letter": "K", "value": 5, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_K.jpg'>" }
data["L"] = { "letter": "L", "value": 1, "amount": 4, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_L.jpg'>" }
data["M"] = { "letter": "M", "value": 3, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_M.jpg'>" }
data["N"] = { "letter": "N", "value": 1, "amount": 6, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_N.jpg'>" }
data["O"] = { "letter": "O", "value": 1, "amount": 8, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_O.jpg'>" }
data["P"] = { "letter": "P", "value": 3, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_P.jpg'>" }
data["Q"] = { "letter": "Q", "value": 10, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_Q.jpg'>" }
data["R"] = { "letter": "R", "value": 1, "amount": 6, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_R.jpg'>" }
data["S"] = { "letter": "S", "value": 1, "amount": 4, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_S.jpg'>" }
data["T"] = { "letter": "T", "value": 1, "amount": 6, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_T.jpg'>" }
data["U"] = { "letter": "U", "value": 1, "amount": 4, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_U.jpg'>" }
data["V"] = { "letter": "V", "value": 4, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_V.jpg'>" }
data["W"] = { "letter": "W", "value": 4, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_W.jpg'>" }
data["X"] = { "letter": "X", "value": 8, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_X.jpg'>" }
data["Y"] = { "letter": "Y", "value": 4, "amount": 2, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_Y.jpg'>" }
data["Z"] = { "letter": "Z", "value": 10, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_Z.jpg'>" }
data["_"] = { "letter": "_", "value": 0, "amount": 1, "img": "<img src='./pictures/Scrabble_Tiles/Scrabble_Tile_Blank.jpg'>" }


/* Make a copy so it doesn't change the default data when we need to see the values */
var tiles = Object.assign({}, data)

/* declared global variables, these are the ones we use to display our values in the website */
var totalTiles = 100;
var index = 0;
var score = 0;
var word = "";

/* 
This function generates the tiles randomly, and subtracts from our total as well as copy of the data structure. 
When we use all the copies of a certain letter it will remove it from our temp data structure.
When we run out of tiles, it will notify the user to finish using the tiles left and then restart the game.
*/
function generateTiles(numTiles) {
    for (var i = 0; i < numTiles; i++) {
        randomLetter = randomProperty(tiles)["letter"]
        console.log(randomLetter)
        randomTile = tiles[randomLetter]["img"]
        tiles[randomLetter]['amount'] -= 1
        if (tiles[randomLetter]['amount'] == 0) {
            delete tiles[randomLetter];
        }
        if (totalTiles == 0) {
            $("#outOfTiles").html("You may use the rest of the tiles left, then must restart the game to continue playing!");
            return;
        }
        $("#rack ul").append("<li id='" + randomLetter + "'>" + randomTile + "</li > ");
        totalTiles = totalTiles - 1;
    }
}
/*
https://jqueryui.com/droppable/#revert
https://stackoverflow.com/questions/5735270/revert-a-jquery-draggable-object-back-to-its-original-container-on-out-event-of/5848800#5848800
https://stackoverflow.com/questions/26746823/jquery-ui-drag-and-drop-snap-to-center/26764579#26764579

This function makes the first block droppable until something is dropped on it then it will make the next one droppable. 
*/
function setUp() {
    remainingTiles();
    $("#board li").droppable();
    $("#drop" + '0').droppable('enable')
    for (var i = 1; i < 7; i++) {
        $("#drop" + i).droppable('disable')
    }
    $('#rack li').droppable('disable');
    /* bounce back to rack if placed somewhere it's not suppose to be */
    $("#rack li").draggable({
        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0,
            };
            return !event;
        }
    });
}
/* lets the tiles in the rack all be draggable */
$(function () {
    $("#rack li").draggable({
        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0,
            };
            return !event;
        }
    });
    /* this handles the drop event, when a tile is dropped it will add the correct points as well as make it no longer draggable */
    $("#board li").droppable({
        drop: function (event, ui) {
            $("#drop" + index).droppable('disable');
            index += 1;
            $("#drop" + index).droppable('enable');
            var $this = $(this);
            console.log(this)
            var draggable = ui.draggable;
            ui.draggable.draggable({ disabled: true });
            letter = draggable.attr('id')
            displayWord(letter)
            var points = data[letter]['value'];
            updateScore(points);
            console.log(data[letter])
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $this,
                using: function (pos) {
                    $(this).animate(pos, 200, "linear");
                }
            });

        }
    });
});

/* update the current score when called */
function updateScore(points) {
    if (index == 2 || index == 5) {
        points = points * 2;
    }
    score += points;
    $("#score").html("Score: " + score);
}

/* update the current word when called */
function displayWord(letter) {
    word = word + letter;
    $("#word").html("Word: " + word);
}

/* update the remaining tiles count when called */
function remainingTiles() {
    $("#remainingTiles").html("Remaining Tiles: " + totalTiles);
}

/* refresh the board by deleting the classes that had draggable disabled, then setup for the next round. */
function submitWord() {
    index = 0;
    /*https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom*/
    document.querySelectorAll('.ui-draggable-disabled').forEach(e => e.remove());
    generateTiles(word.length);
    setUp();
    word = ""
    $("#word").html("Word: " + word);
}

/* restart the game by reloading the page refreshing all the data */
function restartGame() {
    window.location.reload();
}

/* 
Get random Property from Object
Got from Stackoverflow https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
*/
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};


/* main function / starting the game */

generateTiles(7);
setUp();

