import {
  datascience1,
  datascience2,
  datascience3,
  datascience4,
  datascience5,
  datascience6,
  datascience7,
} from "../../../images";
import "../../page02/style.css";

export default function DataCience() {
  return (
    <>
      <section id="datascience">
        <p>
          Neste semestre, em nosso curso de ciência de dados, começamos a
          compreender a importância da amostragem na análise estatística.
          Aprendemos sobre amostragem aleatória, onde cada elemento da população
          tem uma chance igual de ser selecionado; a amostragem sistemática, que
          envolve a seleção de elementos em intervalos regulares; e a amostragem
          estratificada, que divide a população em grupos homogêneos e seleciona
          amostras de cada grupo.
        </p>
        <img src={datascience1} alt="" style={{ width: 650 }} />

        <p>
          Avançamos no estudo das medidas de tendência central, que nos ajudam a
          entender os dados resumindo-os em um único valor. Aprendemos sobre
          moda, a qual pode ser unimodal (um valor que ocorre mais
          frequentemente), bimodal (dois valores que ocorrem com frequência
          semelhante), polimodal (múltiplos valores frequentes) ou amodal
          (nenhum valor que se destaca em frequência). Também estudamos a
          mediana, que é o valor central de um conjunto de dados quando
          ordenados em ordem crescente.
        </p>

        <p>
          Para colocar em prática esses conceitos, aplicamos essas ideias ao
          famoso dataframe do Titanic, buscando entender padrões e
          características dos passageiros e sobreviventes.
        </p>
        <img src={datascience2} alt="" style={{ width: 650 }} />
        <p>
          Seguimos adiante no curso explorando medidas de posição como o
          percentil, que divide os dados em 100 partes iguais, e o quartil, que
          divide os dados em quatro partes iguais. Estas medidas nos ajudam a
          entender a distribuição dos dados.
        </p>
        <p>
          Aprofundamo-nos em medidas de dispersão, as quais indicam o grau de
          variabilidade dos dados. A amplitude, que é a diferença entre o maior
          e o menor valor, foi o primeiro conceito abordado. Em seguida,
          discutimos sobre a variância, que mede a dispersão dos dados em
          relação à média, e o desvio padrão, que é a raiz quadrada da variância
          e indica a quantidade média que os valores se desviam da média.
        </p>
        <p>
          O estudo de testes de hipóteses nos permitiu entender melhor a
          diferença entre amostras. Aprendemos a aplicar o teste Qui-Quadrado,
          para verificar se existe uma relação entre duas variáveis categóricas,
          o teste Shapiro-Wilk, usado para avaliar a normalidade dos dados, e o
          teste Anderson-Darling, também aplicado para testar a aderência à
          normalidade.
        </p>
        <img src={datascience3} alt="" style={{ width: 350 }} />
        <img src={datascience4} alt="" style={{ width: 350, marginLeft: 25 }} />
        <p>
          Dentro da inferência estatística, conseguimos entender como fazer
          previsões e tirar conclusões sobre a população a partir de amostras.
          Aqui, a regressão logística foi uma ferramenta valiosa para prever
          variáveis categóricas a partir de uma ou mais variáveis independentes.
        </p>

        <p>
          Finalmente, nos dedicamos ao estudo do cálculo, especificamente
          derivadas e limites, que são essenciais para a otimização de
          algoritmos de aprendizado de máquina. As derivadas nos ajudam a
          entender as taxas de mudança, enquanto os limites nos permitem
          explorar o comportamento de uma função à medida que seus argumentos se
          aproximam de um determinado valor.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Graph_of_sliding_derivative_line.gif"
          alt=""
          style={{ width: "250px" }}
        />
        <img src={datascience5} alt="" style={{ width: 250, marginLeft: 25 }} />
        <img src={datascience6} alt="" style={{ width: 250, marginLeft: 25 }} />
        <p>
          Nesse sentido, conseguimos navegar por diversos temas fundamentais da
          ciência de dados, solidificando a base para análises mais complexas e
          aplicações
        </p>

        <img src={datascience7} alt="" style={{ width: 650, marginLeft: 25 }} />
      </section>
    </>
  );
}
