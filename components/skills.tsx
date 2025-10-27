"use client"

import { useEffect, useState, useRef } from "react"

export default function Skills() {
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

  const skills = [
    "Microsoft Word",
    "Office Suite",
    "Excel",
    "Digital Marketing",
    "Communication Skills",
    "Consumer Behaviour Analysis",
    "Sales Strategy",
    "Promotion Strategy",
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-blue-900 mb-12 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-lg text-center font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
