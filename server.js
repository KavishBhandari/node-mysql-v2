const express = require("express");

const cors = require("cors");

let dotenv = require("dotenv");


const app = express();

const corsOptions = {
    origin : "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const crud_routes = require("./routes/crud_routes");
const authroute = require("./routes/auth.js");

app.use("/api", crud_routes);
app.use("/auth", authroute);

dotenv.config();

app.get("/", (req,res)=>{
    res.json({
        message:"Hello i  am kavish"
    })
})

const port = process.env.port || 8080;

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})