import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      black: string;
      primary: string;
      secondary: string;
      grey: string;
      success: string;
      error: string;
      text1: string;
      text2: string;
      text3: string;
      boxBackground: string;
    };
  }
}
