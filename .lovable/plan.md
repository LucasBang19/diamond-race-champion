

# Pagina Interna - /interna

## Resumo
Criar uma nova pagina completa em `/interna` com todas as informacoes detalhadas do desafio Corrida Diamond, incluindo premios, termometro de meta, ranking, sistema de pontuacao com todas as camadas, regras oficiais e bonus.

## Estrutura da Pagina

A pagina sera dividida em 6 blocos principais, seguindo o mesmo estilo visual (dark/gold) da pagina principal:

1. **Hero** - Titulo, foto do carro + premios, link para suporte
2. **Termometro da Meta** - Barra de progresso visual (460 alunos), link para regulamento
3. **Ranking Oficial** - Placeholder para ranking mensal/semanal em tempo real
4. **Pontuacao** - Todas as 4 camadas de pontuacao com tabelas detalhadas, bonus e regras de comprovacao
5. **Bonus Turbos** - Acoes surpresa e embaixadores
6. **Regras Oficiais** - Periodo, condicoes, integridade, direito de ajuste

## Detalhes Tecnicos

### Arquivos a criar:
- `src/pages/Interna.tsx` - Pagina principal com todos os 6 blocos

### Arquivos a modificar:
- `src/App.tsx` - Adicionar rota `/interna`
- `src/contexts/LanguageContext.tsx` - Adicionar traducoes para a nova pagina (PT/ES)

### Componentes reutilizados:
- Mesmos estilos CSS ja existentes (`btn-gold`, `section-dark`, `prize-card`, `gold-divider`, `text-gold`)
- `LanguageSelector` no topo
- `Footer` no rodape
- Assets existentes (`bmw-hero.png`)

### Elementos visuais especificos:
- **Termometro**: Barra de progresso estilizada com gradiente dourado mostrando meta de 460 alunos
- **Tabelas de pontuacao**: Cards/tabelas com bordas douradas para cada camada (Comunidade SMA, Diamond, Stratify)
- **Accordion/Collapsible**: Para organizar as 4 camadas de pontuacao de forma limpa
- **Icones**: Emojis do conteudo original para destacar cada camada

### Pontuacao - Camadas:
1. Camada 1: Venda da Comunidade SMA (Afiliado) - tabela 3 colunas
2. Camada 2: Venda como Afiliado + Bonus por faturamento
3. Camada 3: Permanencia, Ativacao e Avanco - tabela 5 colunas + bonus semestral
4. Camada 4: Visibilidade e Prova Social - tabelas por nivel

### Links externos:
- WhatsApp suporte: `https://wa.me/555197062246`
- Regulamento, afiliacao, depoimentos: Placeholder links (a definir)

### Internacionalizacao:
- Todo o conteudo textual sera adicionado ao `LanguageContext` com traducoes PT/ES
- Dado o volume de texto, as traducoes serao organizadas com prefixo `int.` (ex: `int.hero.title`, `int.b2.title`)

