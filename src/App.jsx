import GlobalStyle from "./components/GLobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Actions from "./pages/Actions";
import HowToHelp from "./pages/HowToHelp";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Home />
        <About />
        <Actions />
        <HowToHelp />
      </Body>
    </>
  );
}

export default App;

const Body = styled.body`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
