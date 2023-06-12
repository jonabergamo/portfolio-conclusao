import { Me } from "../../../images";
import "../../page02/style.css";

export default function Intro() {
  return (
    <section id="introducao">
      <h1>Introdução</h1>
      <img src={Me} alt="" className="photo" style={{ height: 140 }} />
      <p>
        Bem-vindo ao meu site! Aqui você encontrará um resumo emocionante do meu
        semestre na faculdade, repleto de conhecimento, aprendizado e
        conquistas. Sou estudante universitário dedicado, apaixonado pelo meu
        curso e pela busca constante de novos desafios. Durante este semestre,
        mergulhei em diversas disciplinas e projetos estimulantes, expandindo
        meus horizontes e aprimorando minhas habilidades. Através deste site,
        compartilharei com vocês os momentos marcantes, as lições valiosas e as
        experiências enriquecedoras que vivenciei ao longo desses meses.
      </p>
    </section>
  );
}
