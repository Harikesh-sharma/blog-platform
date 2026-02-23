export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About Our Blog</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted-foreground mb-8">
            Welcome to our blog platform! We're dedicated to sharing high-quality 
            content about web development, design, and technology.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide developers and designers with the knowledge 
            and resources they need to build amazing web experiences. We believe 
            in learning by doing, and our tutorials are designed to be practical 
            and hands-on.
          </p>
          
          <h2>What We Cover</h2>
          <ul>
            <li>Web Development with React, Next.js, and TypeScript</li>
            <li>UI/UX Design Principles</li>
            <li>CSS and Tailwind CSS</li>
            <li>Performance Optimization</li>
            <li>Best Practices and Code Patterns</li>
          </ul>
          
          <h2>Meet the Team</h2>
          <p>
            We're a team of passionate developers and designers who love sharing 
            our knowledge with the community. Our contributors come from diverse 
            backgrounds and bring unique perspectives to our content.
          </p>
          
          <h2>Get in Touch</h2>
          <p>
            Have a question or suggestion? We'd love to hear from you! Feel free 
            to reach out through our contact form or connect with us on social media.
          </p>
        </div>
        
        <div className="mt-12 p-6 rounded-lg bg-muted">
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Get the latest articles and tutorials delivered to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
