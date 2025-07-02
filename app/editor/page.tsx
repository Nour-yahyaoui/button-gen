'use client'
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { useEffect, useState } from "react"

export default function Editor() {
  const [dimensions, setDimensions] = useState({ 
    width: 0, 
    height: 0 
  })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-133.7px)] bg-white text-gray-900">
      {/* Animated Background Elements - Only render when dimensions are available */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div className="fixed inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-200"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                opacity: 0,
              }}
              animate={{
                x: [null, Math.random() * dimensions.width],
                y: [null, Math.random() * dimensions.height],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-8 flex justify-center"
          >
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <Rocket className="w-16 h-16 text-indigo-500" strokeWidth={1.5} />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Editor Coming Soon
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We're building an amazing button editor that will let you customize,
            style, and export buttons with ease. Get ready to unleash your
            creativity!
          </p>
        </motion.div>
      </div>
    </div>
  )
}