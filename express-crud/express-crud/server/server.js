const EXPRESS = require("express");
const CORS = require("cors");
const CONNECTION = require(`./config/databaseconnection`);
const CARSCHEMA = require(`./model/carschema`);
const APP = EXPRESS();
const PORT = 8080;

APP.use(EXPRESS.json());
APP.use(CORS());

APP.post(`/cardata`, async (request, response) => {
    try {
        const NEW_CAR = new CARSCHEMA(request.body);
        await NEW_CAR.save();
        response.status(200).json(NEW_CAR);

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
})

APP.get(`/cars`, async (request, response) => {
    try {
        const CARS = await CARSCHEMA.find();
        response.status(200).json(CARS);
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
})

APP.delete(`/deletecar/:id`, async (request, response) => {
    try {
        const CAR_ID = request.params.id;
        await CARSCHEMA.deleteOne({ _id: CAR_ID });
        response.send(`User Has Been Deleted Successfully...`);

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
})

APP.patch(`/updatecar/:id`,async(request,response)=>{

    try{ 
        const {carname,carimg} = request.body;
        const CAR_ID = request.params.id;
        await CARSCHEMA.updateOne({_id:CAR_ID}, {$set:{carname:carname, carimg:carimg}})
        response.status(200).json(`Data Has Been Updated Successfully...`);
        
    } catch(error) {

        response.status(400).json({
            message:error.message
        })
    }
})


APP.listen(PORT, async () => {
    console.log(`Server Is Successfully Running At ${PORT}..🍃`);
    await CONNECTION;
});
