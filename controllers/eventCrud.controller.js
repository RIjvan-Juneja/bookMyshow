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
    res.status(200).send({status : "ok", msg : "Event created Successfully"});
  } catch (err) {
    await t.rollback();
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const updateEvent = async (req,res) =>{
  const t = await db.sequelize.transaction();

  try {

    const userId = 1;  

    const checkHasEvent = await Event.findAll({
      where:{
        id: req.params.id,
        user_id : userId
      }
    });
    if(checkHasEvent.length > 0){
      
      const eventUpdateData = {
        user_id : (userId)? userId : null,
        vanue_id : (req.body.vanue_id)? req.body.vanue_id : null,
        name : (req.body.name)? req.body.name : null,
        description : (req.body.description)? req.body.description : null
      }

      await db.Event.update(eventUpdateData,
        {
          where: {
            id:req.body.event_id
          },
        },
        { transaction: t }
      );
      await db.EventCategoryMapping.update({category_id : req.body.category_id },
        {
          where: {
            id:req.body.ecm_id
          },
        },
        { transaction: t }
      );
      await db.EventDateTimeMapping.create({date_id : req.body.edt_id },
        {
          where: {
            id:req.body.edt_id
          }
        },
        { transaction: t }
      );

      await t.commit();
      res.status(200).send({status : "ok", msg : "Event updated Successfully"});
    } else {
      res.status(500).send({status : "Data Not Found", msg : "An unexpected error occurred while processing your request"});
    }
    
  } catch (err) {
    await t.rollback();
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

module.exports = { addEvent ,updateEvent}