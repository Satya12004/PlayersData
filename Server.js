const express =require('express')
const app=express()
const cors=require('cors')
const port=8090
const connectTodb=require('./Config/db')
connectTodb()
require('dotenv').config()

app.use(cors())
app.use(express.json())
const PlayerRouter=require('./Router/PlayerRouter')
app.get('/',(req,res)=>{
    res.json('welcome players')
})
app.use('/Player',PlayerRouter)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})