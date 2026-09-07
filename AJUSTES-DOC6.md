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

## ✅ Página 2 até o fim — feita

Inclui o setor de Perguntas Frequentes. Só ficou de fora o questionário da
Travessia da Semente, que depende da Ilana.

| Página | O que mudou |
|---|---|
| Cuidados Ayurvédicos | R$ 300 (60 min) e R$ 400 (90 min), no cartão e no modal |
| Shirodhara | "óleo **aquecido** e medicado"; item novo com a divisão do tempo |
| Bússola | "orientação **integrativa** xamânica"; "**Ilana constrói**"; aviso próprio |
| Acompanhamento | aviso próprio; "Investimento total" fora do modal |
| Rodas Celta-Baianas | título, subtítulo, "Roda no Canto da Floresta" |
| Travessia da Semente | título do card, título da página, frase no subtítulo |
| Vem Pra Roda | "Aprenda **elementos para** conduzir…" |
| Biblioteca Viva | campo de e-mail no modal |
| FAQ | 6 páginas ajustadas — ver abaixo |

### O aviso de agenda deixou de ser único

O texto padrão diz "exclusivamente no período da tarde". A **Bússola** e o
**Acompanhamento** são online e a Ilana também atende à noite, então as duas
passaram a ter aviso próprio, via `modalAvisoAgenda`:

> ⚠️ ATENÇÃO: Os atendimentos são realizados nos períodos da tarde e da noite.
> O seu atendimento será agendado para as próximas 4 semanas e, em até 4 dias
> úteis, entraremos em contato para confirmar a data e o horário definitivos.

**Qualquer serviço novo herda o texto da tarde.** Se aceitar outro horário,
precisa do aviso próprio.

### Campo de e-mail

`modalMostrarEmail` nasceu desligado e só a **Biblioteca Viva** liga. Lá o
cadastro é lista de espera, não agendamento — o e-mail é o canal do aviso de
lançamento. Nas páginas de sessão o WhatsApp basta, e um campo a mais só
aumentaria o atrito.

### FAQ

A Ilana escreveu *"mantemos como está lá se eu não citei nada aqui"*, então só
mexemos no que ela citou:

- **"e em locais distintos quando em viagem"** entrou em MASSIXA Essencial,
  Toque da Jurema e Madalena. A Anahata **não** — ela marcou isso explicitamente.
- **"Como agendo?"** passou a nomear o botão em 7 páginas.
- Respostas reescritas: toque da Jurema, público da Madalena, roupa nos
  Ayurvédicos, cabelo e duração no Shirodhara, diferença Reconecta/Colo da Terra
  e preparo nas Imersões, preparo na Bússola, público na Vem Pra Roda,
  promoção na Biblioteca.

⚠️ Ela escreveu **"QUERO MINHA SESSÃO"**, mas os botões foram padronizados antes
para **"Quero agendar a minha sessão"**. Usamos o rótulo real — citar um botão que
não existe confundiria mais do que ajudaria. Nas Imersões o botão diz "imersão", e
a resposta acompanha.

⚠️ O documento diz que o Shirodhara ficaria dentro dos Cuidados Ayurvédicos, mas a
Vera decidiu depois **restabelecer a página própria**. Vale confirmar com a Ilana.

---

## ⏸️ Pendente

- **Questionário da Travessia da Semente** — a Ilana disse que envia em separado.
  Enquanto não chega, o botão "quero aplicar para a mentoria" abre o WhatsApp.
- Mesma pendência vale para a **Vem Pra Roda**: as duas mentorias prometem um
  "Formulário de Aplicação" que ainda não existe. **Resolver antes de divulgar.**
