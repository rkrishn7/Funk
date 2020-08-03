import { merge, get } from 'lodash';

const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    lightCoral: '#F08080',
    lightBlue: '#AFDBD2', 
  },
};

export const createDerivedTheme = (theme: object) => {
  return merge(defaultTheme, theme);
}

export const themeGet = (prop: string) => ({ theme }: any) => get(theme, prop, get(defaultTheme, prop));