let dados = [
    {
        nome: 'Adaptabilidade',
        resumo: 'Capacidade de se ajustar a novas situações e mudanças.',
        jogosFisicos: ['Ticket to Ride', '7 Wonders', 'Carcassonne'],
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light']
    },
    {
        nome: 'Adaptabilidade a Mudanças',
        resumo: 'Habilidade de se flexibilizar e responder positivamente a mudanças.',
        jogosFisicos: ['Pandemic', 'Codenames', 'Dixit'],
        jogosDigitais: ['Minecraft', 'Factorio', 'Europa Universalis IV']
    },
    {
        nome: 'Agilidade',
        resumo: 'Capacidade de agir rapidamente e eficientemente.',
        jogosFisicos: ['Catan', 'Splendor', 'Azul'],
        jogosDigitais: ['Starcraft II', 'Dota 2', 'Rocket League']
    },
    {
        nome: 'Análise de Dados',
        resumo: 'Habilidade de coletar, organizar e interpretar dados.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'],
        jogosDigitais: ['Kerbal Space Program', 'Portal 2', 'EVE Online']
    },
    {
        nome: 'Análise de Processos',
        resumo: 'Capacidade de examinar e otimizar processos.',
        jogosFisicos: ['Ingenious', 'Terraforming Mars', 'A Feast for Odin'],
        jogosDigitais: ['Oxygen Not Included', 'RimWorld', 'Project Zomboid']
    },
    {
        nome: 'Aprendizado Contínuo',
        resumo: 'Proatividade em buscar e adquirir novos conhecimentos.',
        jogosFisicos: ['Dixit', 'Codenames', '7 Wonders Duel'], // Jogos que estimulam a criatividade e a resolução de problemas
        jogosDigitais: ['Minecraft', 'Factorio', 'Kerbal Space Program'] // Jogos que incentivam a experimentação e a descoberta
    },
    {
        nome: 'Atenção aos Detalhes',
        resumo: 'Capacidade de identificar e corrigir erros, observando cada aspecto de uma tarefa.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'], // Jogos que exigem concentração e observação
        jogosDigitais: ['Portal 2', 'Outer Wilds', 'The Witness'] // Jogos com puzzles que exigem atenção aos detalhes
    },
    {
        nome: 'Autogestão',
        resumo: 'Habilidade de organizar o próprio trabalho e cumprir prazos.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem tomada de decisões estratégicas
    },
    {
        nome: 'Automação de Processos',
        resumo: 'Capacidade de utilizar ferramentas para automatizar tarefas repetitivas.',
        jogosFisicos: ['Ingenious', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que envolvem otimização de recursos e planejamento
        jogosDigitais: ['Factorio', 'Oxygen Not Included', 'RimWorld'] // Jogos que exigem construção e otimização de sistemas
    },
    {
        nome: 'Cibersegurança',
        resumo: 'Conhecimento sobre proteção de dados e sistemas.',
        jogosFisicos: ['Decrypto', 'Codenames', 'The Resistance: Avalon'], // Jogos que envolvem comunicação secreta e detecção de intrusos
        jogosDigitais: ['Hacknet', 'Uplink', 'Cyberpunk 2077'] // Jogos que simulam ambientes de hacking e segurança cibernética
    },
    {
        nome: 'Comunicação',
        resumo: 'Capacidade de transmitir e receber informações de forma clara e eficaz.',
        jogosFisicos: ['Codenames', 'Dixit', 'The Resistance: Avalon'], // Jogos que exigem comunicação estratégica e dedução
        jogosDigitais: ['Among Us', 'Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam a comunicação e o trabalho em equipe
    },
    {
        nome: 'Comunicação Não Verbal',
        resumo: 'Habilidade de se expressar e interpretar mensagens através da linguagem corporal e outros sinais.',
        jogosFisicos: ['Dixit', 'Pictionary', 'Charades'], // Jogos que focam na expressão não verbal e na interpretação de sinais
        jogosDigitais: ['Among Us', 'Emojis', 'Heads Up!'] // Jogos que utilizam emojis e mímica para transmitir informações
    },
    {
        nome: 'Comunicação Técnica',
        resumo: 'Capacidade de explicar conceitos complexos de forma clara e simples.',
        jogosFisicos: ['Decrypto', 'Codenames', 'The Mind'], // Jogos que exigem a transmissão de informações de forma precisa e concisa
        jogosDigitais: ['Keep Talking and Nobody Explodes', 'Turing Test', 'Human Resource Machine'] // Jogos que envolvem a resolução de problemas e a comunicação de instruções
    },
    {
        nome: 'Conhecimento Técnico',
        resumo: 'Domínio de ferramentas, tecnologias e técnicas específicas de uma área.',
        jogosFisicos: ['Ingenious', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Factorio', 'Oxygen Not Included', 'Kerbal Space Program'] // Jogos que simulam a construção e gestão de sistemas complexos
    },
    {
        nome: 'Criatividade',
        resumo: 'Capacidade de gerar novas ideias e soluções inovadoras.',
        jogosFisicos: ['Dixit', 'Codenames', 'Concept'], // Jogos que estimulam a associação de ideias e a criação de narrativas
        jogosDigitais: ['Minecraft', 'Stardew Valley', 'Terraria'] // Jogos que permitem a construção livre e a expressão artística
    },
    {
        nome: 'Cultura de Segurança',
        resumo: 'Valorização da segurança e prevenção de riscos.',
        jogosFisicos: ['Pandemic', 'The Resistance: Avalon'], // Jogos que envolvem trabalho em equipe e prevenção de crises
        jogosDigitais: ['Keep Talking and Nobody Explodes', 'FTL: Faster Than Light', 'Subnautica'] // Jogos que exigem gestão de riscos e tomada de decisões sob pressão
    },
    {
        nome: 'Delegação',
        resumo: 'Capacidade de distribuir tarefas e responsabilidades.',
        jogosFisicos: ['7 Wonders Duel', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem tomada de decisões estratégicas e gestão de recursos
    },
    {
        nome: 'Design Thinking',
        resumo: 'Habilidade de solucionar problemas de forma criativa e centrada no usuário.',
        jogosFisicos: ['Concept', 'Dixit', 'Codenames'], // Jogos que estimulam a associação de ideias e a criação de narrativas
        jogosDigitais: ['Minecraft', 'Stardew Valley', 'Terraria'] // Jogos que permitem a construção livre e a expressão artística
    },
    {
        nome: 'Diversidade e Inclusão',
        resumo: 'Valorização da diversidade e promoção de um ambiente inclusivo.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem a construção de confiança e a identificação de aliados
        jogosDigitais: ['Among Us', 'Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Domínio de Ferramentas',
        resumo: 'Mastery of tools and technologies related to a specific area.',
        jogosFisicos: ['Ingenious', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que envolvem planejamento e gestão de recursos
        jogosDigitais: ['Factorio', 'Oxygen Not Included', 'Kerbal Space Program'] // Jogos que simulam a construção e gestão de sistemas complexos
    },
    {
        nome: 'Empatia',
        resumo: 'Capacidade de se colocar no lugar do outro e compreender suas emoções e perspectivas.',
        jogosFisicos: ['Dixit', 'Codenames', 'The Mind'], // Jogos que exigem comunicação e compreensão das intenções dos outros
        jogosDigitais: ['Among Us', 'Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Ética',
        resumo: 'Conjunto de princípios morais que guiam o comportamento de um indivíduo.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem confiança, traição e tomada de decisões éticas
        jogosDigitais: ['Papers, Please', 'This War of Mine'] // Jogos que abordam dilemas morais e as consequências das escolhas
    },
    {
        nome: 'Ética Profissional',
        resumo: 'Conjunto de princípios morais que guiam o comportamento de um profissional em seu ambiente de trabalho.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem confiança, traição e tomada de decisões éticas
        jogosDigitais: ['Papers, Please', 'This War of Mine'] // Jogos que abordam dilemas morais e as consequências das escolhas
    },
    {
        nome: 'Flexibilidade',
        resumo: 'Capacidade de se adaptar a diferentes situações e mudanças.',
        jogosFisicos: ['Ticket to Ride', '7 Wonders', 'Carcassonne'], // Jogos que exigem adaptação a diferentes cenários e planejamento estratégico
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem tomada de decisões estratégicas e adaptação a situações imprevisíveis
    },
    {
        nome: 'Flexibilidade Cognitiva',
        resumo: 'Capacidade de mudar de perspectiva e considerar diferentes pontos de vista.',
        jogosFisicos: ['Concept', 'Dixit', 'Codenames'], // Jogos que estimulam a associação de ideias e a criação de narrativas
        jogosDigitais: ['Portal 2', 'Outer Wilds'], // Jogos que exigem pensamento lateral e resolução de problemas
    },
    {
        nome: 'Gerenciamento de Conflitos',
        resumo: 'Habilidade de lidar com situações de desacordo de forma construtiva.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem a construção de confiança e a identificação de aliados
        jogosDigitais: ['Among Us', 'Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Gerenciamento de Conflitos Virtuais',
        resumo: 'Habilidade de lidar com conflitos em ambientes online.',
        jogosFisicos: 'Não se aplica', // Jogos físicos não se aplicam a ambientes virtuais
        jogosDigitais: ['Among Us', 'Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação em ambientes virtuais
    },
    {
        nome: 'Gerenciamento de Mudanças',
        resumo: 'Capacidade de lidar com mudanças e transições de forma eficaz.',
        jogosFisicos: ['Pandemic', '7 Wonders', 'Carcassonne'], // Jogos que exigem adaptação a diferentes cenários e planejamento estratégico
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem tomada de decisões estratégicas e adaptação a situações imprevisíveis
    },
    {
        nome: 'Gestão da Qualidade',
        resumo: 'Capacidade de garantir que produtos e serviços atendam aos padrões de qualidade.',
        jogosFisicos: ['Ingenious', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que envolvem planejamento e otimização de recursos
        jogosDigitais: ['Factorio', 'Oxygen Not Included'] // Jogos que exigem construção e otimização de sistemas
    },
    {
        nome: 'Gestão de Projetos',
        resumo: 'Capacidade de planejar, organizar e executar projetos.',
        jogosFisicos: ['Ticket to Ride', '7 Wonders', 'Carcassonne'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem tomada de decisões estratégicas e gestão de recursos
    },
    {
        nome: 'Gestão de Riscos',
        resumo: 'Capacidade de identificar, avaliar e mitigar riscos.',
        jogosFisicos: 'Pandemic', // Jogo que envolve a gestão de crises e a prevenção de pandemias
        jogosDigitais: ['FTL: Faster Than Light', 'Subnautica'] // Jogos que exigem gestão de recursos e tomada de decisões sob pressão
    },
    {
        nome: 'Gestão do Tempo',
        resumo: 'Habilidade de organizar e priorizar tarefas.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas e gestão de tempo
    },
    {
        nome: 'Inovação',
        resumo: 'Capacidade de gerar novas ideias e soluções.',
        jogosFisicos: ['Concept', 'Dixit', 'Codenames'], // Jogos que estimulam a associação de ideias e a criação de narrativas
        jogosDigitais: ['Minecraft', 'Stardew Valley', 'Terraria'] // Jogos que permitem a construção livre e a expressão artística
    },
    {
        nome: 'Inteligência Emocional',
        resumo: 'Capacidade de reconhecer e gerenciar as próprias emoções e as dos outros.',
        jogosFisicos: ['Dixit', 'Codenames', 'The Mind'], // Jogos que exigem comunicação e compreensão das intenções dos outros
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Liderança',
        resumo: 'Capacidade de influenciar e motivar pessoas.',
        jogosFisicos: ['7 Wonders Duel', 'Splendor', 'Azul'], // Jogos que exigem tomada de decisões estratégicas e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas e gestão de recursos
    },
    {
        nome: 'Mentoria e Coaching',
        resumo: 'Capacidade de orientar e desenvolver outras pessoas.',
        jogosFisicos: ['Dixit', 'Codenames', 'The Mind'], // Jogos que exigem comunicação e compreensão das intenções dos outros
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Negociação',
        resumo: 'Habilidade de chegar a acordos mutuamente benéficos.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem negociação, blefe e construção de confiança
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Organização',
        resumo: 'Capacidade de planejar, organizar e gerenciar tarefas e recursos.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas e gestão de tempo
    },
    {
        nome: 'Orientação a Clientes',
        resumo: 'Foco em atender às necessidades e expectativas dos clientes.',
        jogosFisicos: ['Dixit', 'Codenames'], // Jogos que exigem compreensão das preferências e expectativas dos outros
        jogosDigitais: ['Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Orientação a Resultados',
        resumo: 'Foco em alcançar metas e objetivos.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos para alcançar objetivos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas para alcançar objetivos
    },
    {
        nome: 'Orientação ao Cliente/Paciente',
        resumo: 'Foco em atender às necessidades e expectativas dos clientes ou pacientes.',
        jogosFisicos: ['Dixit', 'Codenames'], // Jogos que exigem compreensão das preferências e expectativas dos outros
        jogosDigitais: ['Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Orientação para Detalhes',
        resumo: 'Capacidade de identificar e corrigir erros, observando cada aspecto de uma tarefa.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'], // Jogos que exigem concentração e observação
        jogosDigitais: ['Portal 2', 'Outer Wilds', 'The Witness'] // Jogos com puzzles que exigem atenção aos detalhes
    },
    {
        nome: 'Orientação para o Cliente',
        resumo: 'Foco em atender às necessidades e expectativas dos clientes ou pacientes.',
        jogosFisicos: ['Dixit', 'Codenames'], // Jogos que exigem compreensão das preferências e expectativas dos outros
        jogosDigitais: ['Overcooked!', 'Keep Talking and Nobody Explodes'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Orientação para Resultados',
        resumo: 'Foco em alcançar metas e objetivos.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e gestão de recursos para alcançar objetivos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas para alcançar objetivos
    },
    {
        nome: 'Paciencia',
        resumo: 'Capacidade de manter a calma e a perseverança em situações desafiadoras.',
        jogosFisicos: ['The Mind', 'Azul'], // Jogos que exigem concentração e paciência
        jogosDigitais: ['Slay the Spire', 'FTL: Faster Than Light'] // Jogos que exigem repetição e aprendizado com os erros
    },
    {
        nome: 'Pensamento Analítico',
        resumo: 'Capacidade de decompor problemas em partes menores e encontrar soluções lógicas.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'], // Jogos que exigem raciocínio lógico e dedução
        jogosDigitais: ['Portal 2', 'Outer Wilds', 'The Witness'] // Jogos com puzzles que exigem pensamento lógico
    },
    {
        nome: 'Pensamento Computacional',
        resumo: 'Capacidade de pensar como um computador, resolvendo problemas de forma lógica e estruturada.',
        jogosFisicos: 'Ingenious', // Jogo que envolve lógica e resolução de problemas
        jogosDigitais: ['Human Resource Machine', 'Turing Test', 'Factorio'] // Jogos que simulam programação e resolução de problemas
    },
    {
        nome: 'Pensamento Crítico',
        resumo: 'Capacidade de avaliar informações, identificar falhas e tomar decisões fundamentadas.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'], // Jogos que exigem raciocínio lógico e dedução
        jogosDigitais: ['Portal 2', 'Outer Wilds', 'The Witness'] // Jogos com puzzles que exigem pensamento lógico
    },
    {
        nome: 'Pensamento Estratégico',
        resumo: 'Capacidade de planejar e tomar decisões a longo prazo.',
        jogosFisicos: ['7 Wonders', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que exigem planejamento estratégico e gestão de recursos
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas
    },
    {
        nome: 'Pensamento Sistêmico',
        resumo: 'Capacidade de entender como diferentes partes de um sistema se conectam e interagem.',
        jogosFisicos: ['Terraforming Mars', 'A Feast for Odin'], // Jogos que envolvem sistemas complexos e interações entre diferentes elementos
        jogosDigitais: ['Factorio', 'Oxygen Not Included'] // Jogos que simulam sistemas complexos e interações entre diferentes elementos
    },
    {
        nome: 'Persuasão',
        resumo: 'Capacidade de influenciar e convencer outras pessoas.',
        jogosFisicos: ['The Resistance: Avalon', 'Secret Hitler'], // Jogos que envolvem negociação, blefe e construção de confiança
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Proatividade',
        resumo: 'Capacidade de tomar iniciativa e agir de forma autônoma.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e tomada de decisões
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas e proatividade
    },
    {
        nome: 'Relacionamento Interpessoal',
        resumo: 'Capacidade de construir e manter relacionamentos saudáveis.',
        jogosFisicos: ['Dixit', 'Codenames', 'The Mind'], // Jogos que exigem comunicação e compreensão das intenções dos outros
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    },
    {
        nome: 'Resiliência',
        resumo: 'Capacidade de se recuperar de dificuldades e adversidades.',
        jogosFisicos: 'Pandemic', // Jogo que envolve a gestão de crises e a prevenção de pandemias
        jogosDigitais: ['FTL: Faster Than Light', 'Slay the Spire'] // Jogos que exigem lidar com situações desafiadoras e tomar decisões sob pressão
    },
    {
        nome: 'Resolução de Problemas',
        resumo: 'Capacidade de identificar e solucionar problemas de forma eficaz.',
        jogosFisicos: ['Sherlock Holmes: Detective Consultant', 'The Mind', 'Decrypto'], // Jogos que exigem raciocínio lógico e dedução
        jogosDigitais: ['Portal 2', 'Outer Wilds', 'The Witness'] // Jogos com puzzles que exigem pensamento lógico
    },
    {
        nome: 'Responsabilidade',
        resumo: 'Capacidade de cumprir com suas obrigações e ser confiável.',
        jogosFisicos: ['Ticket to Ride', 'Splendor', 'Azul'], // Jogos que exigem planejamento e cumprimento de regras
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem planejamento e gestão de recursos
    },
    {
        nome: 'Segurança',
        resumo: 'Valorização da segurança e prevenção de riscos.',
        jogosFisicos: 'Pandemic', // Jogo que envolve a gestão de crises e a prevenção de pandemias
        jogosDigitais: 'Subnautica' // Jogo que exige exploração e sobrevivência em um ambiente hostil
    },
    {
        nome: 'Sustentabilidade',
        resumo: 'Consciência ambiental e práticas sustentáveis.',
        jogosFisicos: 'Terraforming Mars', // Jogo que envolve a terraformação de Marte e a gestão de recursos
        jogosDigitais: 'Oxygen Not Included' // Jogo que exige a gestão de recursos em um ambiente hostil
    },
    {
        nome: 'Tomada de Decisão',
        resumo: 'Capacidade de analisar informações e tomar decisões assertivas.',
        jogosFisicos: ['7 Wonders', 'Terraforming Mars', 'A Feast for Odin'], // Jogos que exigem planejamento estratégico e tomada de decisões
        jogosDigitais: ['Civilization VI', 'Slay the Spire'] // Jogos que exigem tomada de decisões estratégicas
    },
    {
        nome: 'Trabalho em Equipe',
        resumo: 'Capacidade de colaborar com outros para alcançar objetivos comuns.',
        jogosFisicos: ['Dixit', 'Codenames', 'The Resistance: Avalon'], // Jogos que exigem comunicação e trabalho em equipe
        jogosDigitais: ['Among Us', 'Overcooked!'] // Jogos que enfatizam o trabalho em equipe e a comunicação
    }
];
