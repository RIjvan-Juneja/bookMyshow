const express = require("express");
const router = express.Router();

const userCrud = require("../controllers/userCrud");
const vanueCrud = require("../controllers/vanueCrud");
const eventCrud = require("../controllers/eventCrud");
const movie = require("../controllers/getMovies");

router.get('/',(req,res)=>{
    res.send("Home Page");
})

//  ==================== user ===================== // 
router.post('/addUser',userCrud.createUser);
router.get('/fetchUsers',userCrud.fetchUsers);
router.get('/fetchUser/:id',userCrud.fetchUser);
router.post('/updateUser/:id',userCrud.updateUser);

//  ==================== Vanue ===================== // 
router.post('/addVanue',vanueCrud.addVanue);
router.get('/fetchVanues',vanueCrud.fetchVenues);
router.post('/updateVanue/:id',vanueCrud.updateVanue);

//  ==================== events ===================== // 
router.post('/addEvent',eventCrud.addEvent);
router.post('/updateEvent/:id',eventCrud.updateEvent);

//  ==================== Movies ===================== // 
router.get('/getAllMovies',movie.getAllMovies);
router.get('/cityWiseMovies',movie.cityWiseMovies);
router.get('/nowMovies',movie.nowMovies);

module.exports = router;