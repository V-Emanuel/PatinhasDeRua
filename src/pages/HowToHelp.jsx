import { HowToHelpSection } from "../components/HowToHelp/HowToHelpSection";
import { MdPix } from "react-icons/md";
import { HeaderIcons } from "../components/Home/Icons";
import contacts from "../assets/consts/contacts";
export default function HowToHelp() {
  return (
    <HowToHelpSection>
      <h1>COMO NOS AJUDAR?</h1>
      <h3>Através do nosso PIX:</h3>
      <h4>
        <MdPix style={HeaderIcons} /> 56301120582
      </h4>
      <h3>
        Ou entrando em contato com e gente pelo no Instagram ou presencialmente
        pelos endereços:
      </h3>
      {contacts.map((i) => (
        <h4 key={i.id}>
          <ion-icon name={i.ionicon}></ion-icon>
          {i.contact}
        </h4>
      ))}
    </HowToHelpSection>
  );
}
