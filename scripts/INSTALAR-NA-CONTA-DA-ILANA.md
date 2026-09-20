# Instalar o recebedor na conta da Ilana

Roteiro da migração de 20/09/2026: a planilha que recebe os formulários e os
pagamentos sai da conta de teste e nasce de novo na conta Google da Ilana.

**Por que recriar em vez de transferir:** o link de checkout da InfinitePay ainda
não existe, então não há nada preso ao endereço antigo. E recriar deixa para trás
as linhas de teste e a linha `SONDA`, sem precisar limpar nada.

**A ordem não pode ser invertida.** O `webhook_url` fica gravado *dentro* do link
de checkout. Criar o link antes de ter o `/exec` definitivo significa refazer o
link depois.

```
planilha na conta da Ilana  →  /exec novo  →  lib/planilha.ts  →  link da InfinitePay
```

---

## 1. Criar a planilha (conta da Ilana)

Logada **na conta da Ilana**, em `sheets.new`. Nome sugerido:
`Catálogo MASSIXA — pedidos e pagamentos`.

## 2. Criar o projeto do Apps Script

Na planilha: **Extensões → Apps Script**.

⚠️ **Pela planilha, nunca por `script.google.com`.** Um projeto solto não enxerga
"planilha ativa", e o Google reporta isso como **falta de permissão** — mensagem
que manda procurar no lugar errado por horas. Foi o que aconteceu em 13/09.

Apagar o `Code.gs` que vem de exemplo e colar `planilha-recebedor.gs` inteiro.

Dar um nome ao projeto: `Recebedor do catálogo MASSIXA`.

## 3. Conferir o topo do arquivo

Já vem pronto, é só conferir que não mudou na hora de colar:

```js
var VERSAO = 16
var AVISAR_EMAIL = 'cantodafloresta8@gmail.com'
var PLANILHA_ID = ''
```

`PLANILHA_ID` vazio porque o projeto está preso à planilha.

`AVISAR_EMAIL` preenchido em vez de vazio de propósito — o motivo está no
comentário em cima dele, no `.gs`. Aceita vários endereços separados por
vírgula, se em algum momento você quiser receber cópia.

## 4. Salvar

⚠️ **A lista de funções só aparece depois de salvar.** Se `prepararPlanilha` não
estiver no menu suspenso, é porque falta salvar — colar não basta.

## 5. Rodar `prepararPlanilha`

Escolher `prepararPlanilha` no menu e clicar **▷ Executar**. Ela cria as abas e
os cabeçalhos, sem escrever dado nenhum.

Vai pedir autorização. Na tela de consentimento:

⚠️ **As caixas vêm DESMARCADAS.** Marcar **"Selecionar tudo"**. Sem isso a
permissão sai pela metade — e aí o e-mail funciona e a planilha não, ou o
contrário.

Se aparecer **"Ocorreu um erro desconhecido"**: é sessão velha no editor.
Recarregar a página (F5) resolve.

Se falar em permissão mesmo depois de autorizar: `myaccount.google.com/permissions`
→ achar o projeto pelo nome → **Remover acesso** → rodar de novo.

⚠️ **Não mexer em `oauthScopes` no `appsscript.json`.** O Apps Script descobre
sozinho o que o código usa. Declarar à mão fez a autorização valer para um
conjunto enquanto o código pedia outro — e o erro sempre falava de permissão.

## 6. Implantar

**Implantar → Nova implantação → ⚙️ → App da Web**

| Campo | Valor |
|---|---|
| Executar como | **Eu** (a Ilana) |
| Quem pode acessar | **Qualquer pessoa** |

"Qualquer pessoa" é necessário: quem chama são o navegador de quem preenche o
formulário e o servidor da InfinitePay, nenhum dos dois logado.

Copiar o endereço `/exec` que ela devolve.

⚠️ **"Salvar" não publica.** Nas atualizações seguintes é sempre
**Gerenciar implantações → ✏️ editar → Versão: Nova versão → Implantar**. Sem
isso o endereço continua servindo o código antigo, sem erro nenhum.

## 7. Conferir o que está no ar

Abrir o `/exec` no navegador. Ele responde em texto:

```
Recebedor do catálogo MASSIXA — versão 16
Formulários: ...
Pagamentos da InfinitePay: sim
Avisa por e-mail: cantodafloresta8@gmail.com
```

Conferir as duas linhas: **versão 16** e o e-mail da Ilana. É para isso que o
`VERSAO` existe — se vier um número menor, o que está no ar é código antigo e
faltou a Nova versão.

## 8. Testar antes de ligar no site

No editor, rodar nesta ordem:

| Função | O que prova |
|---|---|
| `testarEmail` | o aviso sai e chega |
| `testar` | o formulário grava na aba certa |
| `testarPagamento` | o webhook grava e avisa |

Depois **apagar as linhas de teste** das abas.

## 9. Ligar o site na planilha nova

Trocar o endereço em `lib/planilha.ts` pelo `/exec` novo, commitar, empurrar.
A Netlify republica sozinha.

## 10. Desligar as instalações antigas

Nas contas de teste, em **Gerenciar implantações**, arquivar as implantações
antigas.

⚠️ Existe um `/exec` de um projeto solto **ainda no ar servindo código velho**.
Ele recusa avisos de pagamento sem dar erro visível. Enquanto estiver de pé, um
endereço errado em algum lugar engole dados em silêncio — foi exatamente assim
que um pedido da Bússola se perdeu em 18/09.

## 11. Só então: os links da InfinitePay

Na conta da Ilana, **dois links**, nesta ordem. Os dois com o mesmo
`webhook_url` — o `/exec` novo — e `redirect_url` **vazio**.

`redirect_url` vazio de propósito: o comprador fica na página de comprovante da
InfinitePay, que é o único lugar onde aparece o nome de quem pagou. O aviso do
webhook manda valor e códigos, nunca o comprador.

### 11a. Link de teste — R$ 1,00

Descrição: `Teste — não divulgar`.

Ele entra em `app/bussola-orientacao-xamanica/page.tsx` **sem commit**, como o
link da Quantumlive viveu até agora. Serve para percorrer o caminho inteiro
pelo site, do jeito que uma cliente percorreria.

O que tem que acontecer, em ordem:

| Onde | O que confere |
|---|---|
| Aba *Pedidos — Bússola* | linha com nome, WhatsApp e urgência, gravada **antes** do pagamento |
| E-mail | aviso do pedido, com o link da aba no rodapé |
| Aba *Pagamentos — InfinitePay* | linha do pagamento, com o comprovante |
| E-mail | aviso da venda, com o link da aba |

São **dois e-mails**, um de cada ponta. As duas linhas se cruzam pela hora: o
pedido às 21h50 e o pagamento às 21h52. É assim que a Ilana sabe de quem é a
venda — e o comprovante confirma, com o nome abreviado.

Depois de conferir: apagar as duas linhas de teste e arquivar este link.

### 11b. Link definitivo — R$ 296,00

Descrição: `Bússola de Orientação Xamânica`.

⚠️ **O preço vive em dois lugares**: dentro do link e no texto da página. Mexer
num sem o outro faz o site anunciar um valor e cobrar outro.

Este sim entra no `page.tsx` **e é comitado**. É o commit que liga o checkout em
produção pela primeira vez — até hoje o que está no ar é o botão de WhatsApp.
