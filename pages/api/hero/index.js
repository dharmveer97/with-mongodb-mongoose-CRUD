import dbConnect from "../../../db/dbconnect";

import Hero from "../../../modals/Hero";

dbConnect()

export default async(req,res) =>{
  const {method} =  req;
  console.log(req.method,"req.method")
  switch (method) {
    case "GET":
      try {
        const heros = await Hero.find({})
        console.log("heros",heros);
        res.status(200).json({success: true, hero: heros});
      } catch (error) {
        res.status(404).json({success:false, error:console.log(error,"error")})
      }
      break;
      case "POST":
        try {
          const heros = await Hero.create({})
          res.status(200).json({success: true, hero: heros});
        } catch (error) {
          res.status(404).json({success:false, error:error})
        }
        break;
    default:
      break;
  }
}