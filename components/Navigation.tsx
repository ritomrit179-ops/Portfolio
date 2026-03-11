"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors group">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            Portfolio
          </span>
        </Link>
        
        <div className="flex gap-10">
          <Link 
            href="/" 
            className={`relative hover:text-white transition-colors ${pathname === "/" ? "text-white" : "text-gray-400"}`}
          >
            Work
            {pathname === "/" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            )}
          </Link>
          <Link 
            href="/about" 
            className={`relative hover:text-white transition-colors ${pathname === "/about" ? "text-white" : "text-gray-400"}`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            )}
          </Link>
          <Link 
            href="/contact" 
            className={`relative hover:text-white transition-colors ${pathname === "/contact" ? "text-white" : "text-gray-400"}`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
