# Prompt para desenvolvimento do site — Workshop "O Invisível"

> **Como usar:** substitua tudo que estiver entre `{{ }}` antes de enviar. Cole o bloco inteiro (do "PAPEL" até o fim) em um agente de código (Claude, Cursor, v0, Lovable, etc.). Se quiser, anexe também a arte do evento como referência visual.

---

## PAPEL

Você é o designer e desenvolvedor front-end responsável por uma landing page de conversão para um workshop presencial executivo. O cliente já recusou propostas com cara de template. O trabalho precisa ter um ponto de vista visual próprio, derivado do tema do evento — não um layout genérico de evento com gradiente e ícones de estoque.

## OBJETIVO DA PÁGINA

Uma única página (one-page), em português do Brasil, cujo trabalho é levar empresários e líderes comerciais a preencher o formulário de inscrição. Toda decisão de layout, copy e motion deve servir a essa ação.

## STACK E ENTREGA

- HTML5 + CSS puro + JavaScript vanilla. Sem framework, sem build step.
- Três arquivos: `index.html`, `styles.css`, `script.js`. Fontes via Google Fonts.
- Mobile-first. A maior parte do tráfego virá de Instagram e WhatsApp no celular.
- Sem dependências pesadas. Nada de bibliotecas de animação se CSS resolver.

## DIREÇÃO VISUAL

A identidade vem da arte do evento: fundo escuro quase preto com roxo profundo, feixes de luz roxos e dourados em arco, tipografia pesada em caixa alta, dourado reservado para o que importa.

**Paleta (use exatamente estes tokens):**

| Token          | Hex       | Uso                              |
| -------------- | --------- | -------------------------------- |
| `--void`       | `#0A0512` | Fundo principal                  |
| `--deep`       | `#170A2E` | Fundo alternado de seção e cards |
| `--violet`     | `#7B2FBE` | Acento estrutural, bordas, glows |
| `--violet-lit` | `#A855F7` | Destaques, hover, ícones         |
| `--gold`       | `#C8A44D` | Números, preço, CTA, ênfase      |
| `--gold-lit`   | `#E3C16F` | Hover do dourado                 |
| `--paper`      | `#FFFFFF` | Títulos                          |
| `--muted`      | `#C9C0D8` | Corpo de texto                   |

Dourado é acento, não cor de fundo. Se mais de duas coisas na mesma dobra estão douradas, uma delas está errada.

**Tipografia:**

- Display: `Archivo Black` (ou `Anton`) em caixa alta, tracking negativo, para os títulos de seção e o headline. Peso máximo, linhas apertadas.
- Corpo: `Inter`, 400/500, altura de linha 1.6, largura máxima de 65 caracteres.
- Rótulos (eyebrows, labels de bloco): `Inter` 600, caixa alta, tracking +0.15em, em `--gold`.
- Escala de tipo declarada e respeitada. Headline do hero com `clamp()` para escalar do mobile ao desktop sem quebrar.

**Elemento assinatura:** o tema é o que a empresa não está vendo. Construa a página em torno disso: os cinco travamentos entram na tela desfocados e de baixo contraste e ganham foco e nitidez conforme o scroll os revela — o invisível virando visível. Faça isso bem em um lugar só; o resto da página fica quieto e disciplinado. Respeite `prefers-reduced-motion` entregando o estado final sem transição.

**Não faça:** carrossel de depoimentos falsos, contador regressivo piscando, ícones genéricos de foguete/alvo/troféu, seção "sobre nós" longa, três colunas de features com ícone-título-parágrafo. Também não reproduza o QR Code da arte impressa: no site ele é redundante, o botão faz esse trabalho.

## ESTRUTURA DAS SEÇÕES

A ordem abaixo é a arquitetura da página. Siga-a.

### 1. Header

Fixo no topo, fundo translúcido com blur ao rolar. Logos Descomplicouti + Level Up à esquerda ({{ARQUIVOS DOS LOGOS}}), botão "Garantir minha vaga" à direita, abrindo o formulário externo. No mobile, só os logos e o botão.

### 2. Hero

- Eyebrow em dourado: `{{DATA}} · {{HORÁRIO}} · {{CIDADE/UF}}`
- Headline: **O INVISÍVEL** (branco) **QUE FREIA SUA EMPRESA E SUAS VENDAS** (dourado)
- Subtítulo: "Um workshop para empresários e líderes que querem parar de **crescer no improviso** e começar a crescer com estratégia e clareza."
- CTA primário: "Garantir minha vaga" → abre o formulário de inscrição
- Selo de escassez, discreto, abaixo do botão: `Apenas {{NÚMERO}} vagas`
- Foto das três facilitadoras à direita no desktop, recortada sobre o fundo escuro, com os feixes de luz roxos/dourados atrás. No mobile, a foto vai abaixo do texto.

### 3. Os travamentos

Rótulo: "MUITAS EMPRESAS TRAVAM POR:" — "TRAVAM" em roxo claro.

Cinco itens, cada um com ícone de linha fina (não preenchido):

1. Decisões emocionais
2. Micro gestão
3. Cultura reativa
4. Vendas sem previsibilidade
5. Processos desconectados

É aqui que vive o elemento assinatura (revelação por foco). Não numere os itens: não são uma sequência.

### 4. As duas trilhas

Dois cards lado a lado no desktop, empilhados no mobile. Cada card tem borda de 1px com glow sutil na cor de seu bloco.

**Card 1 — DESCOMPLICOUTI** (acento roxo)
Subtítulo: "Os sabotadores invisíveis que limitam crescimento, vendas e liderança."

- Sabotadores mentais na liderança
- Impacto emocional nas decisões
- Excesso de controle e microgestão
- Procrastinação estratégica
- Cultura do bombeiro corporativo
- Vieses que travam crescimento
- Neurociência da performance e comportamento empresarial

Rodapé destacado do card: "Aplicação do teste de sabotadores mentais via QR Code."

**Card 2 — LEVEL UP** (acento dourado)
Subtítulo: "CRM não é sistema. É estratégia de crescimento."

- CRM como inteligência de negócio
- Previsibilidade comercial
- Perda de oportunidades por falta de processo
- Dados sem estratégia
- Vendas estruturadas vs. vendas no improviso
- Relacionamento e retenção de clientes
- Crescimento comercial sustentável

### 5. Quem conduz

Três blocos com foto, nome, cargo e duas ou três linhas de bio. Conteúdo em {{NOMES E BIOS DAS FACILITADORAS}}. Tratamento visual sóbrio: foto em preto e branco com leve tint roxo, virando cor no hover.

### 6. Formato e o que você leva

Faixa horizontal com quatro blocos separados por divisores verticais finos:

- **Para quem é** — Empresários, diretores, líderes comerciais e gestores de vendas.
- **Formato** — Evento presencial executivo. **4 horas.** Welcome coffee + conteúdo prático + painel + teste + networking final.
- **Você leva** — Clareza sobre o que está travando seu negócio, insights práticos e aplicação do teste de sabotadores mentais via QR Code.
- **Investimento** — **R$ 97,00**, em display grande e dourado. É o argumento mais forte da página depois do headline; trate como tal.

### 7. Data e local

Bloco de respiro, centralizado, tipografia grande: `{{DATA POR EXTENSO}}` · `{{HORÁRIO}}` · `{{LOCAL E ENDEREÇO}}`. {{SE O ENDEREÇO SÓ FOR DIVULGADO AOS INSCRITOS, DIGA ISSO AQUI}}. Inclua mapa embed leve ou link para o Google Maps, se o endereço for público.

### 8. Frase de fechamento

Seção de alto contraste, moldura fina dourada, texto grande:

"Sua empresa não trava só por falta de estratégia.
**Às vezes, ela trava pelo que ninguém está vendo.**"

### 9. Inscrição

Não há formulário no site. A inscrição acontece em um formulário externo (Respondi): `{{LINK DO FORMULÁRIO RESPONDI}}`.

Regras para todos os CTAs da página:

- Todos apontam para a mesma URL, com `target="_blank"` e `rel="noopener noreferrer"`.
- Todos usam o mesmo rótulo: "Garantir minha vaga". Nada de variações como "Quero me inscrever" ou "Saiba mais" — um botão, um nome, do topo ao rodapé.
- A URL fica isolada em uma constante no topo do `script.js` e é aplicada aos links no carregamento, para trocar em um lugar só.
- Cada botão carrega `data-cta="header|hero|final"` e dispara um evento de clique para `dataLayer` (ou `gtag`, se existir), já que não há submit na página para medir. Se quiser saber qual botão converte, acrescente `?utm_source=site&utm_content=hero` à URL de cada posição.

Bloco de conversão final, logo antes do rodapé:

- Rótulo em dourado: "GARANTA SUA VAGA"
- Reforço de escassez: "Vagas limitadas — apenas {{NÚMERO}} lugares."
- Preço repetido em display grande: **R$ 97,00**
- Botão principal, o maior da página
- Em texto pequeno abaixo do botão: aviso de que o link leva ao formulário de inscrição, para o usuário não estranhar sair do site

O consentimento LGPD e os campos de qualificação (empresa, cargo, porte) ficam dentro do formulário Respondi, não no site.

### 10. Rodapé

Logos, {{E-MAIL}}, {{WHATSAPP}}, {{INSTAGRAM}}, {{RAZÃO SOCIAL E CNPJ}}, link de política de privacidade, direitos reservados. Botão flutuante de WhatsApp no canto inferior direito, discreto.

## PADRÃO DE QUALIDADE

- Contraste mínimo 4.5:1 para texto sobre fundo escuro. Confira o cinza do corpo.
- Foco de teclado visível em todos os elementos interativos. Navegação completa por Tab.
- `prefers-reduced-motion` respeitado em todas as animações.
- Imagens com `alt` descritivo, `loading="lazy"` fora da primeira dobra, servidas em WebP.
- `<title>`, meta description, Open Graph e Twitter Card preenchidos para o link renderizar bem no WhatsApp e no Instagram. Favicon incluído.
- Scroll suave nas âncoras. Header não pode cobrir o alvo da âncora.
- Testado em 360px, 768px e 1440px.

## O QUE ENTREGAR

Os três arquivos completos e funcionais, prontos para subir em qualquer hospedagem estática. Antes de escrever o código, apresente em até dez linhas o plano de design (paleta aplicada, escala tipográfica, conceito de layout e o elemento assinatura) e diga o que você mudaria se algo acima parecer a solução padrão para qualquer evento.

---

## Checklist do que preencher antes de enviar

- [ ] Data, horário e cidade/UF
- [ ] Local e endereço (ou aviso de que será informado aos inscritos)
- [ ] Número de vagas
- [ ] Nomes, cargos e bios das três facilitadoras
- [ ] Arquivos de logo (Descomplicouti e Level Up) e fotos
- [ ] Link final do formulário no Respondi (criar o formulário e copiar a URL)
- [ ] Campos e consentimento LGPD configurados dentro do Respondi
- [ ] Próximo passo dentro do Respondi (redireciona para pagamento? mensagem de confirmação? WhatsApp?)
- [ ] E-mail, WhatsApp, Instagram, razão social e CNPJ para o rodapé
- [ ] Política de privacidade publicada, para linkar no rodapé
