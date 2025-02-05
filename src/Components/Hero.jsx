// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"

// const Hero = () => {
//   const services = [
//     {
//       title: "Alcoolismo",
//       description: "Tratamento personalizado para dependência alcoólica",
//       link: "/tratamentos?type=alcoolismo",
//       delay: 0.1,
//     },
//     {
//       title: "Dependência Química",
//       description: "Programa completo de reabilitação para dependentes químicos",
//       link: "/tratamentos?type=dependencia_quimica",
//       delay: 0.2,
//     },
//     {
//       title: "Transtornos Mentais",
//       description: "Acompanhamento psiquiátrico especializado",
//       link: "/tratamentos?type=transtornos_mentais",
//       delay: 0.3,
//     },
//     {
//       title: "Lar para Idosos",
//       description: "Cuidados especializados para a terceira idade",
//       link: "/tratamentos?type=lar_idosos",
//       delay: 0.4,
//     },
//   ]

//   return (
//     <section className="relative min-h-screen flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroBack.jpg-mFcsnnwDv8HR81yZiKatNwqHf8oeXa.jpeg"
//           alt="Imagem representando bem-estar e recuperação"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/80 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 pt-20">
//         <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
//           {/* Left Column */}
//           <div className="w-full lg:w-5/12 text-white space-y-8">
//             <div className="inline-block px-6 py-2 rounded-full bg-blue-700/30 backdrop-blur-sm border border-white/10">
//               <p className="text-sm md:text-base font-medium">Clínicas Particulares e Convênios Médicos</p>
//             </div>

//             <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
//               Recuperação e Tratamento Especializado
//             </h1>

//             <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
//               Encontre nas nossas clínicas um tratamento humanizado que respeita sua individualidade e promove a
//               recuperação integral para uma nova vida.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <a
//                 href="https://wa.me/551135641013"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 text-center shadow-lg"
//               >
//                 Falar com Especialista
//               </a>
//               <Link
//                 to="/clinicas"
//                 className="bg-blue-700/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 text-center border border-white/10 shadow-lg"
//               >
//                 Nossas Clínicas
//               </Link>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full lg:w-6/12">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {services.map((service, index) => (
//                 <Link key={index} to={service.link}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: service.delay }}
//                     className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 
//                              hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer
//                              h-full flex flex-col justify-between"
//                   >
//                     <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                     <p className="text-blue-100">{service.description}</p>
//                   </motion.div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Hero = () => {
  const services = [
    {
      title: "Alcoolismo",
      description: "Tratamento personalizado para dependência alcoólica",
      link: "/tratamentos?type=alcoolismo",
      delay: 0.1,
    },
    {
      title: "Dependência Química",
      description: "Programa completo de reabilitação para dependentes químicos",
      link: "/tratamentos?type=dependencia_quimica",
      delay: 0.2,
    },
    {
      title: "Transtornos Mentais",
      description: "Acompanhamento psiquiátrico especializado",
      link: "/tratamentos?type=transtornos_mentais",
      delay: 0.3,
    },
    {
      title: "Lar para Idosos",
      description: "Cuidados especializados para a terceira idade",
      link: "/tratamentos?type=lar_idosos",
      delay: 0.4,
    },
  ]

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroBack.jpg-mFcsnnwDv8HR81yZiKatNwqHf8oeXa.jpeg"
          alt="Imagem representando bem-estar e recuperação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-5/12 text-white space-y-8 lg:pl-8">
            <div className="inline-block px-6 py-2 rounded-full bg-blue-700/30 backdrop-blur-sm border border-white/10">
              <p className="text-sm md:text-base font-medium">Clínicas Particulares e Convênios Médicos</p>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Recuperação e Tratamento Especializado
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Encontre nas nossas clínicas um tratamento humanizado que respeita sua individualidade e promove a
              recuperação integral para uma nova vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/551135641013"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 text-center shadow-lg"
              >
                Falar com Especialista
              </a>
              <Link
                to="/clinicas"
                className="bg-blue-700/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 text-center border border-white/10 shadow-lg"
              >
                Nossas Clínicas
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-32">
              {services.map((service, index) => (
                <Link key={index} to={service.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: service.delay }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 
                             hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer
                             h-full flex flex-col justify-between"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-blue-100">{service.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

