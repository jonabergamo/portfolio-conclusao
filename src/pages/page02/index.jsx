import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import Me from "../../assets/me.png";
import htmlLogo from "../../assets/html-img.svg";
import cssLogo from "../../assets/css-img.svg";
import jsLogo from "../../assets/js-img.svg";
import cssExample from "../../assets/css-example.svg";
import htmlExample from "../../assets/html-example.svg";
import WhileExample from "../components/whileExample";
import curriculumExample from "../../assets/curriculum-example.svg";

export default function Page02() {
  const [scrollY, setScrollY] = useState(0);
  const [operador, setOperador] = useState("+");
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [result, setResult] = useState("");
  const [codeString, setCodeString] = useState();

  window.addEventListener("scroll", function () {
    setScrollY(window.scrollY || window.pageYOffset);
  });

  function calculate() {}
  useEffect(() => {
    let conta = eval(`${A} ${operador} ${B}`);
    setResult(conta);
  }, [A, B, operador]);

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main>
        <section>
          <h1>Introdução</h1>
          <img src={Me} alt="" className="photo" style={{ height: 140 }} />
          <p>
            Bem-vindo ao meu site! Aqui você encontrará um resumo emocionante do
            meu semestre na faculdade, repleto de conhecimento, aprendizado e
            conquistas. Sou estudante universitário dedicado, apaixonado pelo
            meu curso e pela busca constante de novos desafios. Durante este
            semestre, mergulhei em diversas disciplinas e projetos estimulantes,
            expandindo meus horizontes e aprimorando minhas habilidades. Através
            deste site, compartilharei com vocês os momentos marcantes, as
            lições valiosas e as experiências enriquecedoras que vivenciei ao
            longo desses meses.
          </p>
        </section>
        <section>
          <h1>Linguagem de Programação</h1>
          <p>
            Durante o meu primeiro semestre no curso de Análise e
            Desenvolvimento de Sistemas, tive a oportunidade de estudar muito
            sobre programação web, aprendendo não apenas JavaScript, mas também
            HTML e CSS.
          </p>
          <div style={{ display: "flex", gap: 40, margin: 20, marginTop: 35 }}>
            <img src={htmlLogo} alt="" srcset="" />
            <img src={cssLogo} alt="" srcset="" />
            <img src={jsLogo} alt="" srcset="" />
          </div>
          <p>
            Começando com HTML (HyperText Markup Language), aprendi a estrutura
            básica de uma página web e como criar elementos HTML, como
            cabeçalhos, parágrafos, listas, links e imagens. Entendi a
            importância de uma estrutura bem organizada e semântica para
            garantir uma experiência de usuário acessível e amigável.
          </p>
          <img src={htmlExample} alt=""></img>
          <figcaption>
            Este exemplo é um HTML semântico, porém escrito utilizando o
            Framework React.js.
          </figcaption>
          <p>
            Além disso, estudei CSS (Cascading Style Sheets), que é responsável
            pela aparência visual das páginas web. Aprendi a utilizar seletores
            CSS para aplicar estilos e formatar elementos HTML, como cores,
            fontes, tamanhos, margens e posicionamentos. Compreendi a
            importância do CSS para criar layouts responsivos e atrativos,
            garantindo uma experiência visualmente agradável.
          </p>
          <img src={cssExample} alt=""></img>
          <p>
            Em conjunto com o HTML e o CSS, aprendi JavaScript, uma linguagem de
            programação fundamental para a interatividade e dinamismo das
            páginas web. Começando com os fundamentos básicos, aprendi sobre
            variáveis e tipos de dados, incluindo números, strings e booleanos.
            Compreendi como declarar e atribuir valores a variáveis, além de
            explorar os operadores matemáticos e lógicos disponíveis.
          </p>

          <div className="calculator">
            <input
              type="text"
              className="input-calculator"
              onChange={(e) => {
                setA(e.target.value);
                calculate();
              }}
              maxLength={2}
            />
            <select
              className="select-calculator"
              name="operators"
              onChange={(e) => {
                setOperador(e.target.value || "0");
                calculate();
              }}
              value={operador}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="/">/</option>
              <option value="*">*</option>
            </select>
            <input
              type="text"
              className="input-calculator"
              onChange={(e) => {
                setB(e.target.value || "0");
                calculate();
              }}
              maxLength={2}
            />
            <div className="equal">=</div>
            <span className="result-calculator">{result}</span>
          </div>
          <figcaption>* Item interativo</figcaption>
          <p>
            Também estudei estruturas de controle, como condicionais (if/else) e
            loops (for/while), que me permitiram controlar o fluxo de execução
            do código e tomar decisões com base em condições específicas. Esses
            conceitos são essenciais para construir programas mais complexos e
            resolver problemas de forma eficiente.
          </p>
          <WhileExample />
          <figcaption>* Item interativo</figcaption>
          <p>
            A disciplina também abrangeu a parte de funções, um componente
            fundamental em JavaScript. Aprendi como declarar funções, passar
            argumentos e retornar valores. Compreendi a importância de
            modularizar o código em funções reutilizáveis, facilitando a
            manutenção e a organização do programa.
          </p>
          <p>
            Após adquirir um amplo conjunto de conceitos em JavaScript, HTML e
            CSS, tive a oportunidade de aplicar esses conhecimentos em um
            projeto prático empolgante. A proposta consistia em criar um
            currículo web e apresentá-lo à turma.
          </p>
          <p>
            Utilizando HTML, desenvolvi a estrutura do currículo, organizando as
            seções relevantes, como informações pessoais, histórico educacional,
            experiência profissional, habilidades e projetos. Através da
            marcação semântica do HTML, garanti que o currículo fosse
            estruturado de forma clara e acessível.
          </p>
          <img src={curriculumExample} alt="" srcset="" />
          <figcaption>Exemplo de como ficou a semântica.</figcaption>
        </section>
      </main>
      <motion.aside
        initial={{ y: 0 }}
        animate={{ y: scrollY }}
        transition={{ type: "spring", duration: 2, stiffness: 100 }}
      >
        <div className="section-title">
          <span className="green-circle 1"></span>
          <h3>Introdução</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 2"></span>
          <h3>Linguagem de Programação</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 3"></span>
          <h3>Automação industrial</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 4"></span>
          <h3>Redes de Computadores</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 5"></span>
          <h3>Banco de Dados</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 6"></span>
          <h3>Ciência de Dados</h3>
        </div>
        <div className="section-title">
          <span className="green-circle 7"></span>
          <h3>Projetos Pessoais</h3>
        </div>
      </motion.aside>
      <div className="background-page02"></div>
    </motion.div>
  );
}
