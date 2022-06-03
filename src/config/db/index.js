const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog1_dev');
        console.log('OK');
    } catch (error) {
        console.log('FALSE')
    }
}


module.exports = { connect };