import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    border: string;
    inputBackground: string;
    text: string;
    menuColor: string;
    heading: string;
    navBackground: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    sliderInfoBackground: string;
    iconThemeColor: string;
    cardsBackground: string;
  }
}
