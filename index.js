import express from "express";
import mongoose from 'mongoose';
import userRouter  from "./routes/userRoute.js";


const app = express();

app.get("/health", (req, res) => {
    res.send('server is up and running');
})

app.use('/api/user', userRouter);


app.listen(3000, () => {
    console.log("server is running on port 3000");
});


mongoose.connect("mongodb+srv://ecom:ecom@isuru.0ixpb.mongodb.net/ecom?retryWrites=true&w=majority&appName=isuru").then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.error(err);
})