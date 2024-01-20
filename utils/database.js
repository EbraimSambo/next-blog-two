import mongoose from "mongoose";

let isConnected = false;

export const connecToDB = async () =>{
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB está conenctado');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MONGODB CONECTADO')
    } catch (error) {
        console.log(error)
    }
}