const express = require("express");
const router = express.Router();

const userCrud = require("../controllers/userCrud.controller");
const vanueCrud = require("../controllers/vanueCrud.controller");
const eventCrud = require("../controllers/eventCrud.controller");
const movie = require("../controllers/getMovies.controller");
const Booking = require("../controllers/bookTicket.controller");

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

router.post('/bookTicket',Booking.bookSeat);


module.exports = router;