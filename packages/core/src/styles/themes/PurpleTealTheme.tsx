import { FontWeight, FontWeightValues, getFontWeight } from '../';
import { TextTransformation } from '../../';

export interface IThemePaletteColor {
  readonly color: string;
  readonly onColor: string;
}

export interface IThemePaletteColorVariant {
  readonly dark: IThemePaletteColor;
  readonly light: IThemePaletteColor;
  readonly normal: IThemePaletteColor;
}

export interface ITypographyElement {
  readonly fontFamily: string;
  readonly fontSize: number;
  readonly fontWeight: FontWeightValues;
  readonly letterSpacing?: number;
  readonly marginBottom?: number;
  readonly marginTop?: number;
  readonly paddingBottom?: number;
  readonly paddingTop?: number;
  readonly textTransform?: TextTransformation;
}

export interface ITypographyComponents {
  readonly caption: ITypographyElement;
  readonly headline1: ITypographyElement;
  readonly headline2: ITypographyElement;
  readonly headline3: ITypographyElement;
  readonly headline4: ITypographyElement;
  readonly headline5: ITypographyElement;
  readonly headline6: ITypographyElement;
  readonly overline: ITypographyElement;
  readonly paragraph1: ITypographyElement;
  readonly paragraph2: ITypographyElement;
  readonly subtitle1: ITypographyElement;
  readonly subtitle2: ITypographyElement;
}

export interface IButtonTheme {
  readonly label: ITypographyElement;
}

export interface ISizedButtonTheme {
  readonly xsmall: IButtonTheme;
  readonly small: IButtonTheme;
  readonly regular: IButtonTheme;
  readonly large: IButtonTheme;
  readonly xlarge: IButtonTheme;
}

export interface IComponents {
  readonly button: ISizedButtonTheme;
  readonly typography: ITypographyComponents;
}

export interface IThemePalette {
  readonly background: IThemePaletteColor;
  readonly error: IThemePaletteColor;
  readonly primary: IThemePaletteColorVariant;
  readonly secondary: IThemePaletteColorVariant;
  readonly surface: IThemePaletteColor;
}

export interface ITheme {
  readonly components: IComponents;
  readonly palette: IThemePalette;
}

export interface IThemeCollection {
  readonly [name: string]: ITheme;
}

export type IGetFontFamily = () => string;

export const getFontFamily: IGetFontFamily = (): string => 'System';

const PurpleTealTheme: ITheme = {
  components: {
    button: {
      large: {
        label: {
          fontFamily: getFontFamily(),
          fontSize: 15,
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          letterSpacing: 1,
          textTransform: 'uppercase',
        },
      },
      regular: {
        label: {
          fontFamily: getFontFamily(),
          fontSize: 14,
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          letterSpacing: 0.75,
          textTransform: 'uppercase',
        },
      },
      small: {
        label: {
          fontFamily: getFontFamily(),
          fontSize: 13,
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
      },
      xlarge: {
        label: {
          fontFamily: getFontFamily(),
          fontSize: 16,
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          letterSpacing: 1.25,
          textTransform: 'uppercase',
        },
      },
      xsmall: {
        label: {
          fontFamily: getFontFamily(),
          fontSize: 12,
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          letterSpacing: 0.25,
          textTransform: 'uppercase',
        },
      },
    },
    typography: {
      caption: {
        fontFamily: getFontFamily(),
        fontSize: 12,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0.4,
      },
      headline1: {
        fontFamily: getFontFamily(),
        fontSize: 96,
        fontWeight: getFontWeight(FontWeight.LIGHT),
        letterSpacing: -1.5,
      },
      headline2: {
        fontFamily: getFontFamily(),
        fontSize: 60,
        fontWeight: getFontWeight(FontWeight.LIGHT),
        letterSpacing: -0.5,
      },
      headline3: {
        fontFamily: getFontFamily(),
        fontSize: 48,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0,
      },
      headline4: {
        fontFamily: getFontFamily(),
        fontSize: 34,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0.25,
      },
      headline5: {
        fontFamily: getFontFamily(),
        fontSize: 24,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0,
      },
      headline6: {
        fontFamily: getFontFamily(),
        fontSize: 20,
        fontWeight: getFontWeight(FontWeight.MEDIUM),
        letterSpacing: 0.15,
      },
      overline: {
        fontFamily: getFontFamily(),
        fontSize: 10,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 1.5,
        textTransform: 'uppercase',
      },
      paragraph1: {
        fontFamily: getFontFamily(),
        fontSize: 16,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0.5,
      },
      paragraph2: {
        fontFamily: getFontFamily(),
        fontSize: 14,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0.25,
      },
      subtitle1: {
        fontFamily: getFontFamily(),
        fontSize: 16,
        fontWeight: getFontWeight(FontWeight.REGULAR),
        letterSpacing: 0.15,
      },
      subtitle2: {
        fontFamily: getFontFamily(),
        fontSize: 14,
        fontWeight: getFontWeight(FontWeight.MEDIUM),
        letterSpacing: 0.1,
      },
    },
  },
  palette: {
    background: {
      color: '#ffffff',
      onColor: '#000000',
    },
    error: {
      color: '#b00020',
      onColor: '#ffffff',
    },
    primary: {
      dark: {
        color: '#0400ba',
        onColor: '#ffffff',
      },
      light: {
        color: '#9e47ff',
        onColor: '#ffffff',
      },
      normal: {
        color: '#6200ee',
        // color: 'rgb(98,0,238)',
        onColor: '#ffffff',
      },
    },
    secondary: {
      dark: {
        color: '#00a895',
        onColor: '#000000',
      },
      light: {
        color: '#66fff8',
        onColor: '#000000',
      },
      normal: {
        color: '#03dac5',
        onColor: '#000000',
      },
    },
    surface: {
      color: '#ffffff',
      onColor: '#000000',
    },
  },
};

export default PurpleTealTheme;
