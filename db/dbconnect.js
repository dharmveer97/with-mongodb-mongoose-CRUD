import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if(connection.isConnected){
    return;
  }
  console.log(connection.isConnected,"connection.isConnected")
  const db = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(connection,"connection")
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;