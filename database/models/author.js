import { Schema, model } from "mongoose";

const schema = new Schema ({
    name: {
        type: String,
        required: true 
    }, 
    bio: {
        type: String,
        required: true 
    },
    birthDate: {
        type: Date,
        required: true
    },
    books: {
        type: Array,
        ref: 'Book',        
        required: true 
    }
},{
    timestamps: true
})

const Author = model('Author', schema) 

export default Author