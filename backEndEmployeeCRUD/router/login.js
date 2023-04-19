const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.post("/register",async (req,res)=>{
    try {
        let username = req.body.username;
        let password = req.body.password;
        let callService = new login();
        let result = await callService.register(username,password);
        if(result.rowCount==1){
            res.send({
                success:1,
                message:"registered"
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:1,
            messaged:error.message
        });
    }
});

router.post("/login", async(req,res)=>{
    try {
        let username = req.body.username;
        let password = req.body.password;
        let callService = new login();
        let result = await callService.checkUsername(username,password);
        if(result.rowCount!==1){
            res.send({
                success:400,
                message:"username does not exist"
            });
        } else{
            let result2 = await callService.login(username,password); 
            if(result2.rowCount===1){
                if(password == result2.rows[0]["password"]){
                    res.send({
                        success:200,
                        message:"User logged in"
                    });
                }
            } else{
                res.send({
                    success:404,
                    message:"invalid password"
                });
            }
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