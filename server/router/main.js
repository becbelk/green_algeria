const express=require('express')
const {authenticate,register}=require('./authenticate')
const router=express.Router()



router.get('/',authenticate,(req,res)=>{res.send({'respone':'home page'})})
router.get('/home',authenticate,(req,res)=>{res.redirect('/')})

module.exports=router;
