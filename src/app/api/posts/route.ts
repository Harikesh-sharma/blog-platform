import { NextResponse } from 'next/server';
import { getAllPosts, getPostsPaginated, getCategories } from '@/lib/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '9');
  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'latest';

  try {
    const { posts, totalPosts, totalPages } = await getPostsPaginated(page, limit);
    
    // Filter by category if provided
    let filteredPosts = posts;
    if (category) {
      filteredPosts = posts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Sort posts
    if (sort === 'popular') {
      filteredPosts = [...filteredPosts].sort((a, b) => b.readTime - a.readTime);
    } else {
      filteredPosts = [...filteredPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    return NextResponse.json({
      posts: filteredPosts,
      totalPosts: category ? filteredPosts.length : totalPosts,
      currentPage: page,
      totalPages: category ? Math.ceil(filteredPosts.length / limit) : totalPages
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
