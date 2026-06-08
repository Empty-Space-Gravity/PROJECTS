const MONGOOSE = require(`mongoose`);
const CAR_SCHEMA = MONGOOSE.Schema({

    carname:String,
    carimg:String
})

module.exports = MONGOOSE.model(`car`,CAR_SCHEMA);
