# 🚀 Kodefy

**Seu editor de código com IA** — diga o que quer, a KAI faz.

## � Como Usar

### 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/dan007santos/kodefy.space
cd kodefy.space
```

2. **Configure a API do Gemini (Opcional):**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env e adicione sua chave do Gemini
# Obtenha em: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=sua_chave_api_aqui
```

3. **Para uso com Next.js (IA real):**
```bash
npm install
npm run dev
```

4. **Para uso standalone (apenas frontend):**
   - Abra `index.html` diretamente no navegador
   - KAI funcionará com templates locais

### 💡 Uso Básico

1. **Escrever Código**
   - Selecione uma linguagem no dropdown
   - Digite seu código no editor Monaco
   - Use syntax highlighting automático

2. **Executar Código**
   - **JavaScript**: Execução instantânea com saída no console
   - **HTML**: Renderização em iframe integrado
   - **Outras linguagens**: Validação e preview

3. **Gerar com IA (KAI)**
   - Clique no botão "🔮 Gerar com IA"
   - Descreva o que quer em linguagem natural
   - KAI gera código automaticamente

#### Exemplos de comandos para KAI:
```
"calculadora em JavaScript"
"jogo da cobrinha em Python"  
"página de login em HTML"
"algoritmo de ordenação em C++"
"hello world em todas as linguagens"
```

## 🤖 Sistema KAI (IA)

### IA Real (Google Gemini)
Quando configurado com `GEMINI_API_KEY`, KAI usa o modelo Gemini 1.5 Flash para:
- ✨ Geração inteligente de código
- 🎯 Compreensão de contexto natural
- 🔄 Adaptação automática por linguagem
- 💡 Código funcional e otimizado

### Fallback Local
Sem API configurada, KAI usa templates locais para:
- �📋 Calculadoras funcionais
- 🎮 Jogos interativos
- 🌐 Sites responsivos
- 📊 Algoritmos de ordenação
- 🔐 Formulários de login

### Configuração da API Gemini

1. **Obtenha sua chave:**
   - Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Faça login com sua conta Google
   - Gere uma nova API key

2. **Configure no projeto:**
```bash
# No arquivo .env
GEMINI_API_KEY=AIzaSyBxxxxx...xxxxx
```

3. **Teste a integração:**
   - Execute `npm run dev`
   - Use KAI para gerar código
   - Verifique logs para confirmar conexãoojeto

Kodefy é um editor de código web moderno e intuitivo que permite escrever, executar e gerar código automaticamente usando inteligência artificial. Perfeito para aprendizado, prototipagem rápida e desenvolvimento ágil.

## ✨ Funcionalidades

- 🖥️ **Editor Monaco**: Editor profissional baseado no VS Code
- 🤖 **IA Integrada (KAI)**: Gere código automaticamente com comandos em linguagem natural
- 🔄 **Execução Instantânea**: Execute JavaScript e HTML diretamente no navegador
- 🌈 **Multi-linguagens**: Suporte para 8 linguagens populares
- 🎨 **Interface Moderna**: Design limpo e responsivo com tema escuro
- ⚡ **Performance**: Carregamento rápido e interface fluida

## 🛠️ Linguagens Suportadas

- **Python** - Exemplos e algoritmos
- **JavaScript** - Execução em tempo real
- **HTML/CSS** - Renderização instantânea
- **Java** - Sintaxe e estruturas
- **C++** - Algoritmos e performance
- **PHP** - Scripts server-side
- **Go** - Programação concorrente
- **Rust** - Segurança e performance

## 🚀 Como Usar

### 1. **Escrever Código**
- Selecione uma linguagem no dropdown
- Digite seu código no editor Monaco
- Use syntax highlighting automático

### 2. **Executar Código**
- **JavaScript**: Execução instantânea com saída no console
- **HTML**: Renderização em iframe integrado
- **Outras linguagens**: Validação e preview

### 3. **Gerar com IA (KAI)**
- Clique no botão "🔮 Gerar com IA"
- Descreva o que quer em linguagem natural
- KAI gera código automaticamente

#### Exemplos de comandos para KAI:
```
"calculadora em JavaScript"
"jogo da cobrinha em Python"  
"página de login em HTML"
"algoritmo de ordenação em C++"
"hello world em todas as linguagens"
```

## 🎯 Exemplos Práticos

### Calculadora JavaScript
```javascript
class Calculadora {
    static somar(a, b) { return a + b; }
    static subtrair(a, b) { return a - b; }
    // ... mais métodos
}
```

### Jogo da Cobrinha
- Interface gráfica com Canvas
- Controles por teclado
- Sistema de pontuação
- Detecção de colisões

### Algoritmos de Ordenação
- Bubble Sort, Quick Sort, Merge Sort
- Comparação de performance
- Visualização de complexidade

## 🛠️ Instalação e Uso

### Uso Local
1. Clone o repositório:
```bash
git clone https://github.com/dan007santos/kodefy.space
cd kodefy.space
```

2. Abra o `index.html` em um navegador moderno

3. Comece a codar! 🎉

### Recursos Necessários
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar Monaco Editor CDN)

## 🎨 Estrutura do Projeto

```
kodefy.space/
├── index.html          # Interface principal
├── script.js           # Lógica e funcionalidades
├── style.css           # Estilos e tema
├── api/                # Endpoints de API (futuro)
└── README.md           # Documentação
```

## 🔧 Configuração Avançada

### Personalizando KAI
Para conectar uma API de IA real, edite a função `askAI()` em `script.js`:

```javascript
async function askAI() {
    const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            prompt: userPrompt, 
            language: language 
        })
    });
    // ... processar resposta
}
```

### Adicionando Linguagens
1. Adicione opção no HTML select
2. Configure mapeamento em `getMonacoLanguage()`
3. Adicione exemplo em `examples` object

## 📱 Responsividade

Kodefy é totalmente responsivo:
- **Desktop**: Interface completa
- **Tablet**: Layout adaptado
- **Mobile**: Controles otimizados

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Áreas para Contribuição
- 🔧 Novos executores de linguagem
- 🤖 Melhorias na IA
- 🎨 Temas e personalização
- 📚 Mais exemplos e templates
- 🐛 Correção de bugs
- 📖 Documentação

## 🐛 Problemas Conhecidos

- Execução limitada a JavaScript e HTML
- IA usa exemplos pré-definidos (não conectada a API real)
- Sem persistência de código (implementação futura)

## 🔮 Roadmap

### Versão 1.1
- [ ] Integração com APIs de IA (GPT, Gemini)
- [ ] Execução server-side para Python, Java, etc.
- [ ] Sistema de salvamento de projetos
- [ ] Temas personalizáveis

### Versão 1.2
- [ ] Colaboração em tempo real
- [ ] Debugging integrado
- [ ] Terminal integrado
- [ ] Extensões de comunidade

### Versão 2.0
- [ ] Desktop app (Electron)
- [ ] Marketplace de templates
- [ ] Integração com Git
- [ ] Deployment automático

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Dan Santos** - [@dan007santos](https://github.com/dan007santos)

## 🌟 Agradecimentos

- **Monaco Editor** - Editor de código profissional
- **VS Code** - Inspiração para interface
- **Comunidade Open Source** - Suporte e feedback

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐