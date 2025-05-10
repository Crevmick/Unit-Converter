import mongoose from 'mongoose';

const conversionSchema = new mongoose.Schema({
  from: String,
  to: String,
  input: Number,
  result: Number,
  date: {
    type: Date,
    default: Date.now
  }
});
const TimeModel = mongoose.model('TimeConversion', conversionSchema);

export default TimeModel; 
