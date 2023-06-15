import { Section1, OngName } from "../components/Home/Section1";
import { Header } from "../components/Home/Header";
import { FaPaw } from "react-icons/fa";
import { faPawIcon } from "../components/Home/Icons";

import ItensSection from "../components/Home/ItensSection";
export default function Home() {
  return (
    <>
      <Section1>
        <Header>
          <FaPaw style={faPawIcon} />
        </Header>
        <OngName>
          <h1>Patinhas de Rua</h1>
          <h2>
            A ONG Patinhas de Rua resgata, reabilita e busca lares amorosos para
            animais de rua. Com voluntários dedicados, promove conscientização
            sobre adoção responsável e direitos dos animais. Além disso,
            realizam ações para angariar recursos e garantir o seu funcionamento
            e promover o bem estar dos animais.
          </h2>
        </OngName>
      </Section1>
      <ItensSection></ItensSection>
    </>
  );
}
