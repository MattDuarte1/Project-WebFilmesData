import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { light } from "./light";
import { dark } from "./dark";
import { Header } from "../components/header";
import { GlobalStyle } from "./globalStyle";
import { MainRoutes } from "../routes/routes";

export const Layout = () => {
  const [currentTheme, setCurrentTheme] = useState(light);

  const handleChangeTheme = () =>
    currentTheme === light ? setCurrentTheme(dark) : setCurrentTheme(light);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header funcTheme={handleChangeTheme} stateTheme={currentTheme} />
      <main>
        <MainRoutes />
      </main>
    </ThemeProvider>
  );
};
