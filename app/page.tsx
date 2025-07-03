"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-28">
      {/* Decorative floating shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 top-1/4 h-40 w-40 rounded-full bg-indigo-50 opacity-60 blur-xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-1/3 h-20 w-48 rounded-full bg-blue-50 opacity-60 blur-xl"
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Premium Button Components
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Crafted by{" "}
              <span className="font-semibold text-indigo-600">
                Nour Yahyaoui
              </span>{" "}
              - Free for developers
            </motion.p>
          </motion.div>

          {/* Technology Options - Smaller on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mx-auto max-w-md sm:max-w-none"
          >
            {/* HTML & CSS */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-4 sm:p-5 bg-white rounded-xl shadow-2xl shadow-gray-400 hover:shadow-2sm border border-gray-100 transition-all"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-semibold text-gray-800">
                  HTML/CSS
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-500">
                  Vanilla implementation
                </div>
                <div className="mt-3 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    Copy/Paste
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-4 sm:p-5 bg-white rounded-xl shadow-2xl shadow-gray-400 hover:shadow-2sm border border-gray-100 transition-all"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-semibold text-gray-800">
                  Tailwind
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-500">
                  Utility classes
                </div>
                <div className="mt-3 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                    Easy to customize
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/buttons"
              className="w-full sm:w-auto flex items-center justify-center gap-x-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 active:bg-indigo-700 group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                Browse Components
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="https://github.com/nour-yahyaoui/button-gen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-x-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 active:bg-gray-800 group"
            >
              <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                Star on GitHub
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
