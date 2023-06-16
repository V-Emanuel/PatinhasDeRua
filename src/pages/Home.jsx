import { Section1, OngName } from "../components/Home/Section1";
import { Header, HeaderText } from "../components/Home/Header";
import { FaPaw } from "react-icons/fa";
import { HeaderIcons } from "../components/Home/Icons";
export default function Home() {
  return (
    <Section1>
      <Header>
        <a href="https://www.youtube.com/watch?v=Yla6z8CX7lU&ab_channel=apenasumHeitor">
          <FaPaw style={HeaderIcons} />
        </a>
        <HeaderText href="about">Sobre</HeaderText>
        <HeaderText href="actions">Ações</HeaderText>
        <HeaderText href="howToHelp">Como nos ajudar?</HeaderText>
      </Header>
      <OngName>
        <h1>Patinhas de Rua</h1>
        <h2>
          A ONG Patinhas de Rua resgata, reabilita e busca lares amorosos para
          animais de rua. Com voluntários dedicados, promove conscientização
          sobre adoção responsável e direitos dos animais. Além disso, realizam
          ações para angariar recursos e garantir o seu funcionamento e promover
          o bem estar dos animais.
        </h2>
      </OngName>
    </Section1>
  );
}
