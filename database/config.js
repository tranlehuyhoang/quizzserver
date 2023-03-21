import mongoose from "mongoose";


export default async function connect() {
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.aysqhtj.mongodb.net/?retryWrites=true&w=majority')
    console.log('connect ')
}