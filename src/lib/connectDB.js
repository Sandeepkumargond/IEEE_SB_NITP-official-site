import mongoose from "mongoose";

const connectionUri = process.env.MONGODB_URI
// check .env file in case of error
if(!connectionUri){
    console.log("Error in mongodb connection URI")
}

export async function connectDB(){
    try {
      await mongoose.connect(connectionUri)
    
      // on successful connection
      mongoose.connection.on("connected", () => {
        console.log("Database connected")
      })

      // on error
      mongoose.connection.on("error",(error) => {
        console.log("Connection errror : ", error);
      })
    } 
    catch (error) {
        console.log(error)
        throw Error({
            message : "Error connecting to database"
        })
    }
}