# 📚 Projeto – Estruturas Condicionais com JavaScript

Este projeto foi desenvolvido com o objetivo de praticar estruturas condicionais (`if`, `else if`, `else`) utilizando JavaScript integrado com HTML e CSS.

O repositório contém dois projetos:

- 🚦 Exemplo 1 – Radar Eletrônico
- 📊 Atividade – Classificador de Desempenho Escolar

---

# 📁 Estrutura do Projeto

📦 estruturas-condicionais-js
│
├── 📂 exemplo_radar
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── 📂 atv_notas
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
└── README.md

---

# 🚦 Exemplo 1 – Radar Eletrônico

## 🎯 Objetivo
Simular um radar eletrônico que verifica se o motorista ultrapassou o limite de 80 km/h.

## 🧠 Lógica Aplicada

```javascript
if (vel <= 80) {
    // Dentro do limite
} else {
    // Multado
}

```

## 📌 Conceitos Trabalhados

getElementById()

Conversão com Number()

innerHTML

style.color

Estruturas condicionais simples

---

# 📊 Atividade – Sistema de Classificação de Notas

## 📌 Descrição da Atividade

Esta atividade foi desenvolvida com o objetivo de praticar estruturas condicionais em JavaScript, utilizando integração com HTML e CSS.

O sistema permite que o usuário digite uma nota de 0 a 10 e receba automaticamente uma classificação de desempenho escolar.

---

## 🎯 Objetivos de Aprendizagem

- Utilizar estruturas condicionais (`if`, `else if`, `else`)
- Trabalhar com manipulação do DOM
- Utilizar `getElementById()`
- Converter valores usando `Number()`
- Alterar conteúdo com `innerHTML`
- Modificar estilos dinamicamente com `style`

---

## 🧠 Regras de Classificação

| Nota Digitada | Resultado |
|---------------|-----------|
| Nota ≥ 9      | 🏆 Excelente |
| Nota ≥ 7      | ✅ Bom |
| Nota ≥ 5      | ⚠️ Regular (Recuperação) |
| Nota < 5      | ❌ Insuficiente |

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

## 🚀 Como Executar

1. Abra o arquivo `index.html` no navegador.
2. Digite uma nota entre 0 e 10.
3. Clique no botão **Analisar**.
4. O sistema exibirá o desempenho correspondente.

---

## 📚 Conceito Principal Trabalhado

Estruturas condicionais encadeadas:

```javascript
if (nota >= 9) {
    // Excelente
} else if (nota >= 7) {
    // Bom
} else if (nota >= 5) {
    // Regular
} else {
    // Insuficiente
}

```

---

# 👩‍💻 Autora

**Rafaela Oliveira**💙

Estudante de Desenvolvimento de Sistemas

