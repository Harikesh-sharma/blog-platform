import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/posts';
import Post from '@/lib/models/Post';
import mongoose from 'mongoose';

export async function GET() {
  try {
    const categories = await getCategories();
    
    // Get post count per category using MongoDB aggregation
    const categoryCounts = await Post.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    const result = categoryCounts.map(cat => ({
      name: cat._id,
      count: cat.count
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
