const express = require("express");

const app = express();

const db = require("../models");

const routes = require("../routes/crud_routes.js");

const TableName = db.tablenames;

const postcontroller = async(req,res)=>{

    const crudinfo = {
        id :req.body.id,
        title : req.body.title,
        description : req.body.description,
        status :  req.body.status
    }

    try{
        const postdata = await TableName.create(crudinfo);
        res.status(200).send(postdata);

    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}

const getcontroller = async(req,res)=>{
    try
    {
        let readdata = await TableName.findAll({});
        res.status(200).send(readdata);
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }

}

const getbyidcontroller = async(req,res)=>{
    try
    {
        let id = req.params.id;
        let findbyid = await TableName.findOne({where : {id:id}});
        res.status(200).send(findbyid);
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}


const patchcontroller = async(req,res)=>{
    try
    {
        let id = req.params.id;
        let updatedata = await TableName.update(req.body, {where : {id:id}});
        res.status(200).send(updatedata);
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}

const deletecontroller = async(req,res)=>{
    try
    {
        let id = req.params.id;
        let deletedata = await TableName.destroy({where : {id:id}});
        res.status(200).send("data is deleted");
    }
    catch(err)
    {
        return res.status(500).send("Internal server Error");
    }
}

module.exports = {postcontroller, getcontroller, getbyidcontroller, patchcontroller, deletecontroller}