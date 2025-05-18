const mongoose = require('mongoose');
require('dotenv').config()

const connectTodb=async()=>{
    try {
      await  mongoose.connect(process.env.MONGODB_URL)
      console.log('Connected!')
    } catch (error) {
      console.log({msg:"error in connecting mongodb",error:error.message})
    }
  }
  module.exports=connectTodb