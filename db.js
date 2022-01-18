const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const con = await mongoose.connect('mongodb+srv://manav21:manav21@cluster0.z6cqg.mongodb.net/postManageDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB