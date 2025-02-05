import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={`text-xl md:text-2xl font-bold tracking-tight ${
              isScrolled ? "text-blue-900" : "text-white"
            } mr-4 md:mr-8`}
          >
            Grupo Águias da Vida
          </a>

          <div className="hidden md:flex items-center md:space-x-6 lg:space-x-12">
            <NavLinks isScrolled={isScrolled} />
            <a
            href="https://wa.me/551135641013"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors ml-4"
          >
            Preciso de Ajuda
          </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu de navegação">
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-blue-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-blue-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t border-blue-100">
            <div className="flex flex-col space-y-4 p-6">
              <NavLinks mobile />
              <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Preciso de Ajuda
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLinks({ mobile, isScrolled }) {
  const links = [
    { href: "/", text: "Início" },
    { href: "/sobre", text: "Sobre Nós" },
    { href: "/clinicas", text: "Clínicas" },
    { href: "/blog", text: "Blog" },
    { href: "/ajuda", text: "Ajuda" },
  ]

  return (
    <div className={mobile ? "flex flex-col space-y-2" : "flex md:space-x-4 lg:space-x-8"}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`
            transition-colors whitespace-nowrap
            ${
              mobile
                ? "block py-2 text-gray-800 hover:text-blue-600"
                : `inline-block ${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-200`
            }
          `}
        >
          {link.text}
        </a>
      ))}
    </div>
  )
}

