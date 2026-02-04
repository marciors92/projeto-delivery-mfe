# 🍕 MasterFood MFE - Micro Front-end Delivery Architecture

Este projeto simula um ecossistema de delivery real utilizando a arquitetura de **Micro Front-ends**. O objetivo foi construir uma aplicação modular onde diferentes times podem trabalhar no "Cardápio" e no "Carrinho de Compras" de forma 100% independente, utilizando o que há de mais moderno em orquestração de módulos.

## 🔗 Link do Repositório
> **Confira o código fonte:** [https://github.com/marciors92/projeto-delivery-mfe](https://github.com/marciors92/projeto-delivery-mfe)

---

## 🛠️ Tecnologias Utilizadas
* **React 18** (Biblioteca de UI)
* **Webpack 5 & Module Federation** (Orquestração de Micro Front-ends)
* **JavaScript (ES6+)**
* **CSS3** (Variáveis Globais e Flexbox para Design Responsivo)
* **Babel** (Transpilação de código)

---

## 🏗️ Arquitetura do Sistema

O **FlashEats** é composto por três aplicações independentes que se comunicam em tempo real:

1.  **Container (Porta 3000):** O "Host" da aplicação. Gerencia a identidade visual principal e consome os componentes remotos.
2.  **Micro-Cardápio (Porta 3001):** Um "Remote" responsável pela listagem de produtos e pela emissão de eventos de adição ao carrinho.
3.  **Micro-Pedido (Porta 3002):** Outro "Remote" que escuta os eventos globais e gerencia o estado do carrinho de compras.

---

## 📈 Jornada de Desenvolvimento Profissional

### 1. Configuração de Infraestrutura (Build)
Iniciei estruturando o ambiente com **Webpack 5**, configurando os *loaders* de CSS e Babel para garantir que os micros pudessem exportar seus componentes de forma isolada via `remoteEntry.js`.

### 2. Comunicação Desacoplada
Implementei a lógica de comunicação entre os micros utilizando **Custom Events** do navegador. Isso permite que o Cardápio e o Pedido interajam sem que um conheça a implementação interna do outro (baixo acoplamento).

### 3. Sistema de Design Unificado
Criei uma identidade visual coesa para o delivery (FlashEats) utilizando variáveis CSS compartilhadas, garantindo que botões, cores e tipografia sejam idênticos em todos os micros.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/marciors92/projeto-delivery-mfe.git](https://github.com/marciors92/projeto-delivery-mfe.git)
