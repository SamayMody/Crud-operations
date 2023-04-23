const Router = require("express").Router();
const DirectorModel = require(/../Database/directors) 

Router.post("/create/director", async (req,res) => {
    try{
    const newDirector = req.body.newDirector;
    const addNewDirector = await DirectorModel.create(newDirector);
    
    return res.json({Directors: addNewDirector , message:"director is added"});
} catch(error){
    return res.json({error: error.message});
}
});

Router.get("/get/director", async (req,res) => {
    const getalldirectors = await DirectorModel.find();
    return res.json({Directors: getalldirectors} );
 });

 Router.get("/get_one/:director_id", async(res,req) =>{
    const getoneDirector = await DirectorModel.findOne(
        {
            director_id : req.params.director_id,
        }
    );
    return res.json({Director : getoneDirector});
});

Router.put("/update/:director_id", async (req,res)=>{
    const updateDirector = await DirectorModel.findOneAndUpdate(
    {
        director_id: req.params.director_id,
    },
    {
        name: req.body.directorname,
    }
    );
    return res.json({Director: updateDirector, message:"Director name is updated"});
});

Router.delete("delete/:director_id", async(req,res) => {
    const deleteDirector = await DirectorModel.findOneAndDelete(
        {
          director_id: req.params.director_id,  
        }
    );
    return res.json({Director: deleteDirector, message:"Data deleted successfully"});
});

module.exports = Router;


