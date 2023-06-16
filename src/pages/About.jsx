import AboutSection from "../components/About/AboutSection";
import { StartPost, StartPostContent } from "../components/About/StartPost";
import comeco from "../assets/imgs/PostsImgs/comeco.jpg";
export default function About() {
  return (
    <AboutSection>
      <StartPostContent>
        <h1>ONDE TUDO COMEÇOU!</h1>
        <StartPost src={comeco} />
      </StartPostContent>
      <span>
        <h1>POR QUE EXISTIMOS?</h1>
        <p>
          A ONG Patinhas de Rua é uma organização sem fins lucrativos que tem
          como objetivo resgatar animais de rua, proporcionar cuidados adequados
          a eles e encontrar novos lares por meio de adoções responsáveis.
          Atualmente, a ONG acolhe cerca de 50 animais em um espaço
          temporariamente cedido pela prefeitura. Todos os recursos financeiros
          arrecadados são utilizados para garantir sua alimentação, higiene, bem
          como para aquisição de medicamentos e realização de cirurgias.
          Convidamos vocês a conhecerem nosso trabalho e se juntarem a essa
          causa, pois juntos somos mais fortes!
        </p>
      </span>
    </AboutSection>
  );
}
