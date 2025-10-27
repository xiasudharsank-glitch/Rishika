"use client"

import { useEffect, useState, useRef } from "react"

export default function About() {
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
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-blue-900 mb-12 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>
        <div
          className={`bg-blue-50 p-8 rounded-xl border-l-4 border-blue-900 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm R. Rishika, a dedicated commerce postgraduate from Jamal College of Engineering, Tiruchirappalli. With a
            strong academic background in business, marketing, and consumer behaviour, I am passionate about applying
            strategic thinking and creativity to real-world business challenges. My research on sales promotion and
            consumer behaviour for Aavin Milk in Tiruchirappalli helped me understand how marketing drives customer
            decisions. I'm now seeking opportunities as a Marketing and Sales Executive where I can contribute to brand
            growth and customer engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
