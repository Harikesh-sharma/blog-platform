import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  title: {
    default: "BlogWriter",
    template: "%s | BlogWriter",
  },
  description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS. Discover the latest insights, tutorials, and stories from expert writers.",
  keywords: ["blog", "next.js", "typescript", "tailwindcss", "shadcn", "writing", "tutorials", "tech"],
  authors: [{ name: "BlogWriter Team" }],
  creator: "BlogWriter",
  metadataBase: new URL('https://blogwriter.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogwriter.com",
    title: "BlogWriter",
    description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS. Discover the latest insights, tutorials, and stories from expert writers.",
    siteName: "BlogWriter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlogWriter - Modern Blog Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogWriter",
    description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
