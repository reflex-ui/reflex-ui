import * as Color from 'color';
import merge from 'lodash/merge';
import { Platform, TextStyle, ViewStyle } from 'react-native';

// prettier-ignore
import {
  IThemedLabelButtonStyleProps,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { TextTransformation } from '../../widgets/TextTransformation';
import { FontWeight } from '../FontWeight';
import { FontWeightValues } from '../FontWeightValues';
import { getFontWeight } from '../getFontWeight';
import { ButtonState } from './ButtonState';
import { ColorVariant } from './ColorVariant';

interface IThemePaletteColor {
  readonly color: string;
  readonly onColor: string;
}

interface IThemePaletteColorVariant {
  readonly dark: IThemePaletteColor;
  readonly light: IThemePaletteColor;
  readonly normal: IThemePaletteColor;
}

interface ITypographyElement {
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

interface ITypographyComponents {
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
/*
interface IButtonInnerContainer {
  readonly height?: number;
  readonly minHeight?: number;
  readonly minWidth?: number;
  readonly width?: number;
}
*/

type IGetButtonContainerDynamicStyles = (
  props: IThemedLabelButtonStyleProps,
) => ViewStyle;

type IGetButtonLabelDynamicStyles = (
  props: IThemedLabelButtonStyleProps,
) => TextStyle;

/* BEGIN BUTTON PROPS */

interface IButtonContainerStylesProps {
  readonly getDynamicCustomStyles?: IGetButtonContainerDynamicStyles;
  readonly getDynamicStyles?: IGetButtonContainerDynamicStyles;
  readonly styles?: ViewStyle;
}

interface IButtonLabelStylesProps {
  readonly getDynamicCustomStyles?: IGetButtonLabelDynamicStyles;
  readonly getDynamicStyles?: IGetButtonLabelDynamicStyles;
  readonly styles?: TextStyle;
}

interface IButtonThemeProps {
  readonly innerContainer?: IButtonContainerStylesProps;
  readonly label?: IButtonLabelStylesProps;
}

interface IButtonStateThemeProps {
  readonly allStates?: IButtonThemeProps;
  readonly disabled?: IButtonThemeProps;
  readonly hovered?: IButtonThemeProps;
  readonly pressed?: IButtonThemeProps;
  readonly regular?: IButtonThemeProps;
}

interface ISizedButtonThemeProps {
  readonly allSizes?: IButtonStateThemeProps;
  readonly xsmall?: IButtonStateThemeProps;
  readonly small?: IButtonStateThemeProps;
  readonly regular?: IButtonStateThemeProps;
  readonly large?: IButtonStateThemeProps;
  readonly xlarge?: IButtonStateThemeProps;
}

interface IButtonVariantThemeProps {
  readonly allVariants?: ISizedButtonThemeProps;
  readonly contained?: ISizedButtonThemeProps;
  readonly containedRaised?: ISizedButtonThemeProps;
  readonly default?: ISizedButtonThemeProps;
  readonly outlined?: ISizedButtonThemeProps;
}

/* END BUTTON PROPS */

export interface IButtonContainerStyles {
  readonly getDynamicCustomStyles: IGetButtonContainerDynamicStyles;
  readonly getDynamicStyles: IGetButtonContainerDynamicStyles;
  readonly styles: ViewStyle;
}

export interface IButtonLabelStyles {
  readonly getDynamicCustomStyles: IGetButtonLabelDynamicStyles;
  readonly getDynamicStyles: IGetButtonLabelDynamicStyles;
  readonly styles: TextStyle;
}

interface IButtonTheme {
  readonly innerContainer: IButtonContainerStyles;
  readonly label: IButtonLabelStyles;
}

interface IButtonStateTheme {
  readonly allStates: IButtonTheme;
  readonly disabled: IButtonTheme;
  readonly hovered: IButtonTheme;
  readonly pressed: IButtonTheme;
  readonly regular: IButtonTheme;
}

interface ISizedButtonTheme {
  readonly allSizes: IButtonStateTheme;
  readonly xsmall: IButtonStateTheme;
  readonly small: IButtonStateTheme;
  readonly regular: IButtonStateTheme;
  readonly large: IButtonStateTheme;
  readonly xlarge: IButtonStateTheme;
}

interface IButtonVariantTheme {
  readonly allVariants: ISizedButtonTheme;
  readonly contained: ISizedButtonTheme;
  readonly containedRaised: ISizedButtonTheme;
  readonly default: ISizedButtonTheme;
  readonly outlined: ISizedButtonTheme;
}

interface IComponents {
  readonly button: IButtonVariantTheme;
  readonly typography: ITypographyComponents;
}

interface IThemePalette {
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

/*
interface IThemeCollection {
  readonly [name: string]: ITheme;
}
*/

type IGetThemedColor = (
  props: {
    colorVariant?: ColorVariant;
    onColor?: boolean;
    theme: ITheme;
  },
) => string;

const getThemedColor: IGetThemedColor = ({
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  onColor,
  theme,
}): string => {
  switch (colorVariant) {
    case ColorVariant.PRIMARY_DARK:
      return onColor
        ? theme.palette.primary.dark.onColor
        : theme.palette.primary.dark.color;
    case ColorVariant.PRIMARY_LIGHT:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
    case ColorVariant.PRIMARY_NORMAL:
      return onColor
        ? theme.palette.primary.normal.onColor
        : theme.palette.primary.normal.color;
    case ColorVariant.SECONDARY_DARK:
      return onColor
        ? theme.palette.secondary.dark.onColor
        : theme.palette.secondary.dark.color;
    case ColorVariant.SECONDARY_LIGHT:
      return onColor
        ? theme.palette.secondary.light.onColor
        : theme.palette.secondary.light.color;
    case ColorVariant.SECONDARY_NORMAL:
      return onColor
        ? theme.palette.secondary.normal.onColor
        : theme.palette.secondary.normal.color;
    default:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
  }
};

type IGetFontFamily = () => string;

const getFontFamily: IGetFontFamily = (): string => 'System';

type IGetButtonContainerStyles = (
  props: IThemedLabelButtonStyleProps,
) => ViewStyle;

type IGetButtonLabelStyles = (props: IThemedLabelButtonStyleProps) => TextStyle;

const getButtonContainerStyles: IGetButtonContainerStyles = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
});

const getOutlinedContainerCommonStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}): ViewStyle => ({
  borderColor: getThemedColor({ colorVariant, theme }),
});

const getDisabledContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: getThemedColor({ colorVariant, theme }),
});

const getHoveredContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.12)
    .toString(),
});

const getPressedContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.6)
    .toString(),
});

const getRegularContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: getThemedColor({ colorVariant, theme }),
});

const androidShadows: { [key: string]: number } = {};
androidShadows[ButtonState.DISABLED] = 0;
androidShadows[ButtonState.REGULAR] = 2;
/*
 * No hover state on native Android.
 */
// androidShadows[ButtonState.HOVERED] = 0;
/**/
androidShadows[ButtonState.PRESSED] = 8;

const iosShadows: { [key: string]: ViewStyle } = {};
iosShadows[ButtonState.DISABLED] = {};
iosShadows[ButtonState.REGULAR] = {
  shadowColor: '#000000',
  shadowOffset: { height: 1.6, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 1,
};
/*
 * No hover state on native iOS.
 */
// iosShadows[ButtonState.HOVERED] = {};
/**/
iosShadows[ButtonState.PRESSED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 5, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
};

const webShadows: { [key: string]: string } = {};
webShadows[ButtonState.DISABLED] = '0 0 0 0 rgba(0,0,0,0)';
webShadows[ButtonState.REGULAR] = `0 3px 1px -2px rgba(0,0,0,.2),
  0 2px 2px 0 rgba(0,0,0,.14),
  0 1px 5px 0 rgba(0,0,0,.12)`;
webShadows[ButtonState.HOVERED] = `0px 2px 4px -1px rgba(0,0,0,.2),
  0px 4px 5px 0px rgba(0,0,0,.14),
  0px 1px 10px 0px rgba(0,0,0,.12)`;
webShadows[ButtonState.PRESSED] = `0px 5px 5px -3px rgba(0,0,0,.2),
  0px 8px 10px 1px rgba(0,0,0,.14),
  0px 3px 14px 2px rgba(0,0,0,.12)`;

const getContainerElevationStyles: IGetButtonContainerStyles = ({
  state = ButtonState.REGULAR,
}) => ({
  ...Platform.select({
    android: {
      elevation: androidShadows[state],
    },
    ios: { ...iosShadows[state] },
    web: {
      boxShadow: webShadows[state],
    },
  }),
});

const getDisabledContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  state = ButtonState.REGULAR,
  theme,
}) => ({
  ...getDisabledContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ state, theme }),
});

const getHoveredContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  state = ButtonState.REGULAR,
  theme,
}) => ({
  ...getHoveredContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ state, theme }),
});

const getPressedContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  state = ButtonState.REGULAR,
  theme,
}) => ({
  ...getPressedContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ state, theme }),
});

const getRegularContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  state = ButtonState.REGULAR,
  theme,
}) => ({
  ...getRegularContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ state, theme }),
});

const getDisabledDefaultContainerStyles: IGetButtonContainerStyles = () => ({
  backgroundColor: 'transparent',
});

const getHoveredDefaultContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.94)
    .toString(),
});

const getPressedDefaultContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.81)
    .toString(),
});

const getRegularDefaultContainerStyles: IGetButtonContainerStyles = () => ({
  backgroundColor: 'transparent',
});

const getDisabledOutlinedContainerStyles: IGetButtonContainerStyles = (
  props: IThemedLabelButtonStyleProps,
) => ({
  ...getDisabledDefaultContainerStyles(props),
});

const getHoveredOutlinedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  ...getHoveredDefaultContainerStyles({ colorVariant, theme }),
});

const getPressedOutlinedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  ...getPressedDefaultContainerStyles({ colorVariant, theme }),
});

const getRegularOutlinedContainerStyles: IGetButtonContainerStyles = (
  props: IThemedLabelButtonStyleProps,
) => ({
  ...getRegularDefaultContainerStyles(props),
});

const getContainedLabelStyles: IGetButtonLabelStyles = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: true }),
});

const getContainedRaisedLabelStyles: IGetButtonLabelStyles = (
  props: IThemedLabelButtonStyleProps,
) => ({
  ...getContainedLabelStyles(props),
});

const getDefaultLabelStyles: IGetButtonLabelStyles = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: false }),
});

const getOutlinedLabelStyles: IGetButtonLabelStyles = (
  props: IThemedLabelButtonStyleProps,
) => ({
  ...getDefaultLabelStyles(props),
});

const emptyButtonTheme: IButtonTheme = {
  innerContainer: {
    getDynamicCustomStyles: () => ({}),
    getDynamicStyles: () => ({}),
    styles: {},
  },
  label: {
    getDynamicCustomStyles: () => ({}),
    getDynamicStyles: () => ({}),
    styles: {},
  },
};

const emptyButtonStateTheme: IButtonStateTheme = {
  allStates: emptyButtonTheme,
  disabled: emptyButtonTheme,
  hovered: emptyButtonTheme,
  pressed: emptyButtonTheme,
  regular: emptyButtonTheme,
};

const emptySizedButtonTheme: ISizedButtonTheme = {
  allSizes: emptyButtonStateTheme,
  large: emptyButtonStateTheme,
  regular: emptyButtonStateTheme,
  small: emptyButtonStateTheme,
  xlarge: emptyButtonStateTheme,
  xsmall: emptyButtonStateTheme,
};

const emptyButtonVariantTheme: IButtonVariantTheme = {
  allVariants: emptySizedButtonTheme,
  contained: emptySizedButtonTheme,
  containedRaised: emptySizedButtonTheme,
  default: emptySizedButtonTheme,
  outlined: emptySizedButtonTheme,
};

const typographyComponentsTheme: ITypographyComponents = {
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
};

const themePalette: IThemePalette = {
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
};

const buttonTheme: IButtonVariantThemeProps = {
  allVariants: {
    allSizes: {
      allStates: {
        innerContainer: {
          getDynamicStyles: getButtonContainerStyles,
          styles: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        label: {
          styles: {
            fontFamily: getFontFamily(),
            fontWeight: getFontWeight(FontWeight.MEDIUM),
            textTransform: 'uppercase',
            ...Platform.select({
              web: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                userSelect: 'none',
              },
            }),
          },
        },
      },
    },
    large: {
      allStates: {
        innerContainer: {
          styles: {
            borderRadius: 2,
          },
        },
        label: {
          styles: {
            fontSize: 15,
            letterSpacing: 1,
          },
        },
      },
    },
    regular: {
      allStates: {
        innerContainer: {
          styles: {
            borderRadius: 2,
          },
        },
        label: {
          styles: {
            fontSize: 14,
            letterSpacing: 0.75,
          },
        },
      },
    },
    small: {
      allStates: {
        innerContainer: {
          styles: {
            borderRadius: 2,
          },
        },
        label: {
          styles: {
            fontSize: 13,
            letterSpacing: 0.5,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        innerContainer: {
          styles: {
            borderRadius: 4,
          },
        },
        label: {
          styles: {
            fontSize: 16,
            letterSpacing: 1.25,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        innerContainer: {
          styles: {
            borderRadius: 2,
          },
        },
        label: {
          styles: {
            fontSize: 12,
            letterSpacing: 0.25,
          },
        },
      },
    },
  },
  contained: {
    allSizes: {
      allStates: {
        label: {
          getDynamicStyles: getContainedLabelStyles,
        },
      },
      disabled: {
        innerContainer: {
          getDynamicStyles: getDisabledContainedContainerStyles,
        },
      },
      hovered: {
        innerContainer: {
          getDynamicStyles: getHoveredContainedContainerStyles,
        },
      },
      pressed: {
        innerContainer: {
          getDynamicStyles: getPressedContainedContainerStyles,
        },
      },
      regular: {
        innerContainer: {
          getDynamicStyles: getRegularContainedContainerStyles,
        },
      },
    },
    large: {
      allStates: {
        innerContainer: {
          styles: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        innerContainer: {
          styles: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    small: {
      allStates: {
        innerContainer: {
          styles: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        innerContainer: {
          styles: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 28,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        innerContainer: {
          styles: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
  containedRaised: {
    allSizes: {
      allStates: {
        label: {
          getDynamicStyles: getContainedRaisedLabelStyles,
        },
      },
      disabled: {
        innerContainer: {
          getDynamicStyles: getDisabledContainedRaisedContainerStyles,
        },
      },
      hovered: {
        innerContainer: {
          getDynamicStyles: getHoveredContainedRaisedContainerStyles,
        },
      },
      pressed: {
        innerContainer: {
          getDynamicStyles: getPressedContainedRaisedContainerStyles,
        },
      },
      regular: {
        innerContainer: {
          getDynamicStyles: getRegularContainedRaisedContainerStyles,
        },
      },
    },
    large: {
      allStates: {
        innerContainer: {
          styles: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        innerContainer: {
          styles: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    small: {
      allStates: {
        innerContainer: {
          styles: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        innerContainer: {
          styles: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 28,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        innerContainer: {
          styles: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
  default: {
    allSizes: {
      allStates: {
        label: {
          getDynamicStyles: getDefaultLabelStyles,
        },
      },
      disabled: {
        innerContainer: {
          getDynamicStyles: getDisabledDefaultContainerStyles,
        },
      },
      hovered: {
        innerContainer: {
          getDynamicStyles: getHoveredDefaultContainerStyles,
        },
      },
      pressed: {
        innerContainer: {
          getDynamicStyles: getPressedDefaultContainerStyles,
        },
      },
      regular: {
        innerContainer: {
          getDynamicStyles: getRegularDefaultContainerStyles,
        },
      },
    },
    large: {
      allStates: {
        innerContainer: {
          styles: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    regular: {
      allStates: {
        innerContainer: {
          styles: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    small: {
      allStates: {
        innerContainer: {
          styles: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        innerContainer: {
          styles: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 70,
            paddingHorizontal: 12,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        innerContainer: {
          styles: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 4,
          },
        },
      },
    },
  },
  outlined: {
    allSizes: {
      allStates: {
        innerContainer: {
          getDynamicStyles: getOutlinedContainerCommonStyles,
        },
        label: {
          getDynamicStyles: getOutlinedLabelStyles,
        },
      },
      disabled: {
        innerContainer: {
          getDynamicStyles: getDisabledOutlinedContainerStyles,
        },
      },
      hovered: {
        innerContainer: {
          getDynamicStyles: getHoveredOutlinedContainerStyles,
        },
      },
      pressed: {
        innerContainer: {
          getDynamicStyles: getPressedOutlinedContainerStyles,
        },
      },
      regular: {
        innerContainer: {
          getDynamicStyles: getRegularOutlinedContainerStyles,
        },
      },
    },
    large: {
      allStates: {
        innerContainer: {
          styles: {
            borderWidth: 2,
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        innerContainer: {
          styles: {
            borderWidth: 2,
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 14,
          },
        },
      },
    },
    small: {
      allStates: {
        innerContainer: {
          styles: {
            borderWidth: 2,
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 14,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        innerContainer: {
          styles: {
            borderWidth: 3,
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 24,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        innerContainer: {
          styles: {
            borderWidth: 1,
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 6,
          },
        },
      },
    },
  },
};

export const PurpleTealTheme: ITheme = {
  components: {
    button: merge<{}, IButtonVariantTheme, IButtonVariantThemeProps>(
      {},
      emptyButtonVariantTheme,
      buttonTheme,
    ),
    typography: typographyComponentsTheme,
  },
  palette: themePalette,
};
