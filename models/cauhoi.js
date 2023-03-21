import mongoose from "mongoose";
const { Schema } = mongoose;

const questionModels = new Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Question', questionModels)