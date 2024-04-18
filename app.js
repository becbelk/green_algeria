require('dotenv').config();
const express=require('express');
const mainRouter=require('./server/router/main')
const PORT=4004|| process.env.PORT;

const app=express()


app.use('/',mainRouter);
app.use('*',(req,res)=>console.log('error'))



app.listen(PORT,()=>console.log(`listening at PORT: ${PORT} GREEN ALGERIA`))