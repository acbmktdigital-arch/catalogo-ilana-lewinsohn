# Mapa do documento 2 de ajustes da Ilana

Levantamento do que o arquivo **"CATÁLOGO MASSIXA ajustes para Auricélio 2.docx"** pede,
comparado com o que o site tem hoje.

Criado em 25/08/2026 · atualizado em 25/08/2026

---

## Bloco 1 — Gerais

| # | O que ela pede | Situação |
|---|---|---|
| 1.1 | Eliminar a seção "O que está incluso" | 🚫 **Vera decidiu manter** por enquanto |
| 1.2 | Eliminar Perguntas Frequentes | 🚫 **Vera decidiu manter** por enquanto |
| 1.3 | Listas com uma única frase por item | ✅ resolvido — os pares *antes → depois* já são uma frase de cada lado, e a Vera decidiu manter essa estrutura |
| 1.4 | Eliminar emojis, deixar clean | ✅ feito |
| 1.5 | Eliminar "Sobre sua terapeuta" das páginas | ✅ feito |
| 1.6 | Link "Quer saber mais sobre sua terapeuta?" | ⏸️ **esperando o site existir** |
| 1.7 | Rodapé: "feito com o Catálogo Holístico e com [empresa]" | ⚠️ **falta o nome da empresa** — a primeira parte já voltou |
| 1.8 | Bloco de ambiente e materiais bem visível | ✅ feito |

### Sobre o 1.8 — como ficou

Entrou como **2º grupo dentro do card "O que está incluído"**, separado por um fio
dourado e pela etiqueta "AMBIENTE E MATERIAIS". Primeiro tentamos uma seção própria,
mas ficaram duas listas iguais em sequência e a Vera não gostou.

Duas variantes, definidas por página com a prop `ambiente`:

| Variante | Linhas | Onde |
|---|---|---|
| `"completo"` | as 4 | MASSIXA Essencial, Toque da Jurema, Madalena, Anahata Terra, Cuidados Ayurvédicos, Shirodhara, Imersões |
| `"curto"` | só ambiente e materiais | Rodas Celta-Baianas, Vivências e Retiros |
| *(ausente)* | nenhuma | Bússola, Acompanhamento, Biblioteca, Botica |

O texto fica em `lib/content.ts` (`ambientePresencial`) — a versão curta usa as duas
primeiras linhas da mesma lista, então editar num lugar vale para as nove páginas.

**Motivo do corte:** as linhas 3 e 4 falam de óleo aquecido e manta térmica, que
descrevem mesa de massagem — não cabem em roda de mulheres nem em vivência de grupo,
e não fazem sentido em atendimento online ou em produto.

---

## Bloco 2 — Home ✅ concluído

| # | O que ela pede | Situação |
|---|---|---|
| 2.1 | "Seja bem-**vinda**!" | ✅ |
| 2.2 | Descrição nova | ✅ |
| 2.3 | Descrição logo abaixo do nome | ✅ o "Seja bem-vinda!" desceu e virou o convite para o catálogo |

⚠️ **Ponto para confirmar:** ela escreveu **"Mulher medicina (bruja)"**, com **j**.
Em todos os outros trechos dos documentos ela escreve com **x** — "Bruxa Branca da
Floresta", "bruxa arteira cuidadeira", "bruxa amorosa". Mantive como ela escreveu,
mas vale perguntar: é proposital ou escapou? É a primeira frase que a pessoa lê.

---

## Bloco 3 — Por produto

### MASSIXA Essencial ✅
- Título do hero trocado (mantive "MASSIXA" em caixa alta, como no resto do site)
- 9 pares antes → depois, com as dores e transformações novas

### Toque da Jurema ✅
- 7 pares. Abre com "Saudade do mato! Saudade da Terra!" — usei caixa normal,
  não a caixa alta do documento, porque dentro do card ela gritaria
- **Descartado:** "Renovação, vitalidade, mais leveza" (sem par, e redundante com
  "Equilíbrio energético")

### Madalena ✅
- Parágrafo com "...com liberdade e em segurança"
- 7 pares, incluindo o par do conto-de-fada, que funciona lindamente
- **Descartado:** "Dificuldade de sentir prazer físico e emocional" — sem contraparte
  na lista de transformações dela

### Anahata Terra ✅
- 6 pares
- **Descartados:** "Dificuldade para sustentar o foco" e "Dificuldade de materializar
  seus projetos" — sem contraparte

⚠️ **Os 3 descartes de Madalena e Anahata merecem revisão da Ilana.** Não são frases
frouxas: são dores específicas que ela escreveu e que ficaram sem "depois" na lista
dela. Se quiser mantê-las, basta escrever a transformação correspondente.

### Imersão Reconecta
- Texto principal novo (3 parágrafos)
- 🚧 **Foto: marcador temporário no ar.** A foto da roda em grupo foi retirada (a
  Reconecta é individual, como a Ilana apontou), mas a certa não foi localizada no
  Drive. No lugar está `public/images/placeholder-reconecta.jpg`, uma imagem de
  "FOTO PENDENTE" com faixa de obra — visível de propósito, para não passar batido.
  Quando acharem a imagem: Drive `FOTOS PARA LINK TREE → ATENDIMENTOS → RECONECTA`.
  Trocar em `app/imersoes-massixa/page.tsx`, prop `heroImageWide`.
- Dores e transformações reduzidas a uma frase por item

### Colo da Terra ✅
- ✅ Virou **bloco com título próprio** dentro da página das Imersões, separado por
  fio dourado, com o texto de abertura e os 4 parágrafos novos dela
- ✅ As **8 dores e 9 transformações** entraram em **painel próprio** — resolvido em
  29/08/2026, opção (A)

**Como ficou:** a página passou a ter **dois painéis de transformação** em sequência,
cada um com seu título:

| Painel | Pares | Subtítulo |
|---|---|---|
| "A Transformação que Você Busca" | 6, só da Reconecta | "Na Imersão Reconecta — de onde você está para onde a imersão leva." |
| "A Transformação no Colo da Terra" | 8, todas as dores dela | "Para quem também está gerando uma nova vida." |

Os dois pares de gestante que estavam no painel da Reconecta saíram de lá — agora esse
painel é só da Reconecta, e os dois lugares vagos foram preenchidos com pares que já
estavam nas listas dela ("Distância do próprio propósito" e "Falta de ritual no dia a dia").

No template isso virou a prop opcional `transformacaoSecundaria`. Nenhuma outra página
usa — some sozinha onde não é passada.

⚠️ **Uma transformação sobrou:** "Equilíbrio energético". As 8 dores do Colo da Terra
foram todas aproveitadas, mas essa transformação não tem dor correspondente na lista
dela — e é a mais genérica das nove (já aparece em outras páginas). Se ela quiser
mantê-la, basta escrever a dor que ela responde.

---

## Ainda em aberto

**1.** ✅ Dores e transformações do Colo da Terra — resolvido em 29/08/2026 com a
opção (A), painel próprio. Ver o bloco 3 acima. Sobrou "Equilíbrio energético", sem
dor correspondente.

**2.** Nome da empresa para completar o rodapé ("feito com o Catálogo Holístico e com...")

**3.** "bruja" com **j** na descrição da home — em todo o resto dos documentos ela
escreve "bruxa" com **x**. É a primeira frase que a pessoa lê. Proposital ou escapou?

**4.** Os 3 pares descartados em Madalena e Anahata — se ela quiser mantê-los, precisa
escrever a transformação correspondente.

**5.** ✅ Foto da Reconecta — resolvido em 29/08/2026 (`reconecta-gongo-v3.jpg`).

---

## Depois do doc 2

- **Doc 3:** nunca aberto.
- **Doc 4:** só a parte da Botica foi lida. Ela reescreve quase a página inteira —
  inclui eliminar o bloco de dores, virar catálogo de produtos, uma seção nova
  ("Por que esses não são produtos ordinários?") e trocar a foto.
