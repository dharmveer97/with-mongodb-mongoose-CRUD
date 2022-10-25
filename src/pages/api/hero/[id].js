import dbConnect from '../../../db/dbconnect';

import Hero from '../../../modals/Hero';

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case 'GET':
      try {
        const heros = await Hero.findById(id);

        if (!heros) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }

      break;
    case 'PUT':
      try {
        const heros = Hero.findByIdAndUpdate(id, req.body, function (err) {
          if (err) {
            console.log(err);
          }
        });
        if (!heros) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const hero = Hero.deleteOne({ _id: id })
          .then(function () {
            console.log('Data deleted'); // Success
          })
          .catch(function (error) {
            console.log(error); // Failure
          });

        // const hero = Hero.deleteOne({ _id: id });
        if (!hero) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
