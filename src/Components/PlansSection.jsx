"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import limitado from '../Assets/limitado.jpeg'
import meio from '../Assets/meio.jpeg'
import alto from '../Assets/alto.jpeg'
import premium from '../Assets/premium.jpeg'
export default function PlansSection() {
  const plans = [
    {
      name: "LIMITADO",
      image: limitado,
      type: "Plano",
      buttonText: "Ver detalhes",
      subtitle: "Clinicas Limitadas",
      tier: 1,
    },
    {
      name: "MÉDIO PADRÃO",
      image: meio,
      type: "Plano",
      buttonText: "Ver detalhes",
      subtitle: "Clinicas Médio Padrão",
      tier: 2,
    },
    {
      name: "ALTO PADRÃO",
      image: alto,
      type: "Plano",
      buttonText: "Ver detalhes",
      subtitle: "Clinicas Alto Padrão",
      tier: 3,
    },
    {
      name: "PREMIUM",
      image: premium,
      type: "Plano",
      buttonText: "Ver detalhes",
      subtitle: "Clinicas Premium",
      tier: 4,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Planos de Internação</h2>
          <p className="text-xl text-blue-600">Disponíveis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ name, image, type, buttonText, subtitle, tier }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: tier * 0.1 }}
      className="group relative"
    >
      <div
        className={`
        relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300
        group-hover:shadow-xl group-hover:-translate-y-1
        ${tier === 4 ? "border-2 border-blue-500" : ""}
      `}
      >
        {/* Background Gradient Overlay */}
        <div
          className={`
          absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
          ${tier === 1 ? "bg-gradient-to-br from-blue-50 to-blue-100/50" : ""}
          ${tier === 2 ? "bg-gradient-to-br from-blue-100 to-blue-200/50" : ""}
          ${tier === 3 ? "bg-gradient-to-br from-blue-200 to-blue-300/50" : ""}
          ${tier === 4 ? "bg-gradient-to-br from-blue-300 to-blue-400/50" : ""}
        `}
        />

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={`Clínica ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {tier === 4 && (
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Recomendado
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="text-sm font-medium text-blue-600 mb-2">{type}</div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">{name}</h3>
          <p className="text-blue-600/80 text-sm mb-6">{subtitle}</p>

          <button
            className={`
              w-full rounded-xl py-3 px-4 flex items-center justify-center gap-2
              transition-all duration-300 text-sm font-semibold
              ${tier === 4 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}
            `}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Highlight for Premium Plan */}
      {tier === 4 && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 -z-10 blur-sm opacity-50" />
      )}
    </motion.div>
  )
}

