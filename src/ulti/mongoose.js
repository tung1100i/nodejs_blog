module.exports = {
    multiOject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    singleOject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};