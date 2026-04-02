const express = require('express');
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api", require("./routes/dashboard"));
// const dashboardRoutes = require("./routes/dashboard") 
// app.use("/api",dashboard) 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

// app.post('/api/test-user', async (req,res)=>
// {
//     try{
//         const user = new User({
//             name:'dhilli',
//             password:'12345',
//             role:'client'
//         });
//         await user.save();
//         res.status(201).json({meaasge:'user successfully saved'})
        
//     }catch(err)
//     {
//        res.status(401).json({message:'failed to save'});
//        res.status(401).json({error:err.message});
//     }

// })
// app.get('/api/test-user', async (req,res)=>
// {
//     try{
//      const users = await User.findOne({name:'dhilli'});
//      res.status(200).json(users);
//      console.log(users);
//     }catch(err){
//         res.status(401).json({message:'failed to fetch users'});
//         res.status(401).json({error:err.message});
       
//     }
// })
// app.post('/api/test-user', async (req,res) =>{
//     try{
//      const {name,email,password}=req.body;
//      if(!name || !email || !password)
//      {
//         res.status(400).json({message:'all fields are required'})
//         return
      
//      }else{
//      const users = new User({name,email,password});
//      await users.save();
//      res.status(201).json({message:'successfully user saved',users})
//      }
//     }
//     catch(err)
//     {
//         res.status(401).json({error:err.message})
//         console.log('failed')
//     }
// })
app.get('/api/test-user', async (req,res)=>
{
    try{
        const users = await User.find();
    res.status(200).json({message:'successfully fetched',users});
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:err.message});
    }
})

