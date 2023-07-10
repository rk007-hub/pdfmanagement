import mongoose from "mongoose";

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }

    await mongoose.connect('mongodb+srv://ridhamgodha18:FtAf2i1r4xwnmfk8@cluster0.2izkohz.mongodb.net/?retryWrites=true&w=majority'
    );
    return handler(req,res);
}
export default connectDb
