const express = require('express');
const router = express.Router();
const studentService = require('../services/student');

router.post("/insert",async (req, res) => {
    try {
        let id = req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let subject = req.body.subject;
        let gender = req.body.gender;
        data = {
            id: id,
            name: name,
            email: email,
            subject:subject,
            gender:gender
        }
        console.log(data);
        var callService = new studentService();
        var result =await callService.postMethod(data);
        if(result ===1){
            res.send({
                success:1,
                message:"record inserted"
            });
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        })
    }
});

router.post("/getByName", async (req,res)=>{
    try {
        name = req.body.name;
        console.log(name);
        let callService = new studentService();
        let result = await callService.searchByName(name);
        if(result.rowCount>=1){
            res.send(result.rows);
        } else{
            res.send({
                success:0,
                message:"No such Name Present"
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        })
    }
});

router.get("/getAllDetails",async (req,res)=>{
    try {
        let callService = new studentService();
        let result = await callService.getAllDetails();
        if(result.rowCount>=1){
            res.send(result.rows);
        } else{
            throw new Error('error while retrieving data');
        }
    } catch (error) {
        console.log(error);
    }
});

router.get("/get/:id", async (req,res)=>{
    try {
        let id = req.params.id;
        let callService = new studentService();
        let result = await callService.getDetailsById(id);
        if(result.rowCount>=1){
            res.send(result["rows"][0]);
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:0,
            message:error.message
        });
    }
});

router.put("/update", async(req,res)=>{
    try {
        let id = req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let subject = req.body.subject;
        let gender = req.body.gender;
        data = {
            id:id,
            name:name,
            email:email,
            subject:subject,
            gender:gender
        }
        let callService = new studentService();
        let result =await callService.updateDetails(data);
        console.log(result);
        if(result.rowCount>=1){
            res.send({
                success:1,
                message:"updated successfully"
            });
        } else{
            res.send({
                success:0,
                message:"id not found"
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:0,
            message:error.message
        })
    }
});

router.delete("/delete/:id",async (req,res)=>{
    try {
      
        let id = parseInt(req.params.id);
        let callService = new studentService();
        let result = await callService.deleteDetails(id);
        console.log(result);
        if(result.rowCount>=1){
            res.send({
                success:1,
                message:"record deleted successfully.."
            })
        } else{
            res.send({
                success:0,
                message:"id not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        })
    }
});

module.exports = router;