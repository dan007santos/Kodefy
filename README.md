# Kodefy
Seu editor de código com IA integrada!

# 🚀 Kodefy — Editor de Código com IA Integrada

Kodefy é uma plataforma de desenvolvimento online simples, poderosa e com **IA integrada (KAI)**.  
Diga o que quer, e a IA gera o código em segundos.

## ✨ Recursos

- 🤖 **KAI (IA integrada)** — Google Gemini AI + templates locais
- 💻 **Monaco Editor** — motor do VS Code integrado
- 🎨 **8 linguagens** — JavaScript, Python, HTML, CSS, Java, C++, C#, Go
- ⚡ **Execução real** — JavaScript e HTML executam instantaneamente
- 📱 **Responsivo** — funciona perfeitamente no mobile
- 🌐 **Zero config** — abra `index.html` e funciona

---

## 🚀 Como Usar

### Opção 1: Modo Simples (só frontend)

```bash
# Clone e abra
git clone https://github.com/dan007santos/kodefy.space
cd kodefy.space
open index.html
```

- ✅ KAI funciona com templates locais inteligentes
- ✅ Execução de JavaScript e HTML em tempo real
- ✅ Sem configuração, sem dependências

### Opção 2: Modo Completo (com IA real)

Para usar IA real do Google Gemini:

1. **Clone o projeto:**
```bash
git clone https://github.com/dan007santos/kodefy.space
cd kodefy.space
```

2. **Instale dependências:**
```bash
npm install
```

3. **Configure a IA (opcional):**
```bash
cp .env.example .env
# Edite .env e adicione: GEMINI_API_KEY=sua_chave
```

4. **Execute:**
```bash
npm run dev
# Acesse: http://localhost:3000
```

---

## 🤖 KAI — IA Integrada

### 💡 Como Usar a IA

1. Clique em **"🔮 Gerar com IA"**
2. Digite o que quer em português:
   - *"calculadora em JavaScript"*
   - *"jogo da cobrinha em Python"*
   - *"página de login responsiva"*
   - *"algoritmo de ordenação"*
3. KAI gera o código automaticamente!

### 🔧 Duas Versões da IA

**🌐 IA Real (Google Gemini):**
- Requer `GEMINI_API_KEY` configurada
- Respostas mais inteligentes e variadas
- Compreende contexto complexo

**📦 IA Local (Templates):**
- Funciona sem internet
- Templates pré-programados funcionais
- Calculadoras, jogos, sites completos

---

## 🎯 Exemplos Práticos

### Calculadora Completa
```
Prompt: "calculadora em JavaScript"
Resultado: Interface HTML + CSS + lógica JavaScript
```

### Jogo da Cobrinha
```
Prompt: "jogo da cobrinha em Python"
Resultado: Jogo funcional com tabuleiro e pontuação
```

### Site Responsivo
```
Prompt: "página de login moderna"
Resultado: HTML/CSS responsivo com validação
```

---

## 🏗️ Estrutura do Projeto

```
kodefy.space/
├── index.html          # Interface principal
├── script.js           # Lógica do editor + IA
├── style.css           # Estilos modernos
├── pages/api/ai.js     # Endpoint da IA (Serverless)
├── package.json        # Dependências
└── .env.example        # Configuração da API
```

---

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Editor:** Monaco Editor (VS Code)
- **IA:** Google Gemini 1.5 Flash
- **Backend:** Serverless Functions (Vercel)
- **Deploy:** Vercel ready

---

## ⚙️ Configuração da API Gemini

### 1. Obter Chave da API

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave gerada

### 2. Configurar no Projeto

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite .env e adicione sua chave
GEMINI_API_KEY=AIzaSyBxxxxx...xxxxx
```

### 3. Testar Integração

```bash
npm run dev
# Acesse http://localhost:3000
# Use KAI para gerar código
```

---

## 🎮 Linguagens Suportadas

| Linguagem  | Syntax Highlight | Execução | Templates KAI |
|------------|------------------|----------|---------------|
| JavaScript | ✅               | ✅       | ✅            |
| HTML       | ✅               | ✅       | ✅            |
| CSS        | ✅               | ✅       | ✅            |
| Python     | ✅               | ❌       | ✅            |
| Java       | ✅               | ❌       | ✅            |
| C++        | ✅               | ❌       | ✅            |
| C#         | ✅               | ❌       | ✅            |
| Go         | ✅               | ❌       | ✅            |

---

## 📝 Templates Locais da KAI

A IA local inclui templates para:

- **Calculadoras:** Básica, científica, IMC
- **Jogos:** Snake, Tic-tac-toe, pedra/papel/tesoura
- **Sites:** Landing pages, login forms, portfolios
- **Algoritmos:** Ordenação, busca, estruturas de dados
- **Utilitários:** Geradores, conversores, validadores

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configure environment variables no painel
```

### GitHub Pages (Frontend only)

```bash
# Envie para GitHub
git push origin main

# Ative GitHub Pages nas configurações do repo
# Use branch: main, folder: / (root)
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Adiciona nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

---

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

## 🔗 Links

- **Demo:** [kodefy.space](https://kodefy.space)
- **Repositório:** [GitHub](https://github.com/dan007santos/kodefy.space)
- **Issues:** [Bug Reports](https://github.com/dan007santos/kodefy.space/issues)

---

<div align="center">

**Feito com ❤️ por [Dan Santos](https://github.com/dan007santos)**

*Diga o que quer, a KAI faz.*

</div>
