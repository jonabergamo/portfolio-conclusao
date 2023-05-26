import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import WhileExample from "../components/whileExample";
import {
  Me,
  htmlLogo,
  cssLogo,
  jsLogo,
  cssExample,
  htmlExample,
  curriculumExample,
  curriculum1,
  curriculum2,
  cartao2,
  cartao1,
  arduino,
  semaforo,
  semaforo1,
  semaforo2,
  robo1,
  robo2,
  robo3,
  robo4,
} from "./images";
import { images } from "./images";

export default function Page02() {
  const [scrollY, setScrollY] = useState(0);
  const [operador, setOperador] = useState("+");
  const [A, setA] = useState("0");
  const [B, setB] = useState("0");
  const [result, setResult] = useState("");

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
        <section id="introducao">
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
        <section id="linguagem">
          <h1>Linguagem de Programação</h1>
          <h2>O início de tudo.</h2>
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
          <p>
            Em seguida, utilizei o CSS para adicionar estilo e personalidade ao
            currículo. Defini cores, fontes, espaçamentos e outros atributos
            visuais para criar um layout profissional e agradável esteticamente.
            Apliquei técnicas de design responsivo para garantir que o currículo
            se adaptasse de forma adequada em diferentes dispositivos e tamanhos
            de tela.
          </p>
          <img src={curriculum1} alt="" srcset="" style={{ width: 650 }} />
          <a href="https://jonabergamo.netlify.app" target="_blank">
            <figcaption>Clique aqui para ver o site </figcaption>
          </a>
          <p>
            Para finalizar, apliquei meus conhecimentos em JavaScript para
            interagir com os elementos e variáveis da página web, implementando
            um botão de alternância entre os modos Noturno e Diurno.
          </p>
          <p>
            Criei uma função que é acionada quando o botão é clicado. Essa
            função alterna a classe CSS dos elementos relevantes, modificando
            suas propriedades visuais, como cores de fundo, textos e estilos de
            fonte. Por meio do uso de condicionais, verifiquei qual modo estava
            ativo (Noturno ou Diurno) e alterei as classes correspondentes.
          </p>
          <img src={curriculum2} alt="" srcset="" style={{ width: 650 }} />
          <figcaption>
            Tela inicial do projeto finalizado com modo Diurno.
          </figcaption>
          <h2>Um verdadeiro desafio.</h2>
          <p>
            Durante uma aula de JavaScript, estávamos realizando alguns
            exercícios quando o professor propôs uma ideia interessante: criar
            um site em que pudéssemos escrever o código do exercício e gerar uma
            página HTML funcional usando JavaScript.
          </p>
          <p>
            Após criar um modelo simples e funcional, tive a ideia de
            aprimorá-lo e criar algo ainda mais funcional. Foi assim que surgiu
            o "Smart-Code", um site onde pude aprimorar significativamente
            minhas habilidades de manipulação de elementos em JavaScript.
          </p>
          <p>
            O "Smart-Code" oferece as mesmas funcionalidades de geração de
            página HTML, porém, possui recursos adicionais. Ele possui uma caixa
            de texto com destaque de sintaxe para JavaScript e HTML, além disso,
            conta com recursos como salvamento automático, opção de download de
            projetos salvos, upload de arquivos, e até mesmo personalização de
            cores. Essas adições tornam a experiência de desenvolvimento ainda
            mais poderosa e prática.
          </p>
          <p>
            No "Smart-Code", concentrei-me em explorar técnicas avançadas de
            manipulação de elementos em JavaScript. Aprendi a selecionar
            elementos HTML utilizando o <b>querySelector()</b>, permitindo-me
            interagir com diferentes partes da página. Utilizei métodos como{" "}
            <b>addEventListener()</b> para responder a eventos, como cliques e
            submissões de formulários, tornando o site mais interativo.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mODBNPbVLpQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <a href="https://smart-code-senai.netlify.app" target="_blank">
            <figcaption>Clique aqui para testar o site Smart-code </figcaption>
          </a>
          <p>
            Um dos aspectos mais emocionantes foi a capacidade de modificar os
            atributos, conteúdo e estilos dos elementos em tempo real. Pude
            criar animações suaves, atualizar dinamicamente o conteúdo da página
            e personalizar a experiência do usuário com base em suas ações.
          </p>
          <p>
            O resultado final foi um site funcional e interativo que demonstrei
            orgulhosamente para meus colegas de classe. O projeto "Smart-Code"
            não apenas me permitiu aprimorar minhas habilidades de programação
            em JavaScript, mas também me deu uma visão clara de como essa
            linguagem poderosa pode ser aplicada para criar experiências
            envolventes na web.
          </p>
          <h2>O início do React.js</h2>
          <p>
            A experiência de criar o "Smart-Code" foi única e eu realmente
            gostei do desenvolvimento e evolução do projeto até sua versão
            atual. No entanto, ao lidar com um código extenso, percebi algumas
            dificuldades. Tornou-se mais desafiador realizar manutenções e
            implementações, mesmo com uma boa semântica, pois encontrar os
            elementos no código estava se tornando mais complicado.
          </p>
          <p>
            Já tinha conhecimento sobre bibliotecas e frameworks que podem
            facilitar a vida do programador e organizar melhor o programa.
            Decidi então escolher o framework mais utilizado para aprender, que
            é o React.js. Para aqueles que não estão familiarizados, o React.js
            é uma biblioteca JavaScript de código aberto utilizada para
            construir interfaces de usuário interativas e reutilizáveis. Ele é
            conhecido por sua eficiência, componentização e atualização do DOM
            de forma eficiente.
          </p>
          <p>
            Como gosto de aprender enquanto trabalho em projetos, decidi criar
            um design para um site de gerenciamento de cartão de crédito. Abaixo
            está uma imagem mostrando o design do site:
          </p>
          <img src={cartao1} alt="" style={{ height: 400 }} />
          <img src={cartao2} alt="" style={{ height: 400 }} />
          <p>
            Durante minha aprendizagem do React, encontrei alguns desafios
            comuns, como:
          </p>
          <ol>
            <li>
              <b>Estrutura Componentizada:</b> Inicialmente, foi um desafio
              compreender e aplicar corretamente a estrutura componentizada do
              React. A divisão do aplicativo em componentes reutilizáveis e a
              passagem de propriedades entre eles exigiram uma mudança de
              mentalidade em relação ao desenvolvimento tradicional.
            </li>
            <li>
              <b>Gerenciamento de Estado:</b> Lidar com o gerenciamento de
              estado em aplicações React pode ser complexo. Entender quando e
              como usar o useState foi um dos desafios a serem vencidos.
            </li>
            <li>
              <b>Estilização:</b> Encontrar a melhor abordagem para estilizar os
              componentes, seja usando CSS puro, pré-processadores como o Sass
              ou bibliotecas de estilização como o Styled Components, pode ser
              um desafio inicial.
            </li>
          </ol>
          <p>
            No entanto, com perseverança e prática, comecei a ter um bom
            desenvolvimento no React. Além disso, tive a oportunidade de
            explorar uma biblioteca de animações chamada Framer Motion.
          </p>
          <p>
            O Framer Motion é uma biblioteca de animações declarativa para
            React. Ela permite criar animações personalizadas com base em
            condições pré-estabelecidas, proporcionando efeitos visuais únicos
            para os elementos da interface. Com o Framer Motion, pude adicionar
            animações fluidas e interativas ao meu projeto, aprimorando a
            experiência do usuário.
          </p>
          <p>
            Convido a todos os leitores a visitarem meu perfil no GitHub e
            explorarem os projetos que desenvolvi durante meu aprendizado em
            React. Lá, vocês encontrarão uma variedade de projetos com temáticas
            semelhantes. Fiquem à vontade para explorar e acompanhar meu
            trabalho em andamento.
          </p>
          <a href="https://github.com/jonabergamo" target="_blank">
            <motion.div
              animate={{ scale: 1.05 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              whileTap={{ scale: 1 }}
              className="github"
            >
              <h3>LINK GITHUB</h3>
            </motion.div>
          </a>
        </section>
        <section id="automacao">
          <h1>Automação industrial</h1>
          <h2>Introdução a sistemas embarcados.</h2>
          <p>
            Começamos com uma introdução ao Arduino, uma plataforma de
            prototipagem eletrônica amplamente utilizada na automação
            industrial. Aprendi os princípios básicos da linguagem C, que é
            comumente utilizada para programar o Arduino. Esses conhecimentos me
            permitiram criar um semáforo funcional no ambiente virtual do
            Tinkercad, onde pude simular e testar o funcionamento do sistema.
          </p>
          <img src={arduino} alt="" />
          <p>
            Para criar o semáforo, utilizamos os pinos digitais do Arduino para
            controlar os LEDs que representam as luzes vermelha, amarela e
            verde. Por exemplo, ao declarar um pino como saída, podemos utilizar
            comandos simples, como digitalWrite(), para ligar ou desligar os
            LEDs.
          </p>
          <img src={semaforo} alt="" />
          <p>
            Além disso, também aprendemos a utilizar a comunicação serial para
            interagir com o Arduino. Através da porta serial, é possível enviar
            e receber informações entre o Arduino e o computador. Isso permite a
            depuração do código, visualização de mensagens e envio de comandos
            para o Arduino durante a execução do programa.
          </p>
          <img src={semaforo1} alt="" />
          <img src={semaforo2} alt="" />
          <h2>Os robôs industriais.</h2>
          <p>
            Um dos tópicos abordados foram os robôs industriais. Estudamos os
            diferentes tipos de robôs amplamente utilizados na indústria e suas
            características distintas.
          </p>
          <ol>
            <li>
              <p>
                1. Robôs Cartesianos: Esses robôs têm um sistema de coordenadas
                cartesianas (x, y, z) e movem-se ao longo de eixos lineares. São
                comumente usados em linhas de montagem e tarefas de manipulação
                precisas.
              </p>
              <img src={robo1} alt="" />
            </li>
            <li>
              <p>
                2. Manipuladores Articulados: Esses robôs possuem uma estrutura de
                braços articulados, semelhante a um braço humano. Cada junta
                articulada permite movimentos flexíveis, o que os torna ideais
                para aplicações que exigem alcance e agilidade em tarefas como
                soldagem e pintura.
              </p>
              <img src={robo2} alt="" />
            </li>
            <li>
              <p>
                3. Robôs SCARA: SCARA é a sigla para Selective Compliance Assembly
                Robot Arm (Robô de Montagem com Complacência Seletiva). São
                robôs de braço duplo com movimento horizontal e vertical,
                permitindo movimentos rápidos e precisos em um plano. São
                frequentemente usados em aplicações de montagem e manipulação.
              </p>
              <img src={robo3} alt="" />
            </li>
            <li>
              <p>
                4. Robôs Delta: Esses robôs têm uma estrutura de braços paralelos
                conectados a um mecanismo central. São conhecidos por sua alta
                velocidade e precisão, tornando-os ideais para tarefas que
                exigem movimentos rápidos e repetitivos, como embalagem e
                seleção.
              </p>
              <img src={robo4} alt="" />
            </li>
          </ol>
          <p>
            Durante as aulas, também discutimos sobre as características comuns
            dos robôs industriais, como sensores incorporados para detecção de
            obstáculos e segurança, sistemas de controle avançados para garantir
            movimentos precisos e programação específica para controlar suas
            ações.
          </p>
          <p>
            A compreensão dos diferentes tipos de robôs industriais e suas
            características nos permite identificar as aplicações adequadas para
            cada um deles. É um conhecimento valioso para o desenvolvimento de
            soluções de automação eficientes e adaptadas às necessidades da
            indústria
          </p>
        </section>
      </main>
      <motion.aside
        initial={{ y: 900 }}
        animate={{ y: scrollY }}
        transition={{
          type: "spring",
          duration: 0.3,
          stiffness: 50,
        }}
      >
        <a href="#introducao">
          <div className="section-title">
            <span className="green-circle 1"></span>
            <h3>Introdução</h3>
          </div>
        </a>
        <a href="#linguagem">
          <div className="section-title">
            <span className="green-circle 2"></span>
            <h3>Linguagem de Programação</h3>
          </div>
        </a>
        <a href="#automacao">
          <div className="section-title">
            <span className="green-circle 3"></span>
            <h3>Automação industrial</h3>
          </div>
        </a>
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
