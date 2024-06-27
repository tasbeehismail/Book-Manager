import { Schema, model } from "mongoose";

const schema = new Schema ({
    title: {
        type: String,
        required: true 
    }, 
    content: {
        type: String,
        required: true 
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

const Book = model('Book', schema) 

export default Book