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
  description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS",
  keywords: ["blog", "next.js", "typescript", "tailwindcss", "shadcn"],
  authors: [{ name: "BlogWriter Team" }],
  creator: "BlogWriter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogwriter.com",
    title: "BlogWriter",
    description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS",
    siteName: "BlogWriter",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogWriter",
    description: "A modern blog platform built with Next.js, TypeScript, and Tailwind CSS",
  },
  robots: {
    index: true,
    follow: true,
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
