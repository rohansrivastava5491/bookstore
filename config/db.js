const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(process.env.mongoURI,{
            useNewUrlParser : true,
        })
    
    console.log(`MongoDB is connected...`);
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;