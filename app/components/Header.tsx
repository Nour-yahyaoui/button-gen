'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import { Home, BoxSelect, PenSquare, Github, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/buttons', icon: BoxSelect, label: 'Buttons' },
    { href: '/editor', icon: PenSquare, label: 'Editor' },
    { 
      href: 'https://github.com/nour-yahyaoui/button-gen', 
      icon: Github, 
      label: 'GitHub',
      external: true,
      featured: true // Special marker for GitHub link
    }
  ]

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.15,
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  }

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-md bg-gray-900 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
              >
                <BoxSelect className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-lg font-medium text-gray-900 tracking-tight">ButtonCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 space-x-2">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`flex items-center space-x-1.5 group ${item.featured ? 'pl-3 pr-2.5 py-1 rounded-lg' : ''}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`p-1.5 rounded-full transition-all ${
                    item.featured
                      ? 'bg-gray-900 group-hover:bg-gray-800 shadow-sm'
                      : 'bg-gray-50 group-hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${
                    item.featured 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-gray-900'
                  } transition-colors`} />
                </motion.div>
                <span className={`text-sm font-medium ${
                  item.featured 
                    ? 'text-gray-900 font-semibold' 
                    : 'text-gray-500 group-hover:text-gray-900'
                } transition-colors`}>
                  {item.label}
                </span>
                {item.external && (
                  <svg 
                    className={`w-3.5 h-3.5 ml-0.5 ${
                      item.featured ? 'text-gray-400' : 'text-gray-400 group-hover:text-gray-600'
                    } transition-colors`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <X className="w-5 h-5 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div className="pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        item.featured
                          ? 'bg-gray-600 hover:bg-gray-800 w-[90%]'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-1.5 rounded-full ${
                        item.featured ? 'bg-gray-800' : 'bg-gray-100'
                      }`}>
                        <item.icon className={`w-5 h-5 ${
                          item.featured ? 'text-white' : 'text-gray-700'
                        }`} />
                      </div>
                      <span className={`ml-3 text-sm font-medium ${
                        item.featured ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.label}
                      </span>
                      {item.external && (
                        <svg 
                          className={`w-4 h-4 ml-auto ${
                            item.featured ? 'text-gray-300' : 'text-gray-400'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header