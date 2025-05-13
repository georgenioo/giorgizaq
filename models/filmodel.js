import mongoose  from "mongoose"
import { title } from "process";

const filmSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true},
    rating: {type: Boolean, default: true}
})


export const Film = mongoose.model('Film', filmSchema);
