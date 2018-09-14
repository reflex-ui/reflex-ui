import * as Color from 'color';
import merge from 'lodash/merge';
import * as React from 'react';
import {
  Platform,
  RegisteredStyle,
  // StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { InteractivityState } from '../../interactivity/InteractivityState';
import { Size } from '../../widgets';
// prettier-ignore
import {
  ThemedVisualButtonProps, Variant,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { TextTransformation } from '../../widgets/TextTransformation';
import { FontWeight } from '../FontWeight';
import { FontWeightValues } from '../FontWeightValues';
import { getFontWeight } from '../getFontWeight';
import { getThemedColor } from './getThemedColor';
import { withRaiseEffect } from './withRaiseEffect';
import { withRippleEffect } from './withRippleEffect';

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
  props: ThemedVisualButtonProps,
) => ViewStyle;

type GetButtonLabelDynamicStyles = (
  props: ThemedVisualButtonProps,
) => TextStyle;
/*
type StyledContainerFactory = (
  props: ThemedVisualButtonProps,
) => React.ComponentType<{}>;
*/

export type ButtonContainerProps = ThemedVisualButtonProps & ViewProps;

export type ButtonTextProps = ThemedVisualButtonProps & TextProps;

export type ButtonContainer = React.ComponentType<ButtonContainerProps>;

export type TouchableComponent = React.ComponentType<
  TouchableWithoutFeedbackProps
>;

export type TextComponent = React.ComponentType<ButtonTextProps>;

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
  readonly InnerContainer?: ButtonContainer;
  readonly large?: OptionalButtonStateTheme;
  readonly regular?: OptionalButtonStateTheme;
  readonly small?: OptionalButtonStateTheme;
  readonly Text?: TextComponent;
  readonly Touchable?: TouchableComponent;
  readonly xlarge?: OptionalButtonStateTheme;
  readonly xsmall?: OptionalButtonStateTheme;
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
  readonly InnerContainer: ButtonContainer;
  readonly large: ButtonStateTheme;
  readonly regular: ButtonStateTheme;
  readonly small: ButtonStateTheme;
  readonly Text: TextComponent;
  readonly Touchable: TouchableComponent;
  readonly xlarge: ButtonStateTheme;
  readonly xsmall: ButtonStateTheme;
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

type IGetFontFamily = () => string;

const getFontFamily: IGetFontFamily = (): string => 'System';

type IGetButtonContainerStyles = (props: ThemedVisualButtonProps) => ViewStyle;

type IGetButtonLabelStyles = (props: ThemedVisualButtonProps) => TextStyle;

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
/*
const getPressedContainedContainerStyles: IGetButtonContainerStyles = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.6)
    .toString(),
});
*/

// tslint:disable-next-line:max-line-length
const getPressedContainedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getHoveredContainedContainerStyles(props),
});

// tslint:disable-next-line:max-line-length
const getDisabledContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getDisabledContainedContainerStyles(props),
  // ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getEnabledContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getEnabledContainedContainerStyles(props),
  // ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getFocusedContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getFocusedContainedContainerStyles(props),
  // ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getHoveredContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getHoveredContainedContainerStyles(props),
  // ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getPressedContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getPressedContainedContainerStyles(props),
  // ...getContainerElevationStyles(props),
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
  props: ThemedVisualButtonProps,
) => ({
  ...getDisabledDefaultContainerStyles(props),
});

const getEnabledOutlinedContainerStyles: IGetButtonContainerStyles = (
  props: ThemedVisualButtonProps,
) => ({
  ...getEnabledDefaultContainerStyles(props),
});

const getFocusedOutlinedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getFocusedDefaultContainerStyles(props),
});

const getHoveredOutlinedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getHoveredDefaultContainerStyles(props),
});

const getPressedOutlinedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getPressedDefaultContainerStyles(props),
});

const getContainedLabelStyles: IGetButtonLabelStyles = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: true }),
});

const getContainedRaisedLabelStyles: IGetButtonLabelStyles = (
  props: ThemedVisualButtonProps,
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
  props: ThemedVisualButtonProps,
) => ({
  ...getDefaultLabelStyles(props),
});

type GetLabelButtonStylesFromTheme = (
  labelStyles: ButtonLabelStyles,
  props: ThemedVisualButtonProps,
) => TextStyle;

const getLabelButtonStylesFromTheme: GetLabelButtonStylesFromTheme = (
  labelStyles,
  props,
): TextStyle => ({
  ...labelStyles.styles,
  ...labelStyles.getDynamicStyles(props),
  ...labelStyles.getDynamicCustomStyles(props),
});

type GetLabelStyleProps = (props: ThemedVisualButtonProps) => TextStyle;

export const getLabelStyleProps: GetLabelStyleProps = (
  props: ThemedVisualButtonProps,
): TextStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: InteractivityState =
    props.interactivityState || InteractivityState.ENABLED;
  const variant: Variant = props.variant || Variant.DEFAULT;

  return {
    /* allVariants && allSizes && allStates */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button.allVariants.allSizes.allStates.label,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button.allVariants.allSizes[state].label,
      props,
    ),
    /* allVariants && size && allStates */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button.allVariants[size].allStates.label,
      props,
    ),
    /* allVariants && size && state */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button.allVariants[size][state].label,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button[variant].allSizes.allStates.label,
      props,
    ),
    /* variant && allSizes && state */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button[variant].allSizes[state].label,
      props,
    ),
    /* variant && size && allStates */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button[variant][size].allStates.label,
      props,
    ),
    /* variant && size && state */
    ...getLabelButtonStylesFromTheme(
      props.theme.components.button[variant][size][state].label,
      props,
    ),
  };
};

interface TextStyleObj {
  text: TextStyle;
}

type GetTextStyleObj = (
  props: ThemedVisualButtonProps,
) => { text: RegisteredStyle<TextStyle> };

export const getLabelStyle: GetTextStyleObj = props =>
  StyleSheet.create<TextStyleObj>({
    text: getLabelStyleProps(props),
  });

type GetContainerStylesFromTheme = (
  containerStyles: ButtonContainerStyles,
  props: ThemedVisualButtonProps,
) => ViewStyle;

const getContainerStylesFromTheme: GetContainerStylesFromTheme = (
  containerStyles,
  props,
): ViewStyle => ({
  ...containerStyles.styles,
  ...containerStyles.getDynamicStyles(props),
  ...containerStyles.getDynamicCustomStyles(props),
});

type GetContainerStyleProps = (props: ThemedVisualButtonProps) => ViewStyle;

export const getInnerContainerStyleProps: GetContainerStyleProps = (
  props: ThemedVisualButtonProps,
): ViewStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: InteractivityState =
    props.interactivityState || InteractivityState.ENABLED;
  const variant: Variant = props.variant || Variant.DEFAULT;

  return {
    /* allVariants && allSizes && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes.allStates
        .innerContainer,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes[state].innerContainer,
      props,
    ),
    /* allVariants && size && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants[size].allStates.innerContainer,
      props,
    ),
    /* allVariants && size && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants[size][state].innerContainer,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes.allStates.innerContainer,
      props,
    ),
    /* variant && allSizes && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes[state].innerContainer,
      props,
    ),
    /* variant && size && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant][size].allStates.innerContainer,
      props,
    ),
    /* variant && size && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant][size][state].innerContainer,
      props,
    ),
  };
};

interface ContainerStyle {
  container: ViewStyle;
}

type GetContainerStyle = (
  props: ThemedVisualButtonProps,
) => { container: RegisteredStyle<ViewStyle> };

export const getInnerContainerStyle: GetContainerStyle = props =>
  StyleSheet.create<ContainerStyle>({
    container: getInnerContainerStyleProps(props),
  });

export const getOuterContainerStyleProps: GetContainerStyleProps = (
  props: ThemedVisualButtonProps,
): ViewStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: InteractivityState =
    props.interactivityState || InteractivityState.ENABLED;
  const variant: Variant = props.variant || Variant.DEFAULT;

  return {
    /* allVariants && allSizes && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes.allStates
        .outerContainer,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes[state].outerContainer,
      props,
    ),
    /* allVariants && size && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants[size].allStates.outerContainer,
      props,
    ),
    /* allVariants && size && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button.allVariants[size][state].outerContainer,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes.allStates.outerContainer,
      props,
    ),
    /* variant && allSizes && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes[state].outerContainer,
      props,
    ),
    /* variant && size && allStates */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant][size].allStates.outerContainer,
      props,
    ),
    /* variant && size && state */
    ...getContainerStylesFromTheme(
      props.theme.components.button[variant][size][state].outerContainer,
      props,
    ),
  };
};

const DefaultInnerContainer: ButtonContainer = ({
  children,
  colorVariant,
  customStyle,
  fullWidth,
  interactivityState,
  leftIcon,
  rightIcon,
  size,
  theme,
  variant,
  /*
   * This is necessary to fix this issue with TouchableWithoutFeedback:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...buttonProps
}: /**/
ThemedVisualButtonProps) => (
  <View {...buttonProps} pointerEvents="box-only">
    {children}
  </View>
);

const DefaultButton: TouchableComponent = TouchableWithoutFeedback;

const DefaultText: TextComponent = (props: ButtonTextProps) => (
  <Text style={props.style}>{props.children}</Text>
);

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
  InnerContainer: DefaultInnerContainer,
  Text: DefaultText,
  Touchable: DefaultButton,
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
            ...Platform.select({
              web: {
                cursor: 'pointer',
                outline: 'none',
              },
            }),
          },
        },
        label: {
          styles: {
            fontFamily: getFontFamily(),
            fontWeight: getFontWeight(FontWeight.MEDIUM),
            position: 'relative',
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
      disabled: {
        innerContainer: {
          styles: {
            ...Platform.select({
              web: {
                cursor: 'not-allowed',
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
    InnerContainer: withRippleEffect(DefaultInnerContainer),
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
    InnerContainer: withRippleEffect(withRaiseEffect(DefaultInnerContainer)),
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

const mergedButtonTheme: ButtonVariantTheme = merge<
  {},
  ButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, emptyButtonVariantTheme, buttonTheme);

export const PurpleTealTheme: Theme = {
  components: {
    button: mergedButtonTheme,
    typography: typographyComponentsTheme,
  },
  palette: themePalette,
};
