import mongoose from "mongoose";

export const CollaboratorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    admission: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    }
})