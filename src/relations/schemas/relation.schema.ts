import mongoose from "mongoose";

export const RelationSchema = new mongoose.Schema({
    initDate: {
        type: String,
        required: true
    },
    end: {
        type: String
    },
    active: {
        type: Boolean,
        required: true
    }
})