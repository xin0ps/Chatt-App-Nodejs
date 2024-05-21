
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT=process.env.PORT || 27001;


app.use(express.json());

// app.get("/", (req,res)=>{

//     //root route http://localhost:5000/

//     res.send("Hello world");

// });

app.use("/api/auth",authRoutes)



app.listen(PORT,"192.168.0.109",() => {

    connectToMongoDB();
    console.log(`Server Running on port ${PORT} `);
});
 