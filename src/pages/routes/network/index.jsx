import { map, lanwan, switchrede, historia, rede } from "../../../images";
import { motion } from "framer-motion";
import "../../page02/style.css";

export default function Network() {
  return (
    <motion.section
      id="redes"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 1, type: "spring" }}
    >
      <h1>Redes de Computadores</h1>
      <h2>A Evolução da Internet e suas Conexões.</h2>
      <p>
        A disciplina de Redes de Computadores, abordada neste primeiro semestre
        no SENAI, revelou-se fundamental para aprimorar nosso conhecimento na
        área, que detém notável relevância no setor de TI e permeia todas as
        facetas onde a tecnologia é aplicada.
      </p>
      <p>
        Iniciamos a jornada na matéria revisitando a trajetória da Internet como
        conhecemos hoje. Desde as primeiras redes de comunicação criadas durante
        a Segunda Guerra Mundial, passando pela criação da ARPANET nos anos 60,
        até a explosão do uso da internet na década de 90, e o surgimento das
        redes sociais e serviços de streaming no século XXI. Foi uma verdadeira
        viagem no tempo, observando como a tecnologia e a sociedade evoluíram
        juntas.
      </p>
      <img src={historia} alt="" style={{ width: 600 }} />
      <p>
        Prosseguimos, em seguida, com um estudo aprofundado sobre os principais
        tipos de conexões existentes, como as Redes Locais (LAN), responsáveis
        pela comunicação interna em residências ou empresas, e Redes de Longa
        Distância (WAN), que conectam redes geograficamente distantes, por
        exemplo, a conexão de uma empresa com sua filial em outra cidade.
      </p>
      <img src={lanwan} alt="" style={{ width: 600 }} />
      <h2>
        Componentes Físicos, Distribuição Global e Práticas com o Packet Tracer.
      </h2>
      <p>
        Em nossa exploração sobre os componentes físicos responsáveis pela
        existência e manutenção das redes de computadores, analisamos
        dispositivos como Hubs, que conectam múltiplos dispositivos em uma rede;
        Switches, que direcionam pacotes de dados entre os dispositivos; Cabos
        Coaxiais e de Fibra Óptica, que conduzem os sinais de dados; Servidores
        DHCP, que gerenciam e distribuem endereços IP na rede; e Roteadores, que
        encaminham pacotes de dados entre redes diferentes.
      </p>
      <img src={switchrede} alt="" style={{ width: 600 }} />
      <figcaption>O Switch é o sucessor do Hub</figcaption>
      <p>
        Dedicamos também um tempo considerável para compreender o papel das
        Provedoras de Serviços de Internet (ISPs) e como a Internet é
        distribuída ao redor do mundo. Este estudo abordou o uso de cabos
        submarinos de fibra óptica, satélites e a estrutura de backbone da
        internet que conecta diferentes países e continentes.
      </p>
      <img src={map} alt="" style={{ width: 600 }} />
      <figcaption>Principais conexões submarinas de fibra óptica.</figcaption>
      <p>
        Nossa experiência prática foi potencializada com o uso do software
        Packet Tracer da Cisco. Este nos permitiu manipular e entender em
        detalhes conceitos como implementação de um servidor DHCP funcional, que
        atribui endereços IP automaticamente aos dispositivos da rede;
        comunicação LAN, que é a troca de dados entre dispositivos na mesma rede
        local; interconexão de LANs distintas, um conceito importante para
        grandes organizações; e regulação do acesso à rede por meio de
        sub-redes, criando segmentos na rede para melhorar a segurança e a
        eficiência.
      </p>
      <img src={rede} alt="" style={{ width: 600 }} />
      <figcaption>Atividade realizada utlizando o Packet Tracer.</figcaption>
      <p>
        Em resumo, essa matéria foi uma jornada de imersão no mundo das redes de
        computadores. Através de um equilíbrio de teoria e prática, exploramos a
        fundo o funcionamento das redes e a importância destas na sociedade
        moderna. Os conhecimentos adquiridos certamente serão essenciais em
        nossa futura carreira no campo da TI.
      </p>
    </motion.section>
  );
}
