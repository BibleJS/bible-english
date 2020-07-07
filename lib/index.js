"use strict"

const request = require("jsonrequest")

// Constants
const PROVIDER = "http://labs.bible.org/api/?type=json&passage="

module.exports = class BibleEnglish {
    /**
     * getVerse
     * Gets the reference using labs.bible.org provider.
     *
     * @name getVerse
     * @function
     * @param {String} reference Bible verse reference
     * @param {Function} callback The callback function
     * @return
     */
    static getVerse (reference, callback) {
        if (this.reference) {
            reference = this.reference
        }
        return request(PROVIDER + reference, (err, body, res) => {
            if (err || res.statusCode !== 200) {
                return callback(err || body.message);
            }
            callback(null, body);
        });
    }
}

