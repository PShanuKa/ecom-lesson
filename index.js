import express from "express";
import mongoose from 'mongoose';


const app = express();

app.get("/health", (req, res) => {
    res.send('server is up and running');
})


app.listen(3000);


mongoose.connect("mongodb+srv://ecom:ecom@isuru.0ixpb.mongodb.net/ecom?retryWrites=true&w=majority&appName=isuru")