const db = require("../models/index");
const Venues = db.Venue;

const addVanue = async (req,res) =>{
  try {
    
    const userId = 1;
    // create vanue 
    const obj = {
      user_id : (userId)? userId : null,
      name : (req.body.name)? req.body.name : null,
      address : (req.body.address)? req.body.address : null,
      city : (req.body.city)? req.body.city : null,
      state : (req.body.state)? req.body.state : null,
      zipcode : (req.body.zipcode)? req.body.zipcode : null,
      capacity : (req.body.capacity)? req.body.capacity : null,
    }

    // console.log(db,Venues);
    await Venues.create(obj);
   
    res.status(200).send({status : "ok", msg : "Vanue created Successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchVenues = async (req,res) =>{
  try {
    const userId = 1;
    const venuesData = await Venues.findAll({
      where:{
        user_id: userId 
      }
    });
    res.status(200).send(venuesData);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const updateVanue = async (req,res) =>{
  try {

    const userId = 1;
    const checkHasVanue = await Venues.findAll({
      where:{
        id:req.params.id,
        user_id : userId
      }
    });
    console.log(checkHasVanue);
    if(checkHasVanue.length > 0){
      const obj = {
        user_id : (req.body.user_id)? req.body.user_id : 0,
        name : (req.body.name)? req.body.name : null,
        address : (req.body.address)? req.body.address : null,
        city : (req.body.city)? req.body.city : null,
        state : (req.body.state)? req.body.state : null,
        zipcode : (req.body.zipcode)? req.body.zipcode : null,
        capacity : (req.body.capacity)? req.body.capacity : null,
      }
      await Venues.update(obj,
        {
          where: {
            id:req.params.id
          },
        },
      );
      res.status(200).send({status : "ok", msg : "User updated Successfully"});
    } else {
      res.status(500).send({status : "Data Not Found", msg : "An unexpected error occurred while processing your request"});
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

module.exports = { addVanue ,fetchVenues ,updateVanue}