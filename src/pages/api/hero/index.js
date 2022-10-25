import dbConnect from '../../../utils/dbconnect';

import Hero from '../../../../modals/Hero';

export default async (req, res) => {
  const { method } = req;
  console.log(method, 'method');
  await dbConnect();
  switch (method) {
    case 'GET':
      try {
        const heros = await Hero.find({});
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        res.status(404).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const allHeros = await Hero.create(req.body);
        console.log(allHeros, 'allHeros');
        /* create a new model in the database */
        res.status(201).json({ success: true, data: allHeros });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
