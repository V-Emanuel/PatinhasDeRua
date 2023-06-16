import { FooterSection, DogFooter } from "../components/Footer/FooterSection";
import footerDog from "../assets/imgs/footerDog.png";
export default function Footer() {
  return (
    <>
      <FooterSection>
        <DogFooter src={footerDog}></DogFooter>
        <span>
          <p>
            "Antes de ter amado um animal, parte da nossa alma permanece
            desacordada"
          </p>
          <h5>- Anatole France</h5>
        </span>
      </FooterSection>
    </>
  );
}
