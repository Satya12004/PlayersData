const { MongoServerClosedError } = require('mongodb');
const Players=require('../Models/Players');
const { default: mongoose } = require('mongoose');

const CreatePlayer =async(req,res)=>{
    const {name, team, country, runs, image, role, salary}=req.body;
    try {
        const Player= await Players.create({
            name, team, country, runs, image, role, salary 
       })
       res.status(200).json({msg:'Palyers data created succesfully'})
    } catch (error) {
       res.status(400).json({msg:'error in creating player data',error:error.message}) 
    }
}

const getPlayer =async(req,res)=>{
    const id=req.params.id;
   if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'Invalid player ID format' });
    }
    try {
        const Playerdata= await Players.findById(id)
        if(Playerdata){
         res.status(200).json({msg:'Palyers data find succesfully',Playerdata})
        }else {
            res.status(404).json({msg:'Player not found'}) 
        }
       
    } catch (error) {
       res.status(400).json({msg:'error in getting player data',error:error.message}) 
    }
}

const UpdatePlayer=async(req,res)=>{
const id=req.params.id
try {
    const Player=await Players.findByIdAndUpdate(id,req.body,{new:true})
     res.status(200).json({msg:'Palyers data update succesfully'})
} catch (error) {
       res.status(400).json({msg:'error in updating player data',error:error.message}) 
    }
}

const DeletePlayer=async(req,res)=>{
const id=req.params.id
try {
    const Player=await Players.findByIdAndDelete(id)
     res.status(200).json({msg:'Palyers data delete succesfully'})
} catch (error) {
       res.status(400).json({msg:'error in deleting player data',error:error.message}) 
    }
}
const listPlayers = async (req, res) => {
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const team = req.query.team;
const filter = {};
  if (team) {
    filter.team = team;
  }
try {
    const total = await Players.countDocuments(filter);
    const players = await Players.find({team})
      .skip((page - 1) * limit)
      .limit(limit)
      .select("name image role team") 
      res.status(200).json({page,limit,total,players});
  } catch (error) {
    res.status(500).json({msg: "Error fetching players",error: error.message,});
  }
};

module.exports={
    CreatePlayer,
    getPlayer,
    UpdatePlayer,
    DeletePlayer,
    listPlayers
}