import * as Color from 'color';
import merge from 'lodash/merge';
import { Platform, TextStyle, ViewStyle } from 'react-native';

import { InteractivityState } from '../../interactivity/InteractivityState';
// prettier-ignore
import {
  ThemedStyledButtonProps,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { TextTransformation } from '../../widgets/TextTransformation';
import { FontWeight } from '../FontWeight';
import { FontWeightValues } from '../FontWeightValues';
import { getFontWeight } from '../getFontWeight';
import { ColorVariant } from './ColorVariant';

interface ThemePaletteColor {
  readonly color: string;
  readonly onColor: string;
}

interface ThemePaletteColorVariant {
  readonly dark: ThemePaletteColor;
  readonly light: ThemePaletteColor;
  readonly normal: ThemePaletteColor;
}

interface TypographyElement {
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

interface TypographyComponents {
  readonly caption: TypographyElement;
  readonly headline1: TypographyElement;
  readonly headline2: TypographyElement;
  readonly headline3: TypographyElement;
  readonly headline4: TypographyElement;
  readonly headline5: TypographyElement;
  readonly headline6: TypographyElement;
  readonly overline: TypographyElement;
  readonly paragraph1: TypographyElement;
  readonly paragraph2: TypographyElement;
  readonly subtitle1: TypographyElement;
  readonly subtitle2: TypographyElement;
}
/*
interface IButtonInnerContainer {
  readonly height?: number;
  readonly minHeight?: number;
  readonly minWidth?: number;
  readonly width?: number;
}
*/

type GetButtonContainerDynamicStyles = (
  props: ThemedStyledButtonProps,
) => ViewStyle;

type GetButtonLabelDynamicStyles = (
  props: ThemedStyledButtonProps,
) => TextStyle;

/* BEGIN OPTIONAL BUTTON STUFF */

interface OptionalButtonContainerStyles {
  readonly getDynamicCustomStyles?: GetButtonContainerDynamicStyles;
  readonly getDynamicStyles?: GetButtonContainerDynamicStyles;
  readonly styles?: ViewStyle;
}

interface OptionalButtonLabelStyles {
  readonly getDynamicCustomStyles?: GetButtonLabelDynamicStyles;
  readonly getDynamicStyles?: GetButtonLabelDynamicStyles;
  readonly styles?: TextStyle;
}

interface OptionalButtonTheme {
  readonly innerContainer?: OptionalButtonContainerStyles;
  readonly label?: OptionalButtonLabelStyles;
  readonly outerContainer?: OptionalButtonContainerStyles;
}

interface OptionalButtonStateTheme {
  readonly allStates?: OptionalButtonTheme;
  readonly disabled?: OptionalButtonTheme;
  readonly enabled?: OptionalButtonTheme;
  readonly focused?: OptionalButtonTheme;
  readonly hovered?: OptionalButtonTheme;
  readonly pressed?: OptionalButtonTheme;
}

interface OptionalSizedButtonTheme {
  readonly allSizes?: OptionalButtonStateTheme;
  readonly xsmall?: OptionalButtonStateTheme;
  readonly small?: OptionalButtonStateTheme;
  readonly regular?: OptionalButtonStateTheme;
  readonly large?: OptionalButtonStateTheme;
  readonly xlarge?: OptionalButtonStateTheme;
}

interface OptionalButtonVariantTheme {
  readonly allVariants?: OptionalSizedButtonTheme;
  readonly contained?: OptionalSizedButtonTheme;
  readonly containedRaised?: OptionalSizedButtonTheme;
  readonly default?: OptionalSizedButtonTheme;
  readonly outlined?: OptionalSizedButtonTheme;
}

/* END OPTIONAL BUTTON STUFF */

export interface ButtonContainerStyles {
  readonly getDynamicCustomStyles: GetButtonContainerDynamicStyles;
  readonly getDynamicStyles: GetButtonContainerDynamicStyles;
  readonly styles: ViewStyle;
}

export interface ButtonLabelStyles {
  readonly getDynamicCustomStyles: GetButtonLabelDynamicStyles;
  readonly getDynamicStyles: GetButtonLabelDynamicStyles;
  readonly styles: TextStyle;
}

interface ButtonTheme {
  readonly innerContainer: ButtonContainerStyles;
  readonly label: ButtonLabelStyles;
  readonly outerContainer: ButtonContainerStyles;
}

interface ButtonStateTheme {
  readonly allStates: ButtonTheme;
  readonly disabled: ButtonTheme;
  readonly enabled: ButtonTheme;
  readonly focused: ButtonTheme;
  readonly hovered: ButtonTheme;
  readonly pressed: ButtonTheme;
}

interface SizedButtonTheme {
  readonly allSizes: ButtonStateTheme;
  readonly xsmall: ButtonStateTheme;
  readonly small: ButtonStateTheme;
  readonly regular: ButtonStateTheme;
  readonly large: ButtonStateTheme;
  readonly xlarge: ButtonStateTheme;
}

interface ButtonVariantTheme {
  readonly allVariants: SizedButtonTheme;
  readonly contained: SizedButtonTheme;
  readonly containedRaised: SizedButtonTheme;
  readonly default: SizedButtonTheme;
  readonly outlined: SizedButtonTheme;
}

interface ThemeComponents {
  readonly button: ButtonVariantTheme;
  readonly typography: TypographyComponents;
}

interface ThemePalette {
  readonly background: ThemePaletteColor;
  readonly error: ThemePaletteColor;
  readonly primary: ThemePaletteColorVariant;
  readonly secondary: ThemePaletteColorVariant;
  readonly surface: ThemePaletteColor;
}

export interface Theme {
  readonly components: ThemeComponents;
  readonly palette: ThemePalette;
}

/*
interface IThemeCollection {
  readonly [name: string]: Theme;
}
*/

type IGetThemedColor = (
  props: {
    colorVariant?: ColorVariant;
    onColor?: boolean;
    theme: Theme;
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

type IGetButtonContainerStyles = (props: ThemedStyledButtonProps) => ViewStyle;

type IGetButtonLabelStyles = (props: ThemedStyledButtonProps) => TextStyle;

const getButtonContainerStyles: IGetButtonContainerStyles = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
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

const getEnabledContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: getThemedColor({ colorVariant, theme }),
});

const getFocusedContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.35)
    .toString(),
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

const androidShadows: { [key: string]: number } = {};
androidShadows[InteractivityState.DISABLED] = 0;
androidShadows[InteractivityState.ENABLED] = 2;
androidShadows[InteractivityState.FOCUSED] = 4;
/*
 * No hover state on native Android.
 */
// androidShadows[InteractivityState.HOVERED] = 0;
/**/
androidShadows[InteractivityState.PRESSED] = 8;

const iosShadows: { [key: string]: ViewStyle } = {};
iosShadows[InteractivityState.DISABLED] = {};
iosShadows[InteractivityState.ENABLED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 1.6, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 1,
};
iosShadows[InteractivityState.FOCUSED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 3.4, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};
/*
 * No hover state on native iOS.
 */
// iosShadows[InteractivityState.HOVERED] = {};
/**/
iosShadows[InteractivityState.PRESSED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 5, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
};

const webShadows: { [key: string]: string } = {};
webShadows[InteractivityState.DISABLED] = '0 0 0 0 rgba(0,0,0,0)';
webShadows[InteractivityState.ENABLED] = `0 3px 1px -2px rgba(0,0,0,.2),
  0 2px 2px 0 rgba(0,0,0,.14),
  0 1px 5px 0 rgba(0,0,0,.12)`;
webShadows[InteractivityState.HOVERED] = `0px 2px 4px -1px rgba(0,0,0,.2),
  0px 4px 5px 0px rgba(0,0,0,.14),
  0px 1px 10px 0px rgba(0,0,0,.12)`;
webShadows[InteractivityState.FOCUSED] = webShadows[InteractivityState.HOVERED];
webShadows[InteractivityState.PRESSED] = `0px 5px 5px -3px rgba(0,0,0,.2),
  0px 8px 10px 1px rgba(0,0,0,.14),
  0px 3px 14px 2px rgba(0,0,0,.12)`;

const getContainerElevationStyles: IGetButtonContainerStyles = ({
  interactivityState = InteractivityState.ENABLED,
}) => ({
  ...Platform.select({
    android: {
      elevation: androidShadows[interactivityState],
    },
    ios: { ...iosShadows[interactivityState] },
    web: {
      boxShadow: webShadows[interactivityState],
    },
  }),
});

const getDisabledContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  interactivityState = InteractivityState.ENABLED,
  theme,
}) => ({
  ...getDisabledContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ interactivityState, theme }),
});

const getEnabledContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  interactivityState = InteractivityState.ENABLED,
  theme,
}) => ({
  ...getEnabledContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ interactivityState, theme }),
});

const getFocusedContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  interactivityState = InteractivityState.ENABLED,
  theme,
}) => ({
  ...getFocusedContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ interactivityState, theme }),
});

const getHoveredContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  interactivityState = InteractivityState.ENABLED,
  theme,
}) => ({
  ...getHoveredContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ interactivityState, theme }),
});

const getPressedContainedRaisedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  interactivityState = InteractivityState.ENABLED,
  theme,
}) => ({
  ...getPressedContainedContainerStyles({ colorVariant, theme }),
  ...getContainerElevationStyles({ interactivityState, theme }),
});

const getDisabledDefaultContainerStyles: IGetButtonContainerStyles = () => ({
  backgroundColor: 'transparent',
});

const getEnabledDefaultContainerStyles: IGetButtonContainerStyles = () => ({
  backgroundColor: 'transparent',
});

const getFocusedDefaultContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.89)
    .toString(),
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

const getDisabledOutlinedContainerStyles: IGetButtonContainerStyles = (
  props: ThemedStyledButtonProps,
) => ({
  ...getDisabledDefaultContainerStyles(props),
});

const getEnabledOutlinedContainerStyles: IGetButtonContainerStyles = (
  props: ThemedStyledButtonProps,
) => ({
  ...getEnabledDefaultContainerStyles(props),
});

const getFocusedOutlinedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  ...getFocusedDefaultContainerStyles({ colorVariant, theme }),
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

const getContainedLabelStyles: IGetButtonLabelStyles = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: true }),
});

const getContainedRaisedLabelStyles: IGetButtonLabelStyles = (
  props: ThemedStyledButtonProps,
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
  props: ThemedStyledButtonProps,
) => ({
  ...getDefaultLabelStyles(props),
});

const emptyButtonTheme: ButtonTheme = {
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
  outerContainer: {
    getDynamicCustomStyles: () => ({}),
    getDynamicStyles: () => ({}),
    styles: {},
  },
};

const emptyButtonStateTheme: ButtonStateTheme = {
  allStates: emptyButtonTheme,
  disabled: emptyButtonTheme,
  enabled: emptyButtonTheme,
  focused: emptyButtonTheme,
  hovered: emptyButtonTheme,
  pressed: emptyButtonTheme,
};

const emptySizedButtonTheme: SizedButtonTheme = {
  allSizes: emptyButtonStateTheme,
  large: emptyButtonStateTheme,
  regular: emptyButtonStateTheme,
  small: emptyButtonStateTheme,
  xlarge: emptyButtonStateTheme,
  xsmall: emptyButtonStateTheme,
};

const emptyButtonVariantTheme: ButtonVariantTheme = {
  allVariants: emptySizedButtonTheme,
  contained: emptySizedButtonTheme,
  containedRaised: emptySizedButtonTheme,
  default: emptySizedButtonTheme,
  outlined: emptySizedButtonTheme,
};

const typographyComponentsTheme: TypographyComponents = {
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

const themePalette: ThemePalette = {
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

const buttonTheme: OptionalButtonVariantTheme = {
  allVariants: {
    allSizes: {
      allStates: {
        innerContainer: {
          getDynamicStyles: getButtonContainerStyles,
          styles: {
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
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
        outerContainer: {
          getDynamicStyles: getButtonContainerStyles,
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
      enabled: {
        innerContainer: {
          getDynamicStyles: getEnabledContainedContainerStyles,
        },
      },
      focused: {
        innerContainer: {
          getDynamicStyles: getFocusedContainedContainerStyles,
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
      enabled: {
        innerContainer: {
          getDynamicStyles: getEnabledContainedRaisedContainerStyles,
        },
      },
      focused: {
        innerContainer: {
          getDynamicStyles: getFocusedContainedRaisedContainerStyles,
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
      enabled: {
        innerContainer: {
          getDynamicStyles: getEnabledDefaultContainerStyles,
        },
      },
      focused: {
        innerContainer: {
          getDynamicStyles: getFocusedDefaultContainerStyles,
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
      enabled: {
        innerContainer: {
          getDynamicStyles: getEnabledOutlinedContainerStyles,
        },
      },
      focused: {
        innerContainer: {
          getDynamicStyles: getFocusedOutlinedContainerStyles,
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

export const PurpleTealTheme: Theme = {
  components: {
    button: merge<{}, ButtonVariantTheme, OptionalButtonVariantTheme>(
      {},
      emptyButtonVariantTheme,
      buttonTheme,
    ),
    typography: typographyComponentsTheme,
  },
  palette: themePalette,
};
