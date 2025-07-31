"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useTheme } from "next-themes"

interface Review {
  id: number
  name: string
  location: string
  content: string
  rating: number
  avatar: string
}

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      content: "Absolutely stunning work! The attention to detail and creativity exceeded all my expectations.",
      rating: 5,
      avatar: "/avatars/avatar1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, USA",
      content: "Incredible service from start to finish. The team was professional, responsive, and delivered beyond what we imagined.",
      rating: 5,
      avatar: "/avatars/avatar2.jpg"
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "London, UK",
      content: "Working with this team was a game-changer for our project. Their innovative approach and technical expertise are unmatched.",
      rating: 5,
      avatar: "/avatars/avatar3.jpg"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextReview()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, currentIndex])

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [reviews.length])

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ))
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevReview}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                    <img 
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reviews[currentIndex].name)}&background=random`;
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex gap-1 mb-6">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-6" />
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{reviews[currentIndex].content}"
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {reviews[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextReview}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
