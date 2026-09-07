# Mapa do documento 6 de ajustes da Ilana

Arquivo **"CATÁLOGO MASSIXA ajustes para Auricélio 6.docx"**, 177 linhas.

Criado em 07/09/2026

> **O documento não tem quebras de página marcadas.** A divisão por "página" foi
> estimada pela contagem de caracteres (~3.000–3.500 por página A4). A página 1
> vai do início até o fim das Imersões; a seção seguinte começa em ~4.000.

---

## ✅ Página 1 — feita (commit `4dd5c87`)

**Seletor de período sai de todos os botões.** A Ilana só atende de tarde, então
"qual período prefere?" oferecia uma escolha inexistente. No lugar entrou o aviso
sobre a agenda e a pergunta de urgência, com campo aberto que vai na mensagem do
WhatsApp. Vale para as **9 páginas de sessão**; as outras 6 não têm o bloco.
A prop virou `modalMostrarAgenda` (era `modalMostrarPeriodo`).

O texto do aviso foi refinado depois (commit `2346256`) e hoje é:
*"⚠️ ATENÇÃO: As sessões são realizadas exclusivamente no período da tarde. O seu
atendimento será agendado para as próximas 4 semanas e, em até 4 dias úteis,
entraremos em contato para confirmar a data e o horário definitivos."*

| Página | O que mudou |
|---|---|
| MASSIXA Essencial | subtítulo novo |
| Madalena | subtítulo novo; valores para R$ 350 (60 min) e R$ 440 (90 min) |
| Anahata Terra | lista do que está incluído |
| Imersões | título, subtítulo, texto principal, La Loba, dois pares novos de transformação, modal |

⚠️ Na Madalena, os valores apareciam em **dois lugares** — o cartão de preço e as
modalidades do modal, que levam o preço para dentro da mensagem do WhatsApp. O
documento só citava o cartão; corrigi os dois.

---

## ⬅️ Página 2 em diante — pendente

### Cuidados Plenamente Ayurvédicos
Valores para **R$ 300** (60 min) e **R$ 400** (90 min). Lembrar de trocar também
nas modalidades do modal, como aconteceu na Madalena.

### Shirodhara
- Subtítulo ganha "óleo **aquecido** e medicado"
- Texto principal idem
- Lista do que está incluído ganha um item novo com a divisão do tempo:
  10 a 20 min de escuta prévia; 30 min de carregamento de óleo; 10 min de toque
  craniano e fechamento

### Bússola
- Subtítulo: "escuta e orientação **integrativa** xamânica"
- 3º parágrafo passa a dizer "**Ilana constrói** um roteiro personalizado"
- ⚠️ **Períodos disponíveis: tarde/noite.** Conflita com o aviso global que diz
  "exclusivamente no período da tarde" — a Bússola é online e aceita noite.
  Vai precisar de um aviso próprio nessa página (a prop `modalAvisoAgenda` já existe).

### Acompanhamento Contínuo
- Mesma questão: tarde/noite, sem manhãs
- ⚠️ **Tirar o "Investimento total" do modal**: mostra R$ 134,00 fixo, mas o valor
  depende da frequência. Basta `modalMostrarValor={false}`.

### Rodas Celta-Baianas
- Título: "Fortalecimento feminino nas Rodas Celta-Baianas"
- Subtítulo: "fortalecimento e **deleite**" (hoje está "desfrute")
- No modal, a modalidade "Roda no Instituto" vira **"Roda no Canto da Floresta"**

### Travessia da Semente (Mentoria Cuidado Autoral)
- Título do card: "Mentoria Cuidado Autoral: Travessia da Semente"
- Título da página: "Fortaleça sua identidade terapêutica na Travessia da Semente:
  Mentoria Cuidado Autoral"
- Subtítulo ganha: "Sair do básico, do comum, do igual. Tomar um prumo mais
  autêntico, aprimorando seu cuidado e sua comunicação."
- ⏸️ O questionário do botão ela vai enviar em separado

### Mentoria Vem Pra Roda, Mulher!
- Título: "Aprenda **elementos para** conduzir Rodas Celta-Baianas em Vem Pra Roda, Mulher!"

### Biblioteca Viva
- Incluir **campo de e-mail** no formulário de contato (o modal hoje só tem nome
  e WhatsApp)

### Perguntas Frequentes
Bloco final do documento, a partir da linha 118. Ela diz: *"mantemos como está lá
se eu não citei nada aqui"*. Traz ajustes por serviço — MASSIXA Essencial, Toque
da Jurema, Anahata Terra, Cuidados Ayurvédicos, Shirodhara, Vem Pra Roda,
Biblioteca Viva. **Ainda não lido em detalhe.**
