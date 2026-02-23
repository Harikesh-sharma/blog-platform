import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  image?: string;
}

export function PostCard({
  slug,
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
  image,
}: PostCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {category}
          </span>
          <span>•</span>
          <span>{formatDate(date)}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="line-clamp-2 text-xl font-semibold leading-tight mb-2">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground mb-4 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/20" />
          <span className="text-sm font-medium">{author}</span>
        </div>
      </div>
    </article>
  );
}
