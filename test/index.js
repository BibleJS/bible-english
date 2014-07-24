// Dependencies
var EnBible = require("../index");

// Get verse
EnBible.getVerse("Matthew 1:1", function (err, data) {
    console.log(err || data);
});
