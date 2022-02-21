import mongoose from "mongoose";

export const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    description: {
        type: String
    },
    initDate: {
        type: String,
        required: true,
    },
    end: {
        type: String
    },
    active: {
        type: Boolean
    }
})