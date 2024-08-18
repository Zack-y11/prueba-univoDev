import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("No se ha definido la variable de entorno MONGODB_URI");
}

mongoose.connect(MONGODB_URI)
.then(() => console.log("DB connected"))
.catch((error) => console.log(error));


