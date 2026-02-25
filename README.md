# 🍕 MasterFood MFE - Delivery Inteligente com Micro Front-ends

![Demonstração do Projeto](https://github.com/user-attachments/assets/6f115ead-78ad-44b9-b717-8724074d4fb1)

## 💡 O que é o projeto?
Imagine um grande shopping center onde cada loja é independente, mas todas compartilham o mesmo teto e corredores. No mundo do software, chamamos isso de **Micro Front-ends**.

O **MasterFood** é uma plataforma de delivery onde o **Cardápio** e o **Carrinho de Compras** são "lojas" (aplicações) totalmente independentes. Elas podem ser criadas, atualizadas ou consertadas por times diferentes sem que uma derrube a outra.

---

## 🛠️ Stack tecnológica
* **Core:** React 18 & JavaScript (ES6+)
* **Orquestração:** Webpack 5 & Module Federation
* **Comunicação:** Custom Events (Event Driven Architecture)
* **Design:** CSS3 com Variáveis Globais (Design System Unificado)

---

## 🏗️ Estrutura do ecossistema

A aplicação é composta por três micro-apps independentes orquestrados em tempo real:

1.  **Container (Porta 3000):** O **Host**. Gerencia a identidade visual e consome os módulos remotos.
2.  **Micro-Cardápio (Porta 3001):** O **Remote A**. Responsável pela listagem e emissão de eventos de compra.
3.  **Micro-Pedido (Porta 3002):** O **Remote B**. Escuta os eventos globais e gerencia o estado do carrinho.

---

## 📈 Diferenciais técnicos
* **Comunicação Desacoplada:** Interação entre micros via eventos nativos do browser, garantindo zero dependência direta entre módulos.
* **Build Independente:** Configuração de `remoteEntry.js` via Webpack para exportação de componentes isolados.
* **Design System:** Consistência visual garantida através de um sistema de cores e tipografia compartilhado via variáveis CSS.

---

## 🚀 Como executá-lo localmente?

```bash
# 1. Clone o repositório
git clone [https://github.com/marciors92/projeto-delivery-mfe.git](https://github.com/marciors92/projeto-delivery-mfe.git)

# 2. Instale e inicie os Micros (em terminais separados)
cd micro-cardapio && npm install && npm start  # Porta 3001
cd micro-pedido && npm install && npm start    # Porta 3002

# 3. Instale e inicie o Host (em um novo terminal)
cd container && npm install && npm start        # Porta 3000
