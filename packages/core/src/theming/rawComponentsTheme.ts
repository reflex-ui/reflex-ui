import { rawButtonTheme } from '../components/buttons/theming/rawButtonTheme';
// tslint:disable-next-line:max-line-length
import { rawIconWrapperTheme } from '../components/icons/theming/rawIconWrapperTheme';
// prettier-ignore
import {
  rawTypographyTheme,
} from '../components/typography/theming/rawTypographyTheme';
import { ComponentsTheme } from './ComponentsTheme';

export const rawComponentsTheme: ComponentsTheme = {
  button: rawButtonTheme,
  icon: rawIconWrapperTheme,
  typography: rawTypographyTheme,
};
