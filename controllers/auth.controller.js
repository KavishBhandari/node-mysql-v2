let express = require("express");
let app = express();

const bcrypt = require("bcryptjs");

//const authmodelvar = require("../models/authmodel.js");
const db = require("../models");

const TableName = db.authtable ;

const jwtToken = require("jsonwebtoken");

let register = async(req,res,next)=>{

        //const salt = await bcrypt.genSalt(10);
        //const hashpassword = await bcrypt.hash(req.body.password, 10);

        const registeruser ={
            email : req.body.email,
            password : req.body.password//hashpassword
        }
    try
    {
        

        let result = await TableName.create(registeruser);
        return res.status(200).send("user registered successfully"); 
        
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}

let login = async(req,res, next)=>{
    try{
        const checkemail = await TableName.findOne({email : req.body.email});
        if(!checkemail)
        {
            return res.status(404).send("user not found");
        }

        const ispasswprdCorrect = await (req.body.password, checkemail.password)//bcrypt.compare(req.body.password, checkemail.password);
        if(!ispasswprdCorrect)
        {
            return res.status(404).send("user not found");
        }

        const token = jwtToken.sign(
            {
                email : checkemail.email,
            },
            process.env.JWT_SECRET
        )

        return res.status(200).send("Login successful");
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}


module.exports = {register, login}