'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonData } from '../buttons-dataset/buttons'

type CodeType = 'html' | 'tailwind'

// Skeleton loader component
const ButtonCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className="p-5">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
      <div className="mb-4 p-4 bg-gray-100 rounded-lg flex justify-center h-20 animate-pulse"></div>
      <div className="bg-gray-800 rounded-lg p-4 h-40 animate-pulse"></div>
    </div>
  </div>
)

export default function ButtonGallery() {
  const [codeType, setCodeType] = useState<CodeType>('html')
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
      })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Code Type Toggle */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex mb-8 justify-center"
      >
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setCodeType('html')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${
              codeType === 'html'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            HTML/CSS
          </button>
          <button
            onClick={() => setCodeType('tailwind')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${
              codeType === 'tailwind'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Tailwind
          </button>
        </div>
      </motion.div>

      {/* Loading Skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ButtonCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        /* Animated Button Grid */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {buttonData.map((button) => (
              <motion.div
                key={button.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="p-5">
                  <motion.h3 
                    className="text-lg font-semibold text-gray-800 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {button.title}
                  </motion.h3>
                  
                  {/* Preview - Always rendered with Tailwind */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 p-4 bg-gray-900  rounded-lg flex justify-center"
                  >
                    <button className={button.tailwind}>
                      {button.html.match(/>(.*?)</)?.[1] || 'Click Me'}
                    </button>
                  </motion.div>

                  {/* Code Display - Dynamic based on codeType */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative bg-gray-800 rounded-lg p-4 max-h-[300px] overflow-y-scroll"
                  >
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-gray-100">
                        {codeType === 'html'
                          ? `${button.html}\n\n<style>\n${button.css}\n</style>`
                          : `<button class="${button.tailwind}">\n  ${button.html.match(/>(.*?)</)?.[1] || 'Click Me'}\n</button>`}
                      </code>
                    </pre>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(
                        codeType === 'html'
                          ? `${button.html}\n\n<style>\n${button.css}\n</style>`
                          : `<button class="${button.tailwind}">${button.html.match(/>(.*?)</)?.[1] || 'Click Me'}</button>`,
                        button.id
                      )}
                      className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-xs"
                    >
                      {copiedId === button.id ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}