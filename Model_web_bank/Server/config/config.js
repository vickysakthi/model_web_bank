import mongoose from "mongoose";

const config=async()=>{
   try {
      const uri='mongodb://localhost/Axisbadbank'
      await  mongoose.connect(uri)

   console.log("DBconected");
    
   } catch (error) {
    console.log("error",error);
   }
}

export default config;