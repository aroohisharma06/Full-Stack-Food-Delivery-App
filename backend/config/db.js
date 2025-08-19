import mongoose from "mongoose";

export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://aroohisharma926:aroohi@cluster0.hcr1ndm.mongodb.net/F00D-DELIVERY').then(()=>{
        console.log("DB connected");
    })

}