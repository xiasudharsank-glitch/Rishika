"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Rishika__R.pdf"
    link.download = "R-Rishika-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">R. Rishika</h1>
            <p className="text-xl text-blue-700 font-semibold mb-4">Aspiring Marketing & Sales Executive</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Driven by curiosity, guided by strategy, and passionate about connecting people with brands.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/design-mode/WhatsApp%20Image%202025-10-27%20at%2009.02.16_3a7bed63.jpg"
                alt="R. Rishika"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
