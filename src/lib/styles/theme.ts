import { merge, get } from 'lodash';

export const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    violet: '#C1C8E4',
    purple: '#8860D0',
    blue: '#5AB9EA',
    blueGreen: '#84CEEB',
    indigo: '#5680E9',
  },
  get palette() {
    return {
      primary: this.colors.purple,
      secondary: this.colors.indigo,
      muted: this.colors.violet,
      cool: this.colors.blueGreen,
      pop: this.colors.blue,
    };
  },
  fontFamily: 'Verdana, sans-serif',
  padding: [2, 4, 6, 8, 12, 16, 24, 32, 48, 64],
};

export const createDerivedTheme = (theme: object) => {
  return merge(defaultTheme, theme);
}

export const themeGet = (prop: string) => ({ theme }: any) => get(theme, prop, get(defaultTheme, prop));