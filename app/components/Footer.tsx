'use client'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-gray-200 py-6 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-500 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} ButtonCraft. All rights reserved.
          </motion.div>

          {/* GitHub Links */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link 
                href="https://github.com/nour-yahyaoui" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>Creator</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="https://github.com/nour-yahyaoui/button-gen" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>Project</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}