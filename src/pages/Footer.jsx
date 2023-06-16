import { FooterSection, DogFooter } from "../components/Footer/FooterSection";
import footerDog from "../assets/imgs/footerDog.png";
export default function Footer() {
  return (
    <>
      <FooterSection>
        <DogFooter src={footerDog}></DogFooter>
      </FooterSection>
    </>
  );
}
