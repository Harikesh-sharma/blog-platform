import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
