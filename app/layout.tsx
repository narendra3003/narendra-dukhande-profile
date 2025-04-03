import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Narendra Dukhande - DSA Expert & Full-Stack Developer",
  description:
    "Narendra Dukhande's professional profile – DSA Expert, Full-Stack Developer, AI & Data Science enthusiast. Explore projects, achievements, and skills.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Narendra Dukhande, DSA, Data Structures, Algorithms, Full-Stack Developer, AI, Data Science, Coding, Competitive Programming"
        />
        <meta name="author" content="Narendra Dukhande" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://narendra3003.github.io/profile/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Narendra Dukhande - DSA Expert & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore Narendra Dukhande's professional profile, featuring expertise in DSA, Full-Stack Development, AI, and Data Science."
        />
        <meta property="og:image" content="https://narendra3003.github.io/profile/profile-photo.jpg" />
        <meta property="og:url" content="https://narendra3003.github.io/profile/" />
        <meta property="og:type" content="website" />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Narendra Dukhande",
            "url": "https://narendra3003.github.io/profile/",
            "jobTitle": "DSA Expert & Full-Stack Developer",
            "description": "Narendra Dukhande is a passionate software engineer specializing in DSA, full-stack development, AI, and data science.",
            "sameAs": [
              "https://linkedin.com/in/narendra-dukhande",
              "https://github.com/narendra3003"
            ]
          }
        `}</script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'