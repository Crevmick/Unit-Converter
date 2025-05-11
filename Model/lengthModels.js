import mongoose from 'mongoose';

const conversionSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  input: { type: Number, required: true },
  result: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

const lengthModel = mongoose.model('lengthConversion', conversionSchema);

export default lengthModel;