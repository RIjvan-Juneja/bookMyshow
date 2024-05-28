const db = require("../models/index");
const Users = db.User;

const createUser = async (req,res) =>{
  try {
    
    await Users.create(req.body);
    // {
    //   role_id : 3,
    //   first_name : "Jeel",
    //   last_name : "patel",
    //   gender : "male",
    //   email : "as ",
    //   mobile_number : "0000000000",
    //   salt : "sf",
    //   password_hash : "sdgerg",
    //   address : "dhasikfh",
    //   zipcode : "123456",
    //   state : "bhavnagar",
    //   city : "talaja"
    // }
    res.status(200).send({status : "ok", msg : "User created Successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchUsers = async (req,res) =>{
  try {
    const users = await Users.findAll({});
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchUser = async (req,res) =>{
  try {
    const users = await Users.findOne({
      where:{
        id:req.params.id
      }
    });
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const updateUser = async (req,res) =>{
  try {
    // Change everyone without a last name to "Doe"
    await Users.update(req.body,
      {
        where: {
          id:req.params.id
        },
      },
    );
    res.status(200).send({status : "ok", msg : "User updated Successfully"});

  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

module.exports = { createUser ,fetchUsers ,fetchUser ,updateUser}