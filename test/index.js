// Dependencies
const test = require("tester")
    , bible = require("..")

const validVerse = [
    {
        bookname: 'Matthew',
        chapter: '1',
        verse: '1',
        text: 'This is the record of the genealogy of Jesus Christ, the son of David, the son of Abraham. ',
        title: 'The Genealogy of Jesus Christ',
        titles: [ 'The Genealogy of Jesus Christ' ]
    }
]

test.describe("Return proper verse", t => {
    t.should("return the proper verse", cb => {
        bible.getVerse("Matthew 1:1", (err, data) => {
            t.expect(err).toBe(null)
            t.expect(data).toEqual(validVerse)
            cb()
        })
    })
})
