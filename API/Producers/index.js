const Router = require("express").Router;
const ProducerModel = require(/../Database/producers);

Router.post("/create/producer", async(req,res) => {
    try{
         const newProducer = req.body.newProducer;
         const addNewProducer = await ProducerModel.create(newProducer);
         return res.json({Producers: addNewProducer, message:"Producer data added"})

    } catch(error) {
        return res.json({error: error.message});
    }
});

Router.get("/get/producer", async(req,res) =>{
const getallProducers = await ProducerModel.find();
return res.json({Producer: getallProducers});
});

Router.get("/get_one/:producer_id", async(req,res) =>{
    const getoneProducer = await ProducerModel.findOne(
        {
            producer_id : req.params.producer_id,
        }
    );
    return res.json({Producer : getoneProducer});
});

Router.put("/update/:producer_id", async(req,res) =>{
const updateProducer = await ProducerModel.findOneAndUpdate(
    {
        producer_id : req.params.producer_id,
    },
    {
        name : req.body.producername,
    }
);
return res.json({Producer: updateProducer, message: "Name has been changed"});
});

Router.delete("/delete/:producer_id", async(req,res) =>{
    const deleteProducer = await ProducerModel.findOneAndDelete(
        {
            producer_id: req.params.producer_id,
        }
    );
    return res.json({Producer: deleteProducer, message: "Successfully deleted"});
});

module.exports = Router;
