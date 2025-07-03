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
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)

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

  // Calculate pagination
  const totalItems = buttonData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = buttonData.slice(startIndex, endIndex)

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

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(1)
    scrollToTop()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    scrollToTop()
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
    scrollToTop()
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
    scrollToTop()
  }

  // Function to generate pagination buttons with ellipsis
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    // Always show first page
    buttons.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`hidden sm:block px-3 py-1 sm:px-4 sm:py-2 rounded-md ${
          currentPage === 1 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        1
      </button>
    );

    // Show ellipsis if current page is far from start
    if (currentPage > 3 && totalPages > maxVisibleButtons) {
      buttons.push(
        <span key="start-ellipsis" className="hidden sm:flex items-end px-1">...</span>
      );
    }

    // Calculate range of pages to show around current page
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're at the start or end
    if (currentPage <= 3) {
      endPage = Math.min(4, totalPages - 1);
    }
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 3, 2);
    }

    // Show pages around current page
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md ${
            currentPage === i 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis if current page is far from end
    if (currentPage < totalPages - 2 && totalPages > maxVisibleButtons) {
      buttons.push(
        <span key="end-ellipsis" className="hidden sm:flex items-end px-1">...</span>
      );
    }

    // Always show last page if it's not the first page
    if (totalPages > 1) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`hidden sm:block px-3 py-1 sm:px-4 sm:py-2 rounded-md ${
            currentPage === totalPages 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

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

      {/* Items per page selector */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          >
            {[3, 6, 9, 12].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(itemsPerPage)].map((_, index) => (
            <ButtonCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {/* Animated Button Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {currentItems.map((button) => (
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
                      className="mb-4 p-4 bg-gray-900 rounded-lg flex justify-center"
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
                      className="relative bg-gray-800 rounded-lg p-4 max-h-[200px] overflow-y-auto"
                    >
                      {/* Gradient overlay to indicate scrollable content */}
                      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-lg"></div>
                      
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

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-1 sm:space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md ${
                currentPage === 1 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Previous
            </button>

            {/* Mobile: Only show current page */}
            <button
              onClick={() => {}}
              className={`sm:hidden px-3 py-1 rounded-md bg-indigo-600 text-white`}
            >
              {currentPage}
            </button>

            {/* Desktop: Show full pagination with ellipsis */}
            {renderPaginationButtons()}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md ${
                currentPage === totalPages 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}