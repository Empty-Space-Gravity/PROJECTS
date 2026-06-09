const mongoose = require("mongoose");


if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing");
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("The DataBase Is Running Successfully...💠"))
    .catch((err) => console.log(err));