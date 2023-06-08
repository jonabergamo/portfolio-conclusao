import { motion } from "framer-motion";
import {
  arduino,
  semaforo,
  semaforo1,
  semaforo2,
  robo1,
  robo2,
  robo3,
  robo4,
} from "../../../images";

export default function Page02() {
  function Automation() {}
  return (
    <motion.section
      id="automacao"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{delay:0.3, duration:2, type:'spring'}}
    >
      <h1>Automação industrial</h1>
      <h2>Introdução a sistemas embarcados.</h2>
      <p>
        Começamos com uma introdução ao Arduino, uma plataforma de prototipagem
        eletrônica amplamente utilizada na automação industrial. Aprendi os
        princípios básicos da linguagem C, que é comumente utilizada para
        programar o Arduino. Esses conhecimentos me permitiram criar um semáforo
        funcional no ambiente virtual do Tinkercad, onde pude simular e testar o
        funcionamento do sistema.
      </p>
      <img src={arduino} alt="" />
      <p>
        Para criar o semáforo, utilizamos os pinos digitais do Arduino para
        controlar os LEDs que representam as luzes vermelha, amarela e verde.
        Por exemplo, ao declarar um pino como saída, podemos utilizar comandos
        simples, como digitalWrite(), para ligar ou desligar os LEDs.
      </p>
      <img src={semaforo} alt="" />
      <p>
        Além disso, também aprendemos a utilizar a comunicação serial para
        interagir com o Arduino. Através da porta serial, é possível enviar e
        receber informações entre o Arduino e o computador. Isso permite a
        depuração do código, visualização de mensagens e envio de comandos para
        o Arduino durante a execução do programa.
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
            articulada permite movimentos flexíveis, o que os torna ideais para
            aplicações que exigem alcance e agilidade em tarefas como soldagem e
            pintura.
          </p>
          <img src={robo2} alt="" />
        </li>
        <li>
          <p>
            3. Robôs SCARA: SCARA é a sigla para Selective Compliance Assembly
            Robot Arm (Robô de Montagem com Complacência Seletiva). São robôs de
            braço duplo com movimento horizontal e vertical, permitindo
            movimentos rápidos e precisos em um plano. São frequentemente usados
            em aplicações de montagem e manipulação.
          </p>
          <img src={robo3} alt="" />
        </li>
        <li>
          <p>
            4. Robôs Delta: Esses robôs têm uma estrutura de braços paralelos
            conectados a um mecanismo central. São conhecidos por sua alta
            velocidade e precisão, tornando-os ideais para tarefas que exigem
            movimentos rápidos e repetitivos, como embalagem e seleção.
          </p>
          <img src={robo4} alt="" />
        </li>
      </ol>
      <p>
        Durante as aulas, também discutimos sobre as características comuns dos
        robôs industriais, como sensores incorporados para detecção de
        obstáculos e segurança, sistemas de controle avançados para garantir
        movimentos precisos e programação específica para controlar suas ações.
      </p>
      <p>
        A compreensão dos diferentes tipos de robôs industriais e suas
        características nos permite identificar as aplicações adequadas para
        cada um deles. É um conhecimento valioso para o desenvolvimento de
        soluções de automação eficientes e adaptadas às necessidades da
        indústria
      </p>
    </motion.section>
  );
}
