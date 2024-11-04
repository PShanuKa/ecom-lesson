import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("user", userSchema)

export default User