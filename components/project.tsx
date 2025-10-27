"use client"

import { useEffect, useState, useRef } from "react"

export default function Project() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="project" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-blue-900 mb-12 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Project
        </h2>
        <div
          className={`bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900 transition-all duration-1000 transform hover:shadow-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            A Study on Sales Promotion and Consumer Behaviour of Aavin Milk in Tiruchirappalli
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Conducted an in-depth study to understand how promotional activities influence consumer buying patterns.
            Collected data from local customers, analysed responses, and recommended effective marketing strategies to
            improve brand awareness and sales performance.
          </p>
        </div>
      </div>
    </section>
  )
}
