import connectDB from './mongodb'
import Post from './models/Post'

export interface Post {
  _id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: Date
  author: string
  category: string
  readTime: number
  image: string
}

export interface PostsResponse {
  posts: Post[]
  totalPosts: number
  currentPage: number
  totalPages: number
}

export async function getAllPosts(): Promise<Post[]> {
  await connectDB()
  const posts = await Post.find().sort({ date: -1 }).lean()
  return posts as Post[]
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await connectDB()
  const post = await Post.findOne({ slug }).lean()
  return post as Post | null
}

export async function getPostsPaginated(
  pageNumber: number = 1,
  pageSize: number = 9
): Promise<PostsResponse> {
  await connectDB()
  
  const totalPosts = await Post.countDocuments()
  const totalPages = Math.ceil(totalPosts / pageSize)
  
  const posts = await Post.find()
    .sort({ date: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .lean()
  
  return {
    posts: posts as Post[],
    totalPosts,
    currentPage: pageNumber,
    totalPages
  }
}

export async function getCategories(): Promise<string[]> {
  await connectDB()
  const categories = await Post.distinct('category')
  return categories as string[]
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  await connectDB()
  const posts = await Post.find({ category }).sort({ date: -1 }).lean()
  return posts as Post[]
}

export async function createPost(postData: Omit<Post, '_id'>): Promise<Post> {
  await connectDB()
  const newPost = await Post.create(postData)
  return newPost as Post
}

export async function updatePost(slug: string, postData: Partial<Omit<Post, '_id' | 'slug'>>): Promise<Post | null> {
  await connectDB()
  const updatedPost = await Post.findOneAndUpdate(
    { slug },
    { $set: postData },
    { new: true }
  ).lean()
  return updatedPost as Post | null
}

export async function deletePost(slug: string): Promise<boolean> {
  await connectDB()
  const result = await Post.deleteOne({ slug })
  return result.deletedCount > 0
}
