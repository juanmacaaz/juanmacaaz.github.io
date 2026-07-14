document.documentElement.classList.add("js");

const translations = {
  es: {
    meta: {
      title: "Juan Manuel Camara Diaz | IA y visión por computador",
      description: "Perfil profesional de Juan Manuel Camara Diaz, consultor y desarrollador de inteligencia artificial y visión por computador, especializado en I+D aplicada, sistemas multimodales y despliegues en AWS.",
      ogDescription: "Consultoría y desarrollo de IA, visión por computador y sistemas multimodales, desde I+D hasta producción.",
      locale: "es_ES"
    },
    nav: { profile: "Perfil", projects: "Proyectos", archive: "Archivo", games: "Juegos", contact: "Contacto" },
    hero: {
      eyebrow: "IA aplicada · Visión por computador · I+D",
      role: "Consultor y desarrollador de IA",
      lead: "Diseño y desarrollo soluciones de IA generativa, voz y visión por computador, desde el prototipo hasta el despliegue en AWS.",
      support: "Experiencia en I+D aplicada, sistemas multimodales, reconstrucción 3D y docencia técnica.",
      projectsCta: "Ver proyectos",
      contactCta: "Contactar",
      location: "Barcelona, Cataluña"
    },
    labels: {
      selected: "01 / Trabajo seleccionado",
      expertise: "02 / Capacidades",
      archive: "03 / Archivo abierto",
      games: "04 / Extra",
      profile: "05 / Perfil"
    },
    projects: {
      title: "Proyectos destacados",
      intro: "Una selección de trabajo aplicado en IA, visión por computador y sistemas multimodales.",
      items: [
        {
          title: "EcoMate",
          category: "IA multimodal · Reciclaje",
          body: "Aplicación móvil para identificar y clasificar residuos domésticos y orientar sobre el contenedor correcto. Desarrollada en el Computer Vision Center, combina visión por computador e IA multimodal.",
          cta: "Ver referencia en CVC"
        },
        {
          title: "IA generativa, voz y AWS",
          category: "IA generativa · Voz · Nube",
          body: "Soluciones de extremo a extremo con LLM, RAG, agentes, chatbots, transcripción, traducción y TTS en tiempo real, desde el prototipo hasta el despliegue en AWS."
        },
        {
          title: "Visión para helipuertos",
          category: "Visión por computador · Vídeo",
          body: "Sistemas para helipuertos con detección de objetos mediante YOLO, reconocimiento de matrículas ANPR/LPR y monitorización de vídeo multisede."
        },
        {
          title: "Reconstrucción 3D y pose",
          category: "I+D · Visión 3D",
          body: "Investigación aplicada en reconstrucción 3D con cámaras 3D y NeRF, y optimización de la estimación de pose mediante marcadores ArUco."
        }
      ]
    },
    areas: {
      title: "Áreas de trabajo",
      intro: "Trabajo técnico en cuatro frentes complementarios.",
      items: [
        { title: "IA generativa", body: "LLM, RAG, agentes, chatbots y ajuste fino de modelos." },
        { title: "Visión por computador", body: "YOLO, PaddleOCR, detección de objetos, ANPR/LPR, reconstrucción 3D y estimación de pose." },
        { title: "Voz y multimodalidad", body: "Transcripción, traducción, TTS en tiempo real e integración de modalidades." },
        { title: "Nube y sistemas", body: "AWS, despliegue de soluciones de IA, cámaras IP, RTSP/RTMP y monitorización de vídeo con Shinobi." }
      ]
    },
    tags: {
      ipVideo: "Vídeo IP",
      agents: "Agentes",
      realtimeTts: "TTS en tiempo real",
      multimodalAi: "IA multimodal",
      computerVision: "Visión por computador",
      mobile: "Aplicación móvil",
      research: "I+D",
      cameras3d: "Cámaras 3D",
      poseEstimation: "Estimación de pose"
    },
    profile: {
      title: "IA aplicada, de la investigación al despliegue.",
      body: "Desarrollador y consultor especializado en inteligencia artificial y visión por computador, con experiencia en I+D, soluciones integrales, docencia y comunicación técnica clara. Trabajo con IA generativa, sistemas multimodales y despliegues en AWS.",
      infrastructureLabel: "Infraestructura propia",
      infrastructureBody: "Experimentación, entrenamiento y ajuste fino de modelos de inteligencia artificial.",
      locationLabel: "Base",
      languagesLabel: "Idiomas",
      languagesValue: "Castellano: nativo · Catalán: avanzado, oral y escrito",
      focusLabel: "Enfoque",
      focusValue: "I+D aplicada · De extremo a extremo · Comunicación técnica · Docencia",
      licenseLabel: "Permiso",
      licenseValue: "Carné de conducir B"
    },
    archive: {
      title: "Archivo abierto",
      intro: "Proyectos anteriores publicados en GitHub, seleccionados y reunidos en un único lugar.",
      items: [
        { category: "Robótica · IA", body: "Robot asistente orientado a la interacción física y emocional mediante voz y vídeo.", credit: "Proyecto en equipo. Créditos: Dani, Miguel y Christian." },
        { category: "Aprendizaje automático", body: "Análisis de clasificadores VGG16 y AlexNet, características visuales, maximización de clases y ataques adversarios." },
        { category: "C++ · Qt · Simulación", body: "Simulador de puertas lógicas con guardado y carga de diagramas, cálculo de minterms y exportación a VHDL.", credit: "Proyecto en equipo. Créditos: Eric (@eric5512)." },
        { category: "Python · Visión por computador", body: "Herramienta ligera para etiquetar imágenes en el formato de entrenamiento de EAST." },
        { category: "Python · Visión por computador", body: "Sistema ganador del Premio bonÀrea en HackEPS 2020: detección en tiempo real de huecos en lineales frigoríficos con YOLOv3 y envío de alertas a una aplicación móvil.", credit: "Proyecto en equipo. Créditos: Pol (@polespinasa) y Dani (@Danny-8).", award: "Ver proyecto premiado en Devpost" },
        { category: "C++ · OpenGL · Juego", body: "Videojuego de laberintos en 3D con físicas, tres entornos y enemigos que planifican rutas mediante TSP.", credit: "Proyecto en equipo. Créditos: Miguel, Luis, Dani, Juan y Christian." }
      ]
    },
    filters: {
      label: "Filtrar proyectos",
      all: "Todos",
      ai: "IA y visión",
      tools: "Herramientas",
      robotics: "Robótica",
      games: "Juegos",
      statusAll: "Mostrando los 6 proyectos del archivo.",
      statusFilteredOne: "Mostrando 1 proyecto.",
      statusFilteredMany: "Mostrando {count} proyectos."
    },
    games: {
      title: "Una pausa para jugar",
      intro: "Dos juegos web para probar directamente en el navegador.",
      items: [
        {
          category: "Juego diario de palabras",
          body: "Adivina la palabra diaria haciendo preguntas de sí o no. La IA responde; tú conectas las pistas. Requiere una cuenta de Google.",
          cta: "Jugar a Promly",
          mediaLabel: "Jugar a Promly; abre en una pestaña nueva"
        },
        {
          category: "Puzle de ajedrez 3×3",
          body: "Reproduce el tablero moviendo las piezas como en ajedrez. Incluye modos diario, infinito y multijugador en línea. Requiere una cuenta de Google.",
          cta: "Jugar a MiniChess",
          mediaLabel: "Jugar a MiniChess; abre en una pestaña nueva"
        }
      ]
    },
    experience: {
      title: "Experiencia",
      intro: "Investigación aplicada, desarrollo independiente, software y docencia técnica.",
      items: [
        {
          role: "Coordinador de Herramientas Computacionales",
          company: "Universitat de Barcelona · Máster en IA Aplicada a Mercados Financieros",
          date: "oct. 2025 — jul. 2026",
          body: "Coordinación académica y operativa, actualización de contenidos, actividades prácticas y colaboración con el claustro en el seguimiento del alumnado."
        },
        {
          role: "Consultor y desarrollador independiente de IA y visión por computador",
          company: "Profesional independiente",
          date: "jun. 2024 — jul. 2026 · jul. 2019 — jul. 2021",
          body: "Diseño e implementación de soluciones de IA generativa, voz y visión por computador, desde el prototipo hasta el despliegue en AWS."
        },
        {
          role: "Docente de ciclos formativos",
          company: "Grup Escolar Roca",
          date: "mar. 2022 — actualidad",
          body: "Formación técnica con un enfoque práctico y contenidos orientados a la comprensión y la aplicación."
        },
        {
          role: "Investigador y desarrollador de visión por computador",
          company: "Computer Vision Center",
          date: "jun. 2022 — mar. 2025",
          body: "Desarrollo de EcoMate e investigación aplicada en reconstrucción 3D con cámaras 3D, NeRF y marcadores ArUco."
        },
        {
          role: "Desarrollador de software",
          company: "Setting Consultoría en Tecnologías de la Información",
          date: "oct. 2018 — ene. 2019",
          body: "Desarrollo de ERP escalables en Java 8 con JSF y PrimeFaces, despliegues en WildFly y pruebas unitarias y de integración."
        }
      ]
    },
    education: {
      title: "Formación académica",
      items: [
        { degree: "Grado en Ingeniería Informática" },
        { degree: "CFGS en Desarrollo de Aplicaciones Multiplataforma" },
        { degree: "CFGM en Sistemas Microinformáticos y Redes" }
      ]
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de tecnología.",
      body: "Para propuestas, colaboraciones o conversaciones técnicas, puedes escribirme por correo o LinkedIn.",
      email: "Correo"
    },
    footer: {
      line: "Consultoría, desarrollo y docencia en IA y visión por computador.",
      copyright: "© {year} Juan Manuel Camara Diaz."
    },
    ui: {
      skip: "Saltar al contenido",
      navigation: "Navegación principal",
      language: "Cambiar idioma",
      specialties: "Especialidades",
      technologies: "Tecnologías",
      repository: "Abrir repositorio",
      external: "Abre en una pestaña nueva",
      backTop: "Volver arriba"
    }
  },

  ca: {
    meta: {
      title: "Juan Manuel Camara Diaz | IA i visió per computador",
      description: "Portafolis de Juan Manuel Camara Diaz, consultor i desenvolupador d'intel·ligència artificial i visió per computador, especialitzat en R+D aplicada, sistemes multimodals i desplegaments a AWS.",
      ogDescription: "Consultoria i desenvolupament d'IA, visió per computador i sistemes multimodals, des de l'R+D fins a producció.",
      locale: "ca_ES"
    },
    nav: { profile: "Perfil", projects: "Projectes", archive: "Arxiu", games: "Jocs", contact: "Contacte" },
    hero: {
      eyebrow: "IA aplicada · Visió per computador · R+D",
      role: "Consultor i desenvolupador d'IA",
      lead: "Dissenyo i desenvolupo solucions d'IA generativa, veu i visió per computador, des del prototip fins al desplegament a AWS.",
      support: "Experiència en R+D aplicada, sistemes multimodals, reconstrucció 3D i docència tècnica.",
      projectsCta: "Veure projectes",
      contactCta: "Contactar",
      location: "Barcelona, Catalunya"
    },
    labels: {
      selected: "01 / Treball seleccionat",
      expertise: "02 / Capacitats",
      archive: "03 / Arxiu obert",
      games: "04 / Extra",
      profile: "05 / Perfil"
    },
    projects: {
      title: "Projectes destacats",
      intro: "Una selecció de treball aplicat en IA, visió per computador i sistemes multimodals.",
      items: [
        {
          title: "EcoMate",
          category: "IA multimodal · Reciclatge",
          body: "Aplicació mòbil per identificar i classificar residus domèstics i indicar el contenidor correcte. Desenvolupada al Computer Vision Center, combina visió per computador i IA multimodal.",
          cta: "Veure la referència al CVC"
        },
        {
          title: "IA generativa, veu i AWS",
          category: "IA generativa · Veu · Núvol",
          body: "Solucions d'extrem a extrem amb LLM, RAG, agents, xatbots, transcripció, traducció i TTS en temps real, des del prototip fins al desplegament a AWS."
        },
        {
          title: "Visió per a heliports",
          category: "Visió per computador · Vídeo",
          body: "Sistemes per a heliports amb detecció d'objectes mitjançant YOLO, reconeixement de matrícules ANPR/LPR i monitoratge de vídeo en múltiples seus."
        },
        {
          title: "Reconstrucció 3D i pose",
          category: "R+D · Visió 3D",
          body: "Recerca aplicada en reconstrucció 3D amb càmeres 3D i NeRF, i optimització de l'estimació de pose mitjançant marcadors ArUco."
        }
      ]
    },
    areas: {
      title: "Àrees de treball",
      intro: "Treball tècnic en quatre àmbits complementaris.",
      items: [
        { title: "IA generativa", body: "LLM, RAG, agents, xatbots i ajust fi de models." },
        { title: "Visió per computador", body: "YOLO, PaddleOCR, detecció d'objectes, ANPR/LPR, reconstrucció 3D i estimació de pose." },
        { title: "Veu i multimodalitat", body: "Transcripció, traducció, TTS en temps real i integració de modalitats." },
        { title: "Núvol i sistemes", body: "AWS, desplegament de solucions d'IA, càmeres IP, RTSP/RTMP i monitoratge de vídeo amb Shinobi." }
      ]
    },
    tags: {
      ipVideo: "Vídeo IP",
      agents: "Agents",
      realtimeTts: "TTS en temps real",
      multimodalAi: "IA multimodal",
      computerVision: "Visió per computador",
      mobile: "Aplicació mòbil",
      research: "R+D",
      cameras3d: "Càmeres 3D",
      poseEstimation: "Estimació de pose"
    },
    profile: {
      title: "IA aplicada, de la recerca al desplegament.",
      body: "Desenvolupador i consultor especialitzat en intel·ligència artificial i visió per computador, amb experiència en R+D, solucions d'extrem a extrem, docència i comunicació tècnica clara. Treballo amb IA generativa, sistemes multimodals i desplegaments a AWS.",
      infrastructureLabel: "Infraestructura pròpia",
      infrastructureBody: "Experimentació, entrenament i ajust fi de models d'intel·ligència artificial.",
      locationLabel: "Base",
      languagesLabel: "Idiomes",
      languagesValue: "Castellà: llengua materna · Català: nivell avançat, oral i escrit",
      focusLabel: "Enfocament",
      focusValue: "R+D aplicada · D'extrem a extrem · Comunicació tècnica · Docència",
      licenseLabel: "Permís",
      licenseValue: "Permís de conduir B"
    },
    archive: {
      title: "Arxiu obert",
      intro: "Projectes anteriors publicats a GitHub, seleccionats i reunits en un únic lloc.",
      items: [
        { category: "Robòtica · IA", body: "Robot assistent orientat a la interacció física i emocional mitjançant veu i vídeo.", credit: "Projecte en equip. Crèdits: Dani, Miguel i Christian." },
        { category: "Aprenentatge automàtic", body: "Anàlisi de classificadors VGG16 i AlexNet, característiques visuals, maximització de classes i atacs adversaris." },
        { category: "C++ · Qt · Simulació", body: "Simulador de portes lògiques amb desament i càrrega de diagrames, càlcul de minterms i exportació a VHDL.", credit: "Projecte en equip. Crèdits: Eric (@eric5512)." },
        { category: "Python · Visió per computador", body: "Eina lleugera per etiquetar imatges en el format d'entrenament d'EAST." },
        { category: "Python · Visió per computador", body: "Sistema guanyador del Premi bonÀrea de la HackEPS 2020: detecció en temps real de buits en lineals frigorífics amb YOLOv3 i enviament d'alertes a una aplicació mòbil.", credit: "Projecte en equip. Crèdits: Pol (@polespinasa) i Dani (@Danny-8).", award: "Veure el projecte premiat a Devpost" },
        { category: "C++ · OpenGL · Joc", body: "Videojoc de laberints en 3D amb físiques, tres entorns i enemics que planifiquen rutes mitjançant TSP.", credit: "Projecte en equip. Crèdits: Miguel, Luis, Dani, Juan i Christian." }
      ]
    },
    filters: {
      label: "Filtrar projectes",
      all: "Tots",
      ai: "IA i visió",
      tools: "Eines",
      robotics: "Robòtica",
      games: "Jocs",
      statusAll: "Es mostren els 6 projectes de l'arxiu.",
      statusFilteredOne: "Es mostra 1 projecte.",
      statusFilteredMany: "Es mostren {count} projectes."
    },
    games: {
      title: "Una pausa per jugar",
      intro: "Dos jocs web per provar directament al navegador.",
      items: [
        {
          category: "Joc diari de paraules",
          body: "Endevina la paraula diària fent preguntes que es responen amb sí o no. La IA respon; tu connectes les pistes. Requereix un compte de Google.",
          cta: "Jugar a Promly",
          mediaLabel: "Jugar a Promly; s'obre en una pestanya nova"
        },
        {
          category: "Trencaclosques d'escacs 3×3",
          body: "Reprodueix el tauler movent les peces com als escacs. Inclou modes diari, infinit i multijugador en línia. Requereix un compte de Google.",
          cta: "Jugar a MiniChess",
          mediaLabel: "Jugar a MiniChess; s'obre en una pestanya nova"
        }
      ]
    },
    experience: {
      title: "Experiència",
      intro: "Recerca aplicada, desenvolupament independent, programari i docència tècnica.",
      items: [
        {
          role: "Coordinador d'Eines Computacionals",
          company: "Universitat de Barcelona · Màster en IA Aplicada als Mercats Financers",
          date: "oct. 2025 — jul. 2026",
          body: "Coordinació de la planificació acadèmica i operativa, actualització de continguts, organització d'activitats pràctiques i seguiment del progrés de l'alumnat en col·laboració amb el claustre."
        },
        {
          role: "Consultor i desenvolupador independent d'IA i visió per computador",
          company: "Professional independent",
          date: "juny 2024 — jul. 2026 · jul. 2019 — jul. 2021",
          body: "Disseny i implementació de solucions d'IA generativa, veu i visió per computador, des del prototip fins al desplegament a AWS."
        },
        {
          role: "Docent de cicles formatius",
          company: "Grup Escolar Roca",
          date: "març 2022 — actualitat",
          body: "Formació tècnica amb un enfocament pràctic i continguts orientats a la comprensió i l'aplicació."
        },
        {
          role: "Investigador i desenvolupador de visió per computador",
          company: "Computer Vision Center",
          date: "juny 2022 — març 2025",
          body: "Desenvolupament d'EcoMate i recerca aplicada en reconstrucció 3D amb càmeres 3D, NeRF i marcadors ArUco."
        },
        {
          role: "Desenvolupador de programari",
          company: "Setting Consultoría en Tecnologías de la Información",
          date: "oct. 2018 — gen. 2019",
          body: "Desenvolupament d'ERP escalables en Java 8 amb JSF i PrimeFaces, desplegaments en WildFly i proves unitàries i d'integració."
        }
      ]
    },
    education: {
      title: "Formació acadèmica",
      items: [
        { degree: "Grau en Enginyeria Informàtica" },
        { degree: "CFGS en Desenvolupament d'Aplicacions Multiplataforma" },
        { degree: "CFGM en Sistemes Microinformàtics i Xarxes" }
      ]
    },
    contact: {
      label: "Contacte",
      title: "Parlem de tecnologia.",
      body: "Per a propostes, col·laboracions o converses tècniques, em pots escriure per correu o LinkedIn.",
      email: "Correu"
    },
    footer: {
      line: "Consultoria, desenvolupament i docència en IA i visió per computador.",
      copyright: "© {year} Juan Manuel Camara Diaz."
    },
    ui: {
      skip: "Saltar al contingut",
      navigation: "Navegació principal",
      language: "Canviar l'idioma",
      specialties: "Especialitats",
      technologies: "Tecnologies",
      repository: "Obrir el repositori",
      external: "S'obre en una pestanya nova",
      backTop: "Tornar a dalt"
    }
  },

  en: {
    meta: {
      title: "Juan Manuel Camara Diaz | AI & computer vision",
      description: "Portfolio of Juan Manuel Camara Diaz, an AI and computer vision consultant and developer focused on applied R&D, multimodal systems and AWS deployment.",
      ogDescription: "AI, computer vision and multimodal systems consulting and development, from R&D to production.",
      locale: "en_GB"
    },
    nav: { profile: "Profile", projects: "Projects", archive: "Archive", games: "Games", contact: "Contact" },
    hero: {
      eyebrow: "Applied AI · Computer vision · R&D",
      role: "AI consultant and developer",
      lead: "I design and build generative AI, voice and computer vision solutions, from prototype to deployment on AWS.",
      support: "Experience in applied R&D, multimodal systems, 3D reconstruction and technical teaching.",
      projectsCta: "Explore projects",
      contactCta: "Get in touch",
      location: "Barcelona, Catalonia"
    },
    labels: {
      selected: "01 / Selected work",
      expertise: "02 / Expertise",
      archive: "03 / Open archive",
      games: "04 / Extra",
      profile: "05 / Profile"
    },
    projects: {
      title: "Selected projects",
      intro: "A selection of applied work in AI, computer vision and multimodal systems.",
      items: [
        {
          title: "EcoMate",
          category: "Multimodal AI · Recycling",
          body: "Mobile app that identifies and classifies household waste and points users to the correct disposal bin. Developed at the Computer Vision Center, it combines computer vision and multimodal AI.",
          cta: "Read about EcoMate at CVC"
        },
        {
          title: "Generative AI, voice and AWS",
          category: "Generative AI · Voice · Cloud",
          body: "End-to-end solutions using LLMs, RAG, agents, chatbots, transcription, translation and real-time TTS, from prototype to deployment on AWS."
        },
        {
          title: "Computer vision for heliports",
          category: "Computer vision · Video",
          body: "Heliport systems using YOLO object detection, ANPR/LPR and multisite video monitoring."
        },
        {
          title: "3D reconstruction and pose",
          category: "R&D · 3D vision",
          body: "Applied research into 3D reconstruction with 3D cameras and NeRF, and pose-estimation optimisation using ArUco markers."
        }
      ]
    },
    areas: {
      title: "Areas of work",
      intro: "Technical work across four complementary areas.",
      items: [
        { title: "Generative AI", body: "LLMs, RAG, agents, chatbots and model fine-tuning." },
        { title: "Computer vision", body: "YOLO, PaddleOCR, object detection, ANPR/LPR, 3D reconstruction and pose estimation." },
        { title: "Voice and multimodality", body: "Transcription, translation, real-time TTS and multimodal integration." },
        { title: "Cloud and systems", body: "AWS, AI solution deployment, IP cameras, RTSP/RTMP and video monitoring with Shinobi." }
      ]
    },
    tags: {
      ipVideo: "IP video",
      agents: "Agents",
      realtimeTts: "Real-time TTS",
      multimodalAi: "Multimodal AI",
      computerVision: "Computer vision",
      mobile: "Mobile app",
      research: "R&D",
      cameras3d: "3D cameras",
      poseEstimation: "Pose estimation"
    },
    profile: {
      title: "Applied AI, from research to deployment.",
      body: "Developer and consultant specialising in artificial intelligence and computer vision, with experience in R&D, end-to-end solutions, teaching and clear technical communication. I work with generative AI, multimodal systems and AWS deployments.",
      infrastructureLabel: "Dedicated AI infrastructure",
      infrastructureBody: "Experimentation, training and fine-tuning of artificial intelligence models.",
      locationLabel: "Based in",
      languagesLabel: "Languages",
      languagesValue: "Spanish: native · Catalan: advanced, spoken and written",
      focusLabel: "Approach",
      focusValue: "Applied R&D · End-to-end delivery · Technical communication · Teaching",
      licenseLabel: "Licence",
      licenseValue: "Category B driving licence"
    },
    archive: {
      title: "Open archive",
      intro: "Earlier projects published on GitHub, selected and gathered in one place.",
      items: [
        { category: "Robotics · AI", body: "Assistant robot focused on physical and emotional interaction through voice and video.", credit: "Team project. Credits: Dani, Miguel and Christian." },
        { category: "Machine learning", body: "Analysis of VGG16 and AlexNet classifiers, visual features, class maximisation and adversarial attacks." },
        { category: "C++ · Qt · Simulation", body: "Logic-gate simulator with diagram saving and loading, minterm calculation and VHDL export.", credit: "Team project. Credits: Eric (@eric5512)." },
        { category: "Python · Computer vision", body: "Lightweight tool for labelling images in EAST's training format." },
        { category: "Python · Computer vision", body: "Winner of the bonÀrea Prize at HackEPS 2020: real-time refrigerated-shelf gap detection with YOLOv3 and alerts delivered to a mobile app.", credit: "Team project. Credits: Pol (@polespinasa) and Dani (@Danny-8).", award: "View the award-winning project on Devpost" },
        { category: "C++ · OpenGL · Game", body: "3D maze game with physics, three environments and enemies that plan routes using TSP.", credit: "Team project. Credits: Miguel, Luis, Dani, Juan and Christian." }
      ]
    },
    filters: {
      label: "Filter projects",
      all: "All",
      ai: "AI & vision",
      tools: "Tools",
      robotics: "Robotics",
      games: "Games",
      statusAll: "Showing all 6 archive projects.",
      statusFilteredOne: "Showing 1 project.",
      statusFilteredMany: "Showing {count} projects."
    },
    games: {
      title: "Take a break and play",
      intro: "Two web games you can try directly in your browser.",
      items: [
        {
          category: "Daily word game",
          body: "Guess the daily word by asking yes-or-no questions. The AI answers; you connect the clues. Requires a Google account.",
          cta: "Play Promly",
          mediaLabel: "Play Promly; opens in a new tab"
        },
        {
          category: "3×3 chess puzzle",
          body: "Recreate the board by moving pieces as in chess. Includes daily, endless and online multiplayer modes. Requires a Google account.",
          cta: "Play MiniChess",
          mediaLabel: "Play MiniChess; opens in a new tab"
        }
      ]
    },
    experience: {
      title: "Experience",
      intro: "Applied research, independent development, software and technical teaching.",
      items: [
        {
          role: "Computational Tools Coordinator",
          company: "Universitat de Barcelona · Master's in AI Applied to Financial Markets",
          date: "Oct 2025 — Jul 2026",
          body: "Academic and operational planning, content updates, practical activities and student-progress monitoring in collaboration with the teaching team."
        },
        {
          role: "Independent AI and computer vision consultant and developer",
          company: "Self-employed",
          date: "Jun 2024 — Jul 2026 · Jul 2019 — Jul 2021",
          body: "Design and implementation of generative AI, voice and computer vision solutions, from prototype to AWS deployment."
        },
        {
          role: "Vocational education lecturer",
          company: "Grup Escolar Roca",
          date: "Mar 2022 — present",
          body: "Technical teaching with a practical approach and content structured for understanding and application."
        },
        {
          role: "Computer vision researcher and developer",
          company: "Computer Vision Center",
          date: "Jun 2022 — Mar 2025",
          body: "Development of EcoMate and applied research into 3D reconstruction with 3D cameras, NeRF and ArUco markers."
        },
        {
          role: "Software developer",
          company: "Setting Consultoría en Tecnologías de la Información",
          date: "Oct 2018 — Jan 2019",
          body: "Development of scalable Java 8 ERP applications with JSF and PrimeFaces, WildFly deployments, and unit and integration testing."
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        { degree: "Bachelor's degree in Computer Engineering" },
        { degree: "Higher Technician in Multi-platform Applications Development" },
        { degree: "Technician in Microcomputer Systems and Networks" }
      ]
    },
    contact: {
      label: "Contact",
      title: "Let's talk technology.",
      body: "For proposals, collaborations or technical conversations, reach me by email or LinkedIn.",
      email: "Email"
    },
    footer: {
      line: "AI and computer vision consulting, development and technical teaching.",
      copyright: "© {year} Juan Manuel Camara Diaz."
    },
    ui: {
      skip: "Skip to content",
      navigation: "Primary navigation",
      language: "Change language",
      specialties: "Specialties",
      technologies: "Technologies",
      repository: "Open repository",
      external: "Opens in a new tab",
      backTop: "Back to top"
    }
  }
};

const supportedLanguages = Object.keys(translations);
const languagePaths = { es: "/", ca: "/ca/", en: "/en/" };
const siteOrigin = "https://juanmacaaz.github.io";
let currentLanguage = "es";
let activeFilter = "all";

const getNestedValue = (source, path) => path
  .split(".")
  .reduce((value, key) => (value == null ? undefined : value[key]), source);

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem("portfolio-language", language);
  } catch {
    // The page remains fully usable when storage is disabled.
  }
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const updateFilterStatus = () => {
  const status = document.querySelector("#filter-status");
  if (!status) return;

  const content = translations[currentLanguage].filters;
  const visibleCount = document.querySelectorAll("[data-project]:not([hidden])").length;
  status.textContent = activeFilter === "all"
    ? content.statusAll
    : (visibleCount === 1 ? content.statusFilteredOne : content.statusFilteredMany)
      .replace("{count}", String(visibleCount));
};

const applyLanguage = (language) => {
  const nextLanguage = supportedLanguages.includes(language) ? language : "es";
  const content = translations[nextLanguage];
  currentLanguage = nextLanguage;

  document.documentElement.lang = nextLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(content, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
    else console.error(`[i18n] Missing text: ${nextLanguage}.${element.dataset.i18n}`);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getNestedValue(content, element.dataset.i18nAriaLabel);
    if (typeof value === "string") element.setAttribute("aria-label", value);
    else console.error(`[i18n] Missing label: ${nextLanguage}.${element.dataset.i18nAriaLabel}`);
  });

  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.dataset.language === nextLanguage) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.title = content.meta.title;
  setMetaContent('meta[name="description"]', content.meta.description);
  setMetaContent('meta[property="og:title"]', content.meta.title);
  setMetaContent('meta[property="og:description"]', content.meta.ogDescription);
  setMetaContent('meta[property="og:locale"]', content.meta.locale);

  const localizedUrl = `${siteOrigin}${languagePaths[nextLanguage]}`;
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", localizedUrl);
  setMetaContent('meta[property="og:url"]', localizedUrl);

  const copyright = document.querySelector("[data-copyright]");
  if (copyright) {
    copyright.textContent = content.footer.copyright.replace("{year}", String(new Date().getFullYear()));
  }

  storeLanguage(nextLanguage);
  updateFilterStatus();
};

const initializeLanguage = () => {
  const pathSegment = window.location.pathname.split("/").filter(Boolean)[0];
  const pathLanguage = supportedLanguages.includes(pathSegment) ? pathSegment : "es";
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");

  if (supportedLanguages.includes(requestedLanguage) && requestedLanguage !== pathLanguage) {
    const target = `${languagePaths[requestedLanguage]}${window.location.hash}`;
    window.location.replace(target);
    return;
  }

  if (requestedLanguage) {
    window.history.replaceState({}, "", `${languagePaths[pathLanguage]}${window.location.hash}`);
  }

  applyLanguage(pathLanguage);

  document.querySelectorAll("[data-language]").forEach((link) => {
    link.addEventListener("click", () => storeLanguage(link.dataset.language));
  });
};

const initializeProjectFilters = () => {
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll("[data-project]")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      buttons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      });

      projects.forEach((project) => {
        const categories = project.dataset.categories.split(" ");
        project.hidden = activeFilter !== "all" && !categories.includes(activeFilter);
      });

      updateFilterStatus();
    });
  });

  updateFilterStatus();
};

const initializeRevealAnimations = () => {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  elements.forEach((element) => observer.observe(element));
};

const initializeActiveNavigation = () => {
  if (!("IntersectionObserver" in window)) return;

  const links = [...document.querySelectorAll(".primary-nav a[href^='#']")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (id) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (visible) setActiveLink(visible.target.id);
  }, { rootMargin: "-25% 0px -60%", threshold: [0.01, 0.25, 0.5] });

  sections.forEach((section) => observer.observe(section));
};

initializeLanguage();
initializeProjectFilters();
initializeRevealAnimations();
initializeActiveNavigation();
