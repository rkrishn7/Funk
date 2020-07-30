import { get } from 'lodash';
import { defaultTheme } from '@src/lib/styles/theme';

export const themeGet = (prop: string) => ({ theme }: any) => get(theme, prop, get(defaultTheme, prop));