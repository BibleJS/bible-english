// Dependencies
var test = require("prova")
  , EnBible = require("../index")
  ;

var validVerse = [
    {
        bookname: "Matthew",
        chapter: "1",
        verse: "1",
        text: "This is the record of the genealogy of Jesus Christ, the son of David, the son of Abraham.",
        title: "The Genealogy of Jesus Christ"
    }
];

test("Return proper verse", function (t) {
    t.plan(2);

    // Get verse
    EnBible.getVerse("Matthew 1:1", function (err, data) {
        t.error(err);
        t.same(data, validVerse);
    });
});
