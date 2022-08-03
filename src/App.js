import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import GlobalStyles from "./Components/Styles/Global";
import Content from "./Content";
import Footer from "./Components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {Content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
