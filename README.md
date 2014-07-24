# bible-english
NodeJS wrapper for labs.bible.org API.

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:BibleJS/bible-english.git bible-english
$ cd bible-english
$ npm install
```

## Example

```js
// Dependencies
var EnBible = require("../index");

// Get verse
EnBible.getVerse("Matthew 1:1", function (err, data) {
    console.log(err || data);
});
```

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
