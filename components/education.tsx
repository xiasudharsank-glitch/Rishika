"use client"

import { useEffect, useState, useRef } from "react"

export default function Education() {
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

  const educationData = [
    {
      degree: "Master of Commerce (M.Com)",
      institution: "Jamal College of Engineering, Tiruchirappalli",
      duration: "2 Years",
      percentage: "73%",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Jamal College of Engineering, Tiruchirappalli",
      duration: "3 Years",
      percentage: "86%",
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-blue-900 mb-12 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900 transition-all duration-1000 transform hover:shadow-lg hover:translate-x-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">{edu.degree}</h3>
              <p className="text-gray-700 font-semibold mb-2">{edu.institution}</p>
              <div className="flex justify-between text-gray-600">
                <span>{edu.duration}</span>
                <span className="font-semibold text-blue-900">{edu.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
