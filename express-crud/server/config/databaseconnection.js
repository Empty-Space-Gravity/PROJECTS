const MONGOOSE = require(`mongoose`);
const CONNECTION = MONGOOSE.connect(`mongodb://localhost:27017/Grav_Base`)
.then(()=>console.log(`The DataBase Is Running Successfully...💠`))
.catch((error)=>console.log(`There Was An Error...${error}♦️`));

module.exports = CONNECTION;
