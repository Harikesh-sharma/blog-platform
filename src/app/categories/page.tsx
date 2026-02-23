import Link from "next/link";
import { getCategories, getAllPosts } from "@/lib/posts";

export default async function CategoriesPage() {
  const categoriesData = await getCategories();
  const allPosts = await getAllPosts();
  
  const categoryColors: Record<string, string> = {
    Development: "bg-green-500",
    Tutorial: "bg-blue-500", 
    Design: "bg-purple-500",
    Technology: "bg-orange-500"
  };
  
  const categoryImages: Record<string, string> = {
    Development: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    Tutorial: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    Design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    Technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60"
  };
  
  const categories = categoriesData.map(category => ({
    slug: category.toLowerCase(),
    name: category,
    description: `Articles about ${category}`,
    postCount: allPosts.filter(p => p.category === category).length,
    color: categoryColors[category] || "bg-gray-500",
    image: categoryImages[category] || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60"
  }));

  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Categories</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Browse articles by topic
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className={`inline-flex items-center rounded-full ${category.color} px-3 py-1 text-sm font-medium text-white`}>
                  {category.name}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">{category.description}</p>
              <p className="mt-4 text-sm font-medium text-primary">
                {category.postCount} articles
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
