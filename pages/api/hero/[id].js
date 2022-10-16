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
        const hero = Hero.findById(id);
        if (!hero) {
          res.status(400).json({ success: false , message: error.message|| "Failed to find hero"});
        }
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message|| "Failed" });
      }

      break;

    // case 'PUT':
    //   try {
    //     const hero = Hero.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //       runValidators: true,
    //     });
    //     if (!hero) {
    //       res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, hero: heros });
    //   } catch (error) {
    //     res.status(400).json({ success: false, message: error.message });
    //   }

    //   break;

    // case 'DELETE':
    //   try {
    //     const hero = Hero.deleteOne({ _id: id });
    //     if (!hero) {
    //       res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, hero: heros });
    //   } catch (error) {
    //     res.status(400).json({ success: false, message: error.message });
    //   }

    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
