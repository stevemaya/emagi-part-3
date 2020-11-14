const emojis = require('./emojis.js');

const getCategory = function(category) {
    const result = emojis.filter(function(emoji) {
        if (emoji.categories.includes(category)) {
            return emoji; 
        }
    })
    return result;
}

module.exports = getCategory;