const mongoose=require('mongoose');

const userAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default:false,
  },
  verificationLink: {
    type: String,
    required: true,
  },
  
},{timestamps: true});

mongoose.models={};
export default mongoose.model('UserAuthModel', userAuthSchema);


