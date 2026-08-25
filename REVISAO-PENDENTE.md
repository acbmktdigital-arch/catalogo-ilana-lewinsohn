# Pontos pendentes de revisão

Lista dos pontos que sinalizei durante a conversão das páginas para o layout V3.
Nenhum deles quebra o site — são decisões de **conteúdo** que dependem da Vera ou da Ilana.

Última atualização: 25/08/2026

---

## 1. Pares "antes → depois" que ficaram fracos

O bloco **A Transformação que Você Busca** foi montado reaproveitando as listas antigas
de *dores* e *benefícios* de cada página: cada dor virou o "antes" e o benefício
correspondente virou o "depois".

Na maioria das páginas os dois lados já eram escritos em espelho e casaram sozinho.
Nestes quatro casos não houve par natural — o "benefício" original descrevia um
**elemento da sessão**, não um resultado. Ficaram assim por serem o que sobrou.

### Rodas Celta-Baianas

| Antes | Depois atual | Problema |
|---|---|---|
| Desconexão com o próprio ciclo | Cacau cerimonial | Cacau é ingrediente do ritual, não o resultado de reconectar com o ciclo |
| Falta de celebração coletiva | Mesa vegana compartilhada | A mesa é parte da roda, não o ganho em si |

### Bússola: Orientação Integrativa Xamânica

| Antes | Depois atual | Problema |
|---|---|---|
| Corpo e energia desequilibrados | Sabedoria integrativa | Descreve o método (Ayurveda, Xamanismo, Alquimia...), não o depois |

### MASSIXA Essencial

| Antes | Depois atual | Problema |
|---|---|---|
| Falta de tempo pra si | Relaxamento profundo | Funciona, mas é o par mais frouxo da página — foi o que restou |

**Para resolver:** cada um pede uma frase nova de "depois", curta e no mesmo tom das
demais. Isso é redação, não reaproveitamento — por isso não fiz por conta própria.

---

## 2. Respostas longas de FAQ, do Google AI Studio

A versão que a Vera gerou no AI Studio reescreveu as respostas do FAQ das Imersões,
bem mais ricas que as atuais. **Não foram aplicadas**, por decisão da Vera, porque
afirmam detalhes do atendimento que só a Ilana pode confirmar:

- travesseiros de apoio lateral para gestantes
- ervas contraindicadas por trimestre de gestação
- oferta de "formatos de casal sob consulta"
- descrição passo a passo do que acontece na sessão

**Onde estão:** `imersões-massixa google ia studio/src/data.ts`, na pasta ao lado
deste projeto.

**Para resolver:** a Ilana lê e confirma cada afirmação. O que ela validar, eu aplico.

---

## 3. Frase que ficou de fora na fusão das Imersões

Ao fundir *Reconecta* e *Colo da Terra* numa página só, o benefício
**"Experiência ritualística"** perdeu o par (a dor correspondente, "Falta de ritual no
dia a dia", tinha sido cortada antes) e acabou saindo.

É um diferencial forte da imersão. Pode voltar como um sétimo par, se quiserem.

---

## 4. Som ambiente — desligado, pronto para ligar

O botão de atmosfera sonora (ruído de mata + tigelas em 432/528 Hz, sintetizados no
navegador) existe e funciona, mas está **desligado em todas as páginas**.

Foi decisão da Vera: manter desligado até a Ilana ver e opinar.

**Para ligar:** em cada `app/<pagina>/page.tsx`, trocar `somAmbiente={false}` por
`somAmbiente`. É uma linha por página.

---

## 5. Versões da página de Imersões — resolvido

✅ A **V3 assumiu a rota `/imersoes-massixa`**, que é a cadastrada na home. A rota
provisória `/imersoes-massixa-v3` e o arquivo `SalesPageTemplateV2.tsx` foram apagados.

As 15 páginas do catálogo agora usam o mesmo template.

**Sobrou código morto:** `components/sections/SalesPageTemplate.tsx` (o template
original, V1) não é mais usado por nenhuma página. Pode ser apagado quando quiserem —
está no git, então dá para recuperar. Deixei por enquanto como referência.

---

## 6. Respostas do FAQ em dourado — teste de legibilidade em aberto

A pedido da Vera, as respostas do FAQ passaram do creme para o **dourado da marca
(`#C9A227`)**, em teste.

O FAQ fica sobre o fundo **oliva (`#545F37`)**, e nessa combinação o dourado dá
**2,8:1 de contraste** — abaixo dos 4,5:1 recomendados para texto corrido. É a mesma
regra que vem guiando as escolhas de cor do site desde o começo: dourado funciona como
**traço** (fios, bordas, setas) em qualquer fundo, mas como **texto** só nas seções de
fundo escuro `#232112`, onde chega a 6,8:1.

Por isso a nota de preço em dourado funciona (fica sobre o escuro) e o FAQ é o caso
limite.

| Opção | Contraste sobre o oliva | Situação |
|---|---|---|
| Dourado `#C9A227` | 2,8:1 | **no ar agora**, em teste |
| Dourado claro `#EDD9A3` | 4,8:1 ✅ | mantém o "amarelo", passa no mínimo |
| Creme `rgba(255,255,255,0.8)` | 6,7:1 | como estava antes |

**Para resolver:** ver no celular, que é onde a maioria lê, e decidir. Qualquer das
três é troca de uma linha em `components/sections/SalesPageTemplateV3.tsx`, na cor do
parágrafo da resposta do FAQ.

**Amostra viva do dourado claro:** o `#EDD9A3` já está no ar no "SABER MAIS →" dos
cards da home (`components/ui/ServiceCard.tsx`), sobre o mesmo fundo oliva. Dá para
comparar os dois lado a lado antes de decidir: abra a home e uma página de serviço.

---

## 7. Conversão das páginas — concluída

✅ **As 15 páginas do catálogo estão no layout V3.**

As cinco últimas (Vivências, as duas Mentorias, Biblioteca Viva e Botica da Bruxa)
receberam um modal adaptado, porque nenhuma delas é agendamento de sessão nem tem
preço fechado:

| Página | Intenção | Modal |
|---|---|---|
| Vivências e Retiros | orçamento sob medida | pede dados do grupo (obrigatório) |
| Mentoria Cuidado Autoral | candidatura | pede um resumo do seu trabalho |
| Mentoria Vem Pra Roda | candidatura | pede um resumo do seu chamado |
| Biblioteca Viva | lista de espera | só nome e WhatsApp |
| Botica da Bruxa | consulta de produto | seletor lista os preparados |

Nessas cinco, o cartão de preço foi trocado por uma **frase explicando a condição** —
um "A definir" em Lora 36px, no lugar reservado ao valor, passava a impressão errada.

**Ponto que ficou em aberto:** os textos dessas frases foram escritos por mim e
descrevem como o contato funciona (processo seletivo, lotes pequenos, lista de espera).
Vale a Ilana ler para confirmar que reflete a prática dela.
