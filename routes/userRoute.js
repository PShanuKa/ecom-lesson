import express from "express";
import { createUser } from "../controllers/userController.js";


const userRouter = express.Router();


userRouter.get("/create", createUser)


export default userRouter