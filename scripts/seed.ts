import mongoose from 'mongoose'
import Post from '../src/lib/models/Post'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog'

const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14, featuring the new App Router, Server Components, and more.",
    date: new Date("2024-01-15"),
    author: "John Doe",
    category: "Development",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    content: "## Introduction\n\nNext.js 14 represents a significant leap forward in React-based web development.\n\n## What is Next.js?\n\nNext.js is a React framework that enables features such as server-side rendering and static site generation.\n\n## Getting Started\n\nTo create a new Next.js project, run: npx create-next-app@latest my-blog"
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    excerpt: "Discover the latest TypeScript best practices and patterns that will help you write better, type-safe code.",
    date: new Date("2024-01-10"),
    author: "Jane Smith",
    category: "Tutorial",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    content: "## Why TypeScript?\n\nTypeScript adds static typing to JavaScript which helps catch errors early in the development process."
  },
  {
    slug: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips & Tricks",
    excerpt: "Take your Tailwind CSS skills to the next level with these advanced tips and tricks for building beautiful UIs.",
    date: new Date("2024-01-05"),
    author: "Mike Johnson",
    category: "Design",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
    content: "## Advanced Tailwind Features\n\nLearn about custom configurations and advanced utility classes to build beautiful user interfaces."
  },
  {
    slug: "react-hooks-guide",
    title: "Complete Guide to React Hooks",
    excerpt: "Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and custom hooks.",
    date: new Date("2023-12-28"),
    author: "Sarah Wilson",
    category: "Development",
    readTime: 15,
    image: "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?w=800&auto=format&fit=crop&q=60",
    content: "## Understanding Hooks\n\nReact hooks allow you to use state and other features without writing a class."
  },
  {
    slug: "web-performance",
    title: "Web Performance Optimization Techniques",
    excerpt: "Learn how to optimize your web applications for better performance, faster load times, and improved user experience.",
    date: new Date("2023-12-20"),
    author: "Alex Brown",
    category: "Tutorial",
    readTime: 14,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    content: "## Performance Matters\n\nOptimize your apps for speed with these performance techniques."
  },
  {
    slug: "accessible-design",
    title: "Building Accessible Web Applications",
    excerpt: "Discover the principles of accessible design and learn how to create inclusive web experiences for all users.",
    date: new Date("2023-12-15"),
    author: "Emily Davis",
    category: "Design",
    readTime: 11,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
    content: "## Accessibility First\n\nCreate inclusive experiences for all users with these accessibility best practices."
  }
]

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    await Post.deleteMany({})
    console.log('Cleared existing posts')

    await Post.insertMany(posts)
    console.log('Seeded posts successfully')

    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
