export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300">© {currentYear} R. Rishika | All Rights Reserved</p>
      </div>
    </footer>
  )
}
