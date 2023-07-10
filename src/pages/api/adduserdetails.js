import connectDb from "@/middleware/mongoose";
// import ReceiverDetailModel from "@/models/ReceiverDetailModel";
import UserAuthModel from "@/models/UserAuthModel";
const handler = async (req,res)=>{
    // window.location.href = '/api/gmail';
    if(req.method=="POST"){
        let p=new UserAuthModel({
            email:req.body.email,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password,
            status:req.body.status,
            verificationLink:req.body.verificationLink,
        })
        await p.save();
        res.status(200).json({success:'success'});
    }else{
        res.status(400).json({error:"this is not allowed"});
    }
}

export default connectDb(handler);