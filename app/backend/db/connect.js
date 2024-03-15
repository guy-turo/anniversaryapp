const mongoose = require('mongoose')

const connectDB = async(uri) => {
    try {
        await mongoose.connect(uri, {})
            .then((e) => console.log(`connected db`))
            .catch((e) => console.error(e.message))
    } catch (error) {
        return console.error(`error message ${error.message}`)
    }
}

module.exports = { connectDB }