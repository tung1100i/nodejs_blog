const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema({

    name: { type: String, required: true },
    des: { type: String, maxlength: 600 },
    link: { type: String, maxlength: 600 },
    img: { type: String, maxlength: 255 },
    VideoID: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name' }
}, { timestamps: true });

module.exports = mongoose.model('Course', Course);