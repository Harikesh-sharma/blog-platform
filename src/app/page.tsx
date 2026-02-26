import Link from "next/link";
import { ArrowRight, BookOpen, Code, Palette, Lightbulb } from "lucide-react";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";

const features = [
  {
    icon: Code,
    title: "Development",
    description: "Learn about web development, programming languages, and best practices.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Explore UI/UX design, branding, and visual design principles.",
  },
  {
    icon: Lightbulb,
    title: "Tutorials",
    description: "Step-by-step guides and tutorials for building real-world projects.",
  },
  {
    icon: BookOpen,
    title: "Insights",
    description: "Get insights into the latest technology trends and industry news.",
  },
];

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="text-primary">BlogWriter</span>
            </h1>
            <p className="mt-6 animate-fade-in delay-100 text-lg text-muted-foreground">
              Discover the latest insights, tutorials, and stories from our expert writers. 
              Stay ahead with cutting-edge technology and design content.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
              <Button asChild size="lg">
                <Link href="/blog">
                  Read Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What We Cover</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive content across various topics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold">Recent Posts</h2>
              <p className="mt-2 text-muted-foreground">
                Stay updated with our latest articles
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={new Date(post.date).toISOString()}
                author={post.author}
                category={post.category}
                readTime={post.readTime}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-primary-foreground/80">
              Get the latest articles and tutorials delivered straight to your inbox. 
              No spam, unsubscribe anytime.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background text-foreground"
                required
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}