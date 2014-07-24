// Dependencies
var EnBible = require("../index");

// Get verse
EnBible.getVerse("Mattew 1:1", function (err, data) {
    console.log(err || data);
});
