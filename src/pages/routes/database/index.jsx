import { motion } from "framer-motion";

export default function DataBase() {
  return (
    <motion.section
      id="banco"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 1, type: "spring" }}
    >
      <h1>Bancos de Dados</h1>
      <h2>Modelos de Dados e Arquitetura dos Bancos de Dados</h2>
      <p>
        No primeiro semestre de nosso curso no SENAI, a disciplina de Bancos de
        Dados desempenhou um papel crucial em aprofundar nossa compreensão deste
        pilar essencial da Tecnologia da Informação. Afinal, os bancos de dados
        estão no coração de quase todos os sistemas de TI, permitindo a
        organização, armazenamento e recuperação eficientes de informações.
      </p>
      <p>
        Nosso aprendizado se concentrou principalmente nos modelos de dados, que
        são estruturas fundamentais para a organização de informações em um
        banco de dados. Estudamos a fundo o modelo relacional, o mais comum e
        amplamente utilizado, que organiza os dados em tabelas
        inter-relacionadas. Também exploramos o modelo de
        entidade-relacionamento, uma ferramenta de modelagem de dados que
        fornece uma visão gráfica dos elementos de dados e suas conexões.
      </p>
      <p>
        Prosseguimos com uma discussão abrangente sobre a arquitetura e os
        componentes dos bancos de dados. Isso incluiu entender o papel do
        Sistema de Gerenciamento de Banco de Dados (SGBD), e o funcionamento de
        elementos como tabelas, índices, procedimentos armazenados e gatilhos.
        Discutimos as características de SGBDs populares como PostgreSQL.
      </p>
      <p>
        Entramos em detalhes sobre o projeto de banco de dados, incluindo a
        importância de um bom design para garantir a integridade dos dados e
        facilitar o trabalho com os dados. Discutimos conceitos como chaves
        primárias e estrangeiras, normalização e como a indexação pode melhorar
        o desempenho das consultas.
      </p>
      <h2>Aplicação Prática e Projetos de Bancos de Dados</h2>
      <p>
        A prática foi uma parte importante de nosso aprendizado, e tivemos a
        chance de aplicar nosso conhecimento usando a ferramenta PostgreSQL.
        Através desta ferramenta, criamos e manipulamos nossos próprios bancos
        de dados, executamos consultas SQL e vimos em primeira mão como o design
        do banco de dados afeta a maneira como trabalhamos com os dados. Durante
        nossas sessões práticas, usamos UML para desenvolver representações
        claras e precisas de nossos bancos de dados fictícios, incluindo
        livrarias, escolas, faculdades e agências de viagens..
      </p>
      <p>
        Os Diagramas de Entidade-Relacionamento (ER), uma forma específica de
        UML, foram especialmente úteis para ilustrar a estrutura de nosso banco
        de dados. Cada entidade (como "Livro" em um banco de dados de livraria
        ou "Aluno" em um banco de dados de escola) foi representada como um
        retângulo, enquanto as relações entre entidades foram representadas como
        linhas conectando esses retângulos.
      </p>
      <p>
        Além disso, atributos específicos de cada entidade foram incluídos (como
        "Título" e "Autor" para a entidade "Livro"), e as chaves primárias e
        estrangeiras foram claramente indicadas. Este uso de Diagramas ER nos
        ajudou a compreender melhor como as entidades em nosso banco de dados se
        interconectam e interagem, bem como auxiliou na identificação de
        possíveis problemas de design.
      </p>
      <p>
        Ainda mais, esses diagramas nos permitiram comunicar de forma eficaz as
        estruturas do banco de dados com os outros, tornando-se uma ferramenta
        inestimável para o trabalho colaborativo. Ao final de nosso estudo,
        fomos capazes de desenvolver UMLs robustos e eficientes que nos
        auxiliaram na implementação e manutenção de nossos bancos de dados.
      </p>
    </motion.section>
  );
}
