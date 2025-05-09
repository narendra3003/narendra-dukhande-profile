'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Eye } from "lucide-react";

export function Footer() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch('/api/visitor', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm mt-8">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left Section */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} <span className="font-medium">Narendra Dukhande</span>. All rights reserved.
            </p>

            {/* Visitor Counter */}
            <div className="inline-flex items-center gap-2 text-xs text-white-500 bg-purple-100/20 px-3 py-1 rounded-full border border-purple-300 dark:border-purple-500/50">
              <Eye className="h-4 w-4" />
              <span className="font-medium">Visitors:</span>
              <span className="font-semibold text-white-700">{count}</span>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/narendra3003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/narendra-dukhande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:narendradukhande@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
