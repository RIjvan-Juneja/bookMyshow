const db = require("../models/index");

const addEvent = async (req,res) =>{
  const t = await db.sequelize.transaction();
  try {
    
    const userId = 1;
    const eventData = {
      user_id : (userId)? userId : null,
      vanue_id : (req.body.vanue_id)? req.body.vanue_id : null,
      name : (req.body.name)? req.body.name : null,
      description : (req.body.description)? req.body.description : null
    }
    const eventInsert = await db.Event.create(eventData,{ transaction: t });
    await db.EventCategoryMapping.create({event_id : eventInsert.id , category_id : req.body.category_id },{ transaction: t });
    await db.EventDateTimeMapping.create({event_id : eventInsert.id , date_id : req.body.edt_id },{ transaction: t });
    
    let files = req.body.files;
    const filePromises = files.map(file => {
      return db.EventAttachment.create({ event_id : eventInsert.id , attachment_path : file.filename, file_type : file.mimetype  }, { transaction: t });
    });
    
    await Promise.all(filePromises);
    
    await t.commit();
    res.status(200).send({status : "ok", msg : "Vanue created Successfully"});
  } catch (err) {
    await t.rollback();
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchEvent = async (req,res) =>{
  try {
    const userId = 1;
    const EventData = await Event.findAll({
      where:{
        user_id: userId 
      }
    });
    res.status(200).send(EventData);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const updateVanue = async (req,res) =>{
  try {

    const userId = 1;
    const checkHasVanue = await Event.findAll({
      where:{
        id:req.params.id,
        user_id : userId
      }
    });
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
      await Event.update(obj,
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

module.exports = { addVanue ,fetchEvent ,updateVanue}