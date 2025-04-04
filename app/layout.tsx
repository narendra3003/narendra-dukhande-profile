import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Narendra Dukhande | DSA Expert & Full-Stack Developer",
  description:
    "Explore Narendra Dukhande’s portfolio - expert in DSA, full-stack web development, AI, and data science. View projects, achievements & skills.",
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
        <link rel="canonical" href="https://narendra-dukhande-profile.vercel.app" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Narendra Dukhande - DSA Expert & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore Narendra Dukhande's professional profile, featuring expertise in DSA, Full-Stack Development, AI, and Data Science."
        />
        <meta name="google-site-verification" content="KVwBOvHicUEedydurE_yQjOfWdKx_dka9bqxXuTaJO8" />
        <meta property="og:image" content="/profile-photo.png" />
        <meta property="og:url" content="https://narendra-dukhande-profile.vercel.app" />
        <meta property="og:type" content="website" />

{/* Combined Schema Markup for Person + Website + Profile */}
<script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://narendra-dukhande-profile.vercel.app#me",
      "name": "Narendra Dukhande",
      "url": "https://narendra-dukhande-profile.vercel.app",
      "jobTitle": "DSA Expert & Full-Stack Developer",
      "image": "https://narendra-dukhande-profile.vercel.app/profile-photo.png",
      "sameAs": [
        "https://www.linkedin.com/in/narendra-dukhande",
        "https://github.com/narendra3003"
      ],
      "knowsAbout": [
        "Data Structures and Algorithms",
        "Full-Stack Development",
        "AI and Machine Learning",
        "Data Science",
        "Competitive Programming"
      ],
      "description": "Narendra Dukhande is a DSA expert, full-stack developer, and AI & Data Science enthusiast with a strong portfolio of technical projects."
    },
    {
      "@type": "WebSite",
      "@id": "https://narendra-dukhande-profile.vercel.app#website",
      "url": "https://narendra-dukhande-profile.vercel.app",
      "name": "Narendra Dukhande Portfolio",
      "publisher": {
        "@id": "https://narendra-dukhande-profile.vercel.app#me"
      },
      "description": "Official portfolio of Narendra Dukhande, showcasing expertise in DSA, full-stack web development, artificial intelligence, and data science.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://narendra-dukhande-profile.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
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