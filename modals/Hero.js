import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, 'Please name this hero'],
    trim: true,
    unique: true,
  },
  realName: {
    type: String,
    required: true,
    maxLength: [200, 'Please keep real name short'],
  },
});

export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema);
