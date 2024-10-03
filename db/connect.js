const mongoose = require('mongoose')


const conncetedDB = (url) => {
    mongoose.connect(url)

}

module.exports = conncetedDB
