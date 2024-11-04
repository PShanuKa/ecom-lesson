import express from "express";
import { createUser, getUser, loginUser, updateUser } from "../controllers/userController.js";


const userRouter = express.Router();

//  Post Route
userRouter.post("/create", createUser)

// Login Route
userRouter.post("/login", loginUser)

// Get Route
userRouter.get("/get", getUser)

// Put Route
userRouter.put("/update",updateUser)


export default userRouter