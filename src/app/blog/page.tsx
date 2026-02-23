import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Explore our latest articles, tutorials, and insights
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date.toISOString()}
            author={post.author}
            category={post.category}
            readTime={post.readTime}
            image={post.image}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  );
}
