import GlobalStyle from "./components/GLobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Home />
        <About />
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
