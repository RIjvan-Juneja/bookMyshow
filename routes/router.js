const express = require("express");
const router = express.Router();
const userCrud = require("../controllers/userCrud");
const vanueCrud = require("../controllers/vanueCrud");


router.get('/',(req,res)=>{
    res.send("Home Page");
})

//  ==================== user CRUD  ===================== // 
router.get('/addUser',userCrud.createUser);
router.get('/fetchUsers',userCrud.fetchUsers);
router.get('/fetchUser/:id',userCrud.fetchUser);
router.get('/updateUser/:id',userCrud.updateUser);

//  ==================== Vanues CRUD  ===================== // 
router.get('/addVanue',vanueCrud.addVanue);
router.get('/fetchVanues',vanueCrud.fetchVenues);
router.get('/updateVanue/:id',vanueCrud.updateVanue);


module.exports = router;