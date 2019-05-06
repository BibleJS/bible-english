// Dependencies
const  bible = require("..")

bible.getVerse("John 1:1", (err, data) => {
    console.log(err || data)
    // [ { bookname: 'John',
    //     chapter: '1',
    //     verse: '1',
    //     text:
    //      'In the beginning was the Word, and the Word was with God, and the Word was fully God. ',
    //     title: 'The Prologue to the Gospel',
    //     titles: [ 'The Prologue to the Gospel' ] } ]
})
