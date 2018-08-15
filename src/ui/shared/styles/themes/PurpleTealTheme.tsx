export interface IThemePaletteColor {
  readonly color: string;
  readonly onColor: string;
}

export interface IThemePaletteColorVariant {
  readonly dark: IThemePaletteColor;
  readonly light: IThemePaletteColor;
  readonly normal: IThemePaletteColor;
}

export interface IComponentsColor {
  readonly background: IThemePaletteColor;
  readonly error: IThemePaletteColor;
  readonly surface: IThemePaletteColor;
}

export interface IThemePalette {
  readonly components: IComponentsColor;
  readonly primary: IThemePaletteColorVariant;
  readonly secondary: IThemePaletteColorVariant;
}

export interface ITheme {
  readonly palette: IThemePalette;
}

export interface IThemeCollection {
  readonly [name: string]: ITheme;
}

const PurpleTealTheme: ITheme = {
  palette: {
    components: {
      background: {
        color: '#ffffff',
        onColor: '#000000',
      },
      error: {
        color: '#b00020',
        onColor: '#ffffff',
      },
      surface: {
        color: '#ffffff',
        onColor: '#000000',
      },
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
        color: 'rgba(98,0,238,1)',
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
  },
};

export default PurpleTealTheme;
