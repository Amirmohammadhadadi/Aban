import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'full name is required']
    },
    Password: {
        type: String,
        required: [true, "password is required"]
    }
}, { timestamps: true })


const Admin = mongoose.model('Admin', adminSchema)