const db = require("../models/index");

const bookSeat = async (req,res) =>{
  const t = await db.sequelize.transaction();
  try {
    
    let payment = true;  // if your Successfully completed the transaction  (fetch from backend but table not created yet)
    const userId = 1;
    const bookingData = {
      user_id : (userId)? userId : null,
      event_id : (req.body.event_id)? req.body.event_id : null,
      seat_number : (req.body.seat_number)? req.body.seat_number : [],
      edt_id : (req.body.edt_id)? req.body.edt_id : null,
      status : payment ? 'success' : null
    }
    
    let seats = req.body.seat_number; // array of seat numbers
    const filePromises = seats.map(seat => {
      bookingData[seat_number] = seat;
      return db.Booking.create(bookingData, { transaction: t });
    });
    
    await Promise.all(filePromises);
    
    await t.commit();
    res.status(200).send({status : "ok", msg : "Seat Booked successfully "});
  } catch (err) {
    await t.rollback();
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}



module.exports = { bookSeat }