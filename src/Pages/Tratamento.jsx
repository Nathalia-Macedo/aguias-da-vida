import { useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTexts } from "../context/TextContext"
import { ChevronRight, Clock, Calendar, BookOpen, Phone } from "lucide-react"
import Header from "../Components/Header"

const TreatmentContent = () => {
  const location = useLocation()
  const texts = useTexts()

  const searchParams = new URLSearchParams(location.search)
  const treatmentType = searchParams.get("type") || "alcoolismo"

  const content = texts[treatmentType]

  if (!content) return <div className="container mx-auto px-4 py-16 text-center">Conteúdo não encontrado</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight"
          >
            {content.title}
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-blue-100">
            <div className="flex items-center bg-blue-600/30 rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 mr-2" />
              <time className="text-sm">{content.date}</time>
            </div>
            <div className="flex items-center bg-blue-600/30 rounded-full px-4 py-2">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">{content.keyword}</span>
            </div>
            <div className="flex items-center bg-blue-600/30 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-sm">Tempo de leitura: 10 min</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-center leading-relaxed">
            {content.theme}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="mb-16 lg:mb-24"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="border-b-2 border-blue-200 pb-2">{section.title}</span>
              </h2>

              {section.content && (
                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                  <p>{section.content}</p>
                </div>
              )}

              {section.images && (
                <div className="mb-8">
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-96 rounded-lg overflow-hidden mb-6">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  {section.subsections.map((subsection, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
                    >
                      <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                        <ChevronRight className="w-6 h-6 mr-2 text-blue-500" />
                        {subsection.title}
                      </h3>
                      <p className="text-gray-700">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mãos unidas em apoio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Pronto para Começar sua Jornada de Recuperação?
            </h2>
            <p className="text-xl text-blue-700 mb-10">
              Nosso atendimento é 24 horas. Fale com um especialista e descubra o melhor caminho para uma vida livre da
              dependência química.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar com um Especialista Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12 text-center">Conteúdos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sinais de Recuperação",
              image:
                "https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              title: "Processo de Reabilitação",
              image:
                "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              title: "Apoio Familiar",
              image:
                "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Ilustração de ${item.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubra mais sobre {item.title.toLowerCase()} e como isso pode impactar positivamente o processo de
                  recuperação.
                </p>
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Ler mais
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TreatmentContent

