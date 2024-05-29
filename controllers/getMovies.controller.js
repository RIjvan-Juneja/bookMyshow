const db = require("../models/index");

const getAllMovies = async (req, res) => {
    try {
        let categoryId = 3; // movie category id is 3 
        const movies = await db.Event.findAll({
         include: [
           {
             model: Venue,
             attributes: ['name', 'address', 'city', 'state', 'zipcode'],
           },
           {
             model: EventDateTimeMapping,
             include: [
               {
                 model: DateTime,
                 attributes: ['start', 'end'],
               },
             ],
           },
           {
             model: EventCategoryMapping,
             where: { category_id: categoryId },
           },
         ],
         attributes: ['id', 'name', 'description', 'created_at'],
        });
        res.status(200).send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
    }
}

const cityWiseMovies = async (req, res) => {
    try {
        let zipcode = req.params.zipcode || 0;

        let categoryId = 3; // movie category id is 3 
        const movies = await db.Event.findAll({
            include: [
              {
                model: Venue,
                attributes: ['name', 'address', 'city', 'state', 'zipcode'],
                where: { zipcode: zipcode }, 
              },
              {
                model: EventDateTimeMapping,
                include: [
                  {
                    model: DateTime,
                    attributes: ['start', 'end'],
                  },
                ],
              },
              {
                model: EventCategoryMapping,
                where: { category_id: categoryId },
              },
            ],
            attributes: ['id', 'name', 'description', 'created_at'],
          });
        res.status(200).send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
    }
}

// Filter for events starting after the current time
const nowMovies = async (req, res) => {
    try {
        let categoryId = 3; // movie category id is 3 

        const currentDate = new Date();
        const events = await db.Event.findAll({
          include: [
            {
              model: Venue,
              attributes: ['name', 'address', 'city', 'state', 'zipcode'],
              where: { zipcode: zipcode },
            },
            {
              model: EventDateTimeMapping,
              include: [
                {
                  model: DateTime,
                  attributes: ['start', 'end'],
                  where: {
                    start: {
                      [Op.gt]: currentDate,
                    },
                  }
                },
              ],
            },
            {
              model: EventCategoryMapping,
              where: { category_id: categoryId },
              attributes: [],
            },
          ],
          attributes: ['id', 'name', 'description', 'created_at'],
        });
        res.status(200).send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Internal Server Error", msg: "An unexpected error occurred while processing your request" });
    }
}

module.exports = { getAllMovies, cityWiseMovies, nowMovies };