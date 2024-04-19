require('dotenv').config();
const express=require('express');
const adminRouter=require('./server/router/admin')
const mainRouter=require('./server/router/main')
const PORT=4004|| process.env.PORT;

const app=express()


app.use('/',adminRouter);
app.use('/',mainRouter);
app.use('*',(req,res)=>res.status(404).send({'message':'404 no such address'}))



app.listen(PORT,()=>console.log(`listening at PORT: ${PORT} GREEN ALGERIA`))