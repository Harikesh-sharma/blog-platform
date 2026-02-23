import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Bookmark, Clock } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back button */}
        <Button variant="ghost" asChild className="mb-8 -ml-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime} min read
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20" />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mb-12 pb-8 border-b">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.content.split('\n').map((line: string, idx: number) => {
            if (line.startsWith('## ')) {
              return <h2 key={idx}>{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={idx}>{line.replace('### ', '')}</h3>;
            }
            if (line.trim()) {
              return <p key={idx}>{line}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
