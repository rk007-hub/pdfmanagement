const mongoose=require('mongoose');

const receiverDetailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  whatsappNo: {
    type: String,
    required: true,
  },
  telegramNo: {
    type: String,
    required: true,
  },
},{timestamps: true});

mongoose.models={};
export default mongoose.model('ReceiverDetailModel', receiverDetailSchema);