const express=require('express')
const {authenticate,register}=require('./authenticate')
const router=express.Router()



router.get('/dash-board',authenticate,(req,res)=>{res.send({'respone':'admin page'})})
router.get('/admin',authenticate,(req,res)=>{res.redirect('/')})

module.exports=router;
