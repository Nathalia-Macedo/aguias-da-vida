import ajuda from '../Assets/ajuda.jpg'
import { createContext, useContext, useState } from "react"
import alcool from '../Assets/alcool.jpg'
const TextsContext = createContext()

export const useTexts = () => {
  const context = useContext(TextsContext)
  if (!context) {
    throw new Error("useTexts must be used within a TextsProvider")
  }
  return context
}

export const TextsProvider = ({ children }) => {
  const [texts, setTexts] = useState({
    alcoolismo: {
      title: "Alcoolismo: Um Guia Completo",
      date: "2023-10-27",
      keyword: "Alcoolismo",
      theme: "Este guia aborda os aspectos do alcoolismo, desde os sintomas até o tratamento.",
      sections: [
        {
          title: "O que é Alcoolismo?",
          content:
            "O alcoolismo, também conhecido como dependência alcoólica, é uma doença crônica que afeta milhões de pessoas em todo o mundo. Caracteriza-se pelo consumo excessivo e compulsivo de álcool, levando a consequências negativas para a saúde física e mental, bem como para as relações sociais e profissionais.",
         
          subsections: [
            {
              title: "Sintomas do Alcoolismo",
              content:
                "Os sintomas do alcoolismo podem variar de pessoa para pessoa, mas alguns sinais comuns incluem tolerância ao álcool (necessidade de consumir quantidades cada vez maiores para obter o mesmo efeito), abstinência (sintomas físicos e psicológicos desagradáveis ao interromper o consumo), perda de controle sobre o consumo, e continuação do consumo apesar das consequências negativas.",
            },
            {
              title: "Causas do Alcoolismo",
              content:
                "As causas do alcoolismo são complexas e multifatoriais, envolvendo fatores genéticos, psicológicos e ambientais. Fatores genéticos podem predispor algumas pessoas ao desenvolvimento da doença, enquanto fatores psicológicos, como ansiedade e depressão, podem contribuir para o uso excessivo de álcool como forma de automedicação. Fatores ambientais, como a pressão social e a disponibilidade de álcool, também desempenham um papel importante.",
            },
          ],
        },
        {
          title: "Tratamento do Alcoolismo",
          content:
            "O tratamento do alcoolismo é essencial para a recuperação e pode envolver diferentes abordagens, como terapia individual ou em grupo, medicamentos e apoio familiar. A terapia ajuda a identificar e lidar com os fatores que contribuem para o consumo excessivo de álcool, enquanto os medicamentos podem auxiliar no controle dos sintomas de abstinência e na prevenção de recaídas. O apoio familiar é crucial para o sucesso do tratamento.",
        
        },
        {
          title: "Prevenção do Alcoolismo",
          content:
            "A prevenção do alcoolismo é crucial para reduzir o impacto desta doença na sociedade.  Estratégias de prevenção incluem educação sobre os riscos do consumo excessivo de álcool, campanhas de conscientização pública e acesso a serviços de saúde mental.",
        },
        {
          title: "Conclusão",
          content:
            "O alcoolismo é uma doença séria, mas tratável. Com o tratamento adequado e o apoio de amigos e familiares, é possível alcançar a recuperação.",
          images: [
            {
              url: alcool,
              alt: "Pessoa com expressão de cansaço, ilustrando sintomas físicos",
            },
          ],
        },
      ],
    },
    // transtornos_mentais: {
    //   title: "Transtornos Mentais: Compreensão e Tratamento",
    //   date: "2023-10-28",
    //   keyword: "Saúde Mental",
    //   theme: "Uma visão abrangente sobre os transtornos mentais, seus sintomas e opções de tratamento.",
    //   sections: [
    //     {
    //       title: "O que são Transtornos Mentais?",
    //       content:
    //         "Transtornos mentais são condições que afetam o pensamento, as emoções e o comportamento de uma pessoa. Eles podem variar em gravidade e duração, e podem impactar significativamente a qualidade de vida do indivíduo.",
    //       images: [
    //         {
    //           url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //           alt: "Pessoa refletindo, simbolizando a luta interna da dependência química",
    //         },
    //       ],
    //       subsections: [
    //         {
    //           title: "Tipos Comuns de Transtornos Mentais",
    //           content:
    //             "Alguns dos transtornos mentais mais comuns incluem depressão, ansiedade, transtorno bipolar, esquizofrenia e transtornos alimentares. Cada um desses transtornos tem suas próprias características e sintomas específicos.",
    //         },
    //         {
    //           title: "Causas dos Transtornos Mentais",
    //           content:
    //             "As causas dos transtornos mentais são complexas e podem envolver uma combinação de fatores genéticos, biológicos, ambientais e psicológicos. Experiências de vida estressantes, trauma, abuso de substâncias e desequilíbrios químicos no cérebro podem todos contribuir para o desenvolvimento de transtornos mentais.",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Tratamento de Transtornos Mentais",
    //       content:
    //         "O tratamento de transtornos mentais geralmente envolve uma abordagem multifacetada, que pode incluir psicoterapia, medicação, mudanças no estilo de vida e apoio social. A terapia cognitivo-comportamental (TCC) e outras formas de psicoterapia podem ajudar os indivíduos a desenvolver estratégias de enfrentamento e mudar padrões de pensamento negativos. Em alguns casos, medicamentos como antidepressivos ou estabilizadores de humor podem ser prescritos para ajudar a gerenciar os sintomas.",
    //       images: [
    //         {
    //           url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //           alt: "Equipe médica, representando a abordagem multidisciplinar no tratamento",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Prevenção de Transtornos Mentais",
    //       content:
    //         "A prevenção de transtornos mentais envolve a promoção da saúde mental, o acesso a serviços de saúde mental e o combate ao estigma associado a essas condições.",
    //       images: [
    //         {
    //           url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //           alt: "Pessoa de braços abertos em um campo, simbolizando liberdade e recuperação",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Conclusão",
    //       content:
    //         "Os transtornos mentais são condições tratáveis. Com o tratamento adequado e o apoio de amigos e familiares, é possível melhorar a qualidade de vida.",
    //       images: [
    //         {
    //           url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    //           alt: "Pessoa com expressão de cansaço, ilustrando sintomas físicos",
    //         },
    //       ],
    //     },
    //   ],
    // },
    dependencia_quimica: {
      title: "Dependência Química: Causas, Sintomas e Tratamento Eficaz",
      date: "17/01/2024",
      keyword: "Dependência Química",
      theme:
        "Descubra tudo sobre dependência química: causas, sintomas, tratamentos e como o Grupo Águias da Vida pode ajudar na sua recuperação. Informações completas e atualizadas para pacientes e familiares.",
      sections: [
        {
          title: "O que é Dependência Química? Entenda esta Condição de Saúde",
          content:
            "A dependência química é uma doença crônica que afeta o sistema nervoso central. Ela ocorre quando o uso de substâncias psicoativas (como álcool, drogas ilícitas ou medicamentos) altera o funcionamento do cérebro, criando um ciclo de compulsão e dependência. Essas substâncias afetam a liberação de neurotransmissores, responsáveis pela sensação de prazer e bem-estar. Com o tempo, o corpo se adapta, exigindo doses cada vez maiores para alcançar o mesmo efeito. Isso torna o controle do uso cada vez mais difícil.",

        },
        {
          title: "Sinais e Sintomas da Dependência Química: Reconhecendo o Problema",
          content:
            "Identificar os sinais precocemente é essencial para buscar ajuda. Alguns dos principais sintomas incluem:",
          subsections: [
            {
              title: "Perda de Controle",
              content: "Incapacidade de controlar o uso da substância, mesmo quando há desejo de parar.",
            },
            {
              title: "Tolerância",
              content: "Necessidade de doses maiores para alcançar o mesmo efeito.",
            },
            {
              title: "Sintomas de Abstinência",
              content: "Desconforto físico e psicológico quando a substância não é consumida.",
            },
            {
              title: "Impacto na Vida",
              content: "Consequências negativas em áreas importantes como trabalho, estudos e relacionamentos.",
            },
          ],
        },
        {
          title: "Substâncias Comuns Associadas à Dependência Química",
          content: "Diversas substâncias podem levar à dependência química. Algumas das mais comuns incluem:",
          subsections: [
            {
              title: "Álcool",
              content: "Uma das substâncias mais consumidas e associadas à dependência.",
            },
            {
              title: "Cocaína e Crack",
              content: "Drogas estimulantes altamente viciantes.",
            },
            {
              title: "Maconha",
              content: "Apesar da percepção de ser menos prejudicial, pode levar à dependência.",
            },
            {
              title: "Alucinógenos",
              content: "Substâncias que alteram a percepção da realidade.",
            },
            {
              title: "Medicamentos Controlados",
              content: "Uso indevido pode resultar em dependência.",
            },
            {
              title: "Nicotina",
              content: "Presente no tabaco, é altamente viciante.",
            },
          ],
        },
        {
          title: "Tratamento da Dependência Química: O Primeiro Passo Para a Recuperação",
          content:
            "O tratamento da dependência química é multidisciplinar, envolvendo diferentes etapas para garantir uma recuperação completa:",
        
          subsections: [
            {
              title: "Desintoxicação",
              content:
                "Processo inicial que elimina a substância do organismo, sob supervisão médica, de forma segura.",
            },
            {
              title: "Terapia Psicológica",
              content:
                "Ajuda o paciente a entender a doença, identificar gatilhos e desenvolver estratégias para lidar com o vício.",
            },
            {
              title: "Reabilitação",
              content:
                "Foca na reintegração do indivíduo à sociedade, promovendo habilidades para uma vida saudável e livre da dependência.",
            },
          ],
        },
        {
          title: "Grupo Águias da Vida: Sua Jornada de Recuperação Começa Aqui",
          content:
            "O Grupo Águias da Vida está pronto para ajudar você ou seu ente querido na jornada de recuperação da dependência química. Nossa abordagem inclui:",
          subsections: [
            {
              title: "Orientação Personalizada",
              content: "Oferecemos orientação personalizada, levando em conta suas necessidades individuais.",
            },
            {
              title: "Conexão com Clínicas Especializadas",
              content:
                "Nossa central de atendimento conecta você a clínicas especializadas, com equipes experientes e dedicadas à recuperação de dependentes químicos.",
            },
            {
              title: "Equipe Multidisciplinar",
              content: "Trabalhamos com clínicas que dispõem de profissionais como médicos, psicólogos e terapeutas.",
            },
            {
              title: "Ambiente Seguro e Acolhedor",
              content:
                "As clínicas parceiras oferecem ambientes seguros e acolhedores, ideais para o processo de reabilitação.",
            },
          ],
        },
        {
          title: "Conclusão: Há Esperança na Recuperação da Dependência Química",
          content:
            "A dependência química é uma condição desafiadora, mas tratável. Com o suporte adequado, comprometimento pessoal e uma abordagem abrangente de tratamento, é possível alcançar uma recuperação duradoura e uma vida plena. O Grupo Águias da Vida está comprometido em fornecer o apoio necessário para iniciar e manter essa jornada de recuperação. Sua vida não precisa ser definida pela dependência. Existe um caminho para a recuperação, e nós estamos aqui para guiá-lo em cada etapa.",
          images: [
            {
              url: ajuda,
              alt: "Pessoa de braços abertos em um campo, simbolizando liberdade e recuperação",
            },
          ],
        },
        {
          title: "Pronto para Mudar? Entre em Contato Agora",
          content:
            "Nosso atendimento é 24 horas. Fale com um especialista e descubra o melhor caminho para uma vida livre da dependência química. Se você ou alguém que você conhece está lutando contra a dependência química, não espere o problema se agravar. Entre em contato conosco hoje mesmo e dê o primeiro passo em direção a uma vida livre das drogas e do álcool. Ligue para [NÚMERO DE TELEFONE] ou envie uma mensagem através do nosso site. Sua recuperação é nossa prioridade.",
        },
      ],
    },
  })

  return <TextsContext.Provider value={texts}>{children}</TextsContext.Provider>
}

