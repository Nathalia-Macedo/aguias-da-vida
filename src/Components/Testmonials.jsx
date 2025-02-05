"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import g from '../Assets/google.png'
export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const testimonials = [
    {
      text: "Apesar do momento de dor e muito tenso eles foram muito seguros e educados acolhendo e conversando e acalmando o tempo todo ... parabéns pelo profissionalismo",
      author: "Ana Lucia",
      date: "01/10/2024",
      rating: 5,
    },
    {
      text: "Parabéns pra todos a Equipe que estão fazendo um trabalho maravilhoso Deus abençoe",
      author: "Jose Vitor",
      date: "12/06/2024",
      rating: 5,
    },
    {
      text: "Fui muito bem atendida, desde o primeiro contato, rápido e muito educado!",
      author: "Prª Francisca",
      date: "14/07/2024",
      rating: 5,
    },
    {
      text: "Parabéns por nós tranquilizar nesse momento difícil que estamos passando!",
      author: "Rafael Rodrigues",
      date: "19/07/2024",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Schema.org markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Grupo Águias da Vida",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "350",
            },
          })}
        </script>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Avaliações dos Nossos Pacientes</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={g} alt="Logo do Google" className="h-12 w-12 object-contain" />
            <p className="text-blue-600 text-lg font-semibold">Avaliações do Google</p>
          </div>
          <p className="text-gray-600">
            Conheça algumas das 350 avaliações das Clínicas de Reabilitação Grupo Águias da Vida
          </p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg"
              aria-label="Anterior avaliação"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-blue-600 w-4" : "bg-blue-200"
                  }`}
                  aria-label={`Ir para avaliação ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ text, author, date, rating }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group flex flex-col h-full"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-50 transition-transform group-hover:scale-110" />

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="relative z-10 flex flex-col flex-grow">
        <p className="text-gray-700 mb-4 leading-relaxed min-h-[80px]">{text}</p>
        <footer className="mt-auto">
          <cite className="not-italic">
            <span className="block text-blue-900 font-semibold">{author}</span>
            <time className="text-sm text-gray-500">{date}</time>
          </cite>
        </footer>
      </blockquote>
    </motion.div>
  )
}

