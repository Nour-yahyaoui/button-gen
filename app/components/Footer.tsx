'use client'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-gray-200 mb-4 md:mb-0">
            © {new Date().getFullYear()} ButtonCraft. All rights reserved.
          </div>

          {/* GitHub Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="https://github.com/nour-yahyaoui" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-gray-200 transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              <span>Creator</span>
            </Link>
            
            <Link 
              href="https://github.com/nour-yahyaoui/button-gen" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-gray-200 transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              <span>Project</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}