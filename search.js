const emojis = require('./emojis.js');


const searchString = function (names) {
    const search = emojis.filter(function(emoji) {
        if (emoji.name.includes(names.toLowerCase())) {
            return emoji;
        }

    })
    return search;
}



module.exports = searchString;