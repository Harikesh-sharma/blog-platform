"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun, Search, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">BlogWriter</span>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>

          {status === "loading" ? (
            <div className="h-9 w-9 animate-pulse bg-muted rounded-md" />
          ) : session ? (
            <div className="flex items-center gap-2">
              <Link
                href="/profile"
                className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                <UserIcon className="h-4 w-4" />
                {session.user?.name || session.user?.email}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-3"
              >
                <LogOut className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/auth/signin"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-3"
              >
                <LogIn className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Sign In</span>
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
              >
                Sign Up
              </Link>
            </div>
          )}

          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {session ? (
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" })
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/auth/signin"
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
