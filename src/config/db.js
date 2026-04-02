const mongoose = require('mongoose');
connectDB = async ()=>{
     console.log("Mongo URI:", process.env.MONGO_URI);
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}
module.exports = connectDB;
