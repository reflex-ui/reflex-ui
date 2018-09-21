import * as Color from 'color';
import merge from 'lodash/merge';
import * as React from 'react';
import {
  Platform,
  RegisteredStyle,
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

import { SpecialButtonProps } from '../../components/buttons/SimpleButton';
import { InteractivityType } from '../../interactivity/InteractivityType';
import { FontWeight } from '../FontWeight';
import { getFontWeight } from '../getFontWeight';
import { getThemedColor } from './getThemedColor';
import { withRaiseEffect } from './withRaiseEffect';
import { withRippleEffect } from './withRippleEffect';

interface PaletteColorVariant {
  readonly color: string;
  readonly onColor: string;
}

// interface PaletteColorVariant {
interface PaletteColor {
  readonly dark: PaletteColorVariant;
  readonly light: PaletteColorVariant;
  readonly normal: PaletteColorVariant;
}

interface PaletteTheme {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColor;
  readonly secondary: PaletteColor;
  readonly surface: PaletteColor;
}
/*
interface PaletteTheme {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColorVariant;
  readonly secondary: PaletteColorVariant;
  readonly surface: PaletteColor;
}
*/
interface TypographyComponents {
  readonly caption: TextStyle;
  readonly headline1: TextStyle;
  readonly headline2: TextStyle;
  readonly headline3: TextStyle;
  readonly headline4: TextStyle;
  readonly headline5: TextStyle;
  readonly headline6: TextStyle;
  readonly overline: TextStyle;
  readonly paragraph1: TextStyle;
  readonly paragraph2: TextStyle;
  readonly subtitle1: TextStyle;
  readonly subtitle2: TextStyle;
}

type ViewStyleGetter<P> = (props: P) => ViewStyle;

type RegisteredViewStyleGetter<P> = (
  props: P,
) => { view: RegisteredStyle<ViewStyle> };

interface ViewStyleObj {
  view: ViewStyle;
}

type TextStyleGetter<P> = (props: P) => TextStyle;

interface TextStyleObj {
  text: TextStyle;
}

type RegisteredTextStyleGetter<P> = (
  props: P,
) => { text: RegisteredStyle<TextStyle> };

export type ButtonViewProps = SpecialButtonProps & ViewProps;

export type ButtonTextProps = SpecialButtonProps & TextProps;

export type Touchable<
  T extends TouchableWithoutFeedbackProps
> = React.ComponentType<T>;

/* BEGIN OPTIONAL BUTTON STUFF */

interface OptionalViewTheme<P> {
  readonly getDynamicCustomStyle?: ViewStyleGetter<P>;
  readonly getDynamicStyle?: ViewStyleGetter<P>;
  readonly style?: ViewStyle;
}

interface OptionalTextTheme<P> {
  readonly getDynamicCustomStyle?: TextStyleGetter<P>;
  readonly getDynamicStyle?: TextStyleGetter<P>;
  readonly style?: TextStyle;
}

interface OptionalButtonSubComponentsTheme {
  readonly view?: OptionalViewTheme<SpecialButtonProps>;
  readonly text?: OptionalTextTheme<SpecialButtonProps>;
}

interface OptionalInteractivityStateTheme<T> {
  readonly allStates?: T;
  readonly disabled?: T;
  readonly enabled?: T;
  readonly focused?: T;
  readonly hovered?: T;
  readonly pressed?: T;
}

interface OptionalButtonSubComponents {
  readonly Text?: React.ComponentType<ButtonTextProps>;
  readonly Touchable?: Touchable<TouchableWithoutFeedbackProps>;
  readonly View?: React.ComponentType<ButtonViewProps>;
}

interface OptionalButtonVariantTheme {
  readonly allSizes?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly large?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly regular?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly small?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly subComponents?: OptionalButtonSubComponents;
  readonly xlarge?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly xsmall?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
}

interface OptionalButtonTheme {
  readonly allVariants?: OptionalButtonVariantTheme;
  readonly contained?: OptionalButtonVariantTheme;
  readonly containedRaised?: OptionalButtonVariantTheme;
  readonly default?: OptionalButtonVariantTheme;
  readonly outlined?: OptionalButtonVariantTheme;
}

/* END OPTIONAL BUTTON STUFF */

export interface ViewTheme<P> {
  readonly getDynamicCustomStyle: ViewStyleGetter<P>;
  readonly getDynamicStyle: ViewStyleGetter<P>;
  readonly style: ViewStyle;
}

export interface TextTheme<P> {
  readonly getDynamicCustomStyle: TextStyleGetter<P>;
  readonly getDynamicStyle: TextStyleGetter<P>;
  readonly style: TextStyle;
}

interface InteractivityStateTheme<T> {
  readonly allStates: T;
  readonly disabled: T;
  readonly enabled: T;
  readonly focused: T;
  readonly hovered: T;
  readonly pressed: T;
}

interface ButtonSubComponentsTheme {
  readonly text: TextTheme<SpecialButtonProps>;
  readonly view: ViewTheme<SpecialButtonProps>;
}

interface ButtonSubComponents {
  readonly Text: React.ComponentType<ButtonTextProps>;
  readonly Touchable: Touchable<TouchableWithoutFeedbackProps>;
  readonly View: React.ComponentType<ButtonViewProps>;
}

interface ButtonVariantTheme {
  readonly allSizes: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly large: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly regular: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly small: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly subComponents: ButtonSubComponents;
  readonly xlarge: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly xsmall: InteractivityStateTheme<ButtonSubComponentsTheme>;
}

interface ButtonTheme {
  readonly allVariants: ButtonVariantTheme;
  readonly contained: ButtonVariantTheme;
  readonly containedRaised: ButtonVariantTheme;
  readonly default: ButtonVariantTheme;
  readonly outlined: ButtonVariantTheme;
}

interface ComponentsTheme {
  readonly button: ButtonTheme;
  readonly typography: TypographyComponents;
}

export interface Theme {
  readonly components: ComponentsTheme;
  readonly palette: PaletteTheme;
}

/*
interface IThemeCollection {
  readonly [name: string]: Theme;
}
*/

type FontFamilyGetter = () => string;

const getFontFamily: FontFamilyGetter = (): string => 'System';

const getButtonViewStyle: ViewStyleGetter<SpecialButtonProps> = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
});

const getOutlinedContainerCommonStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}): ViewStyle => ({
  borderColor: getThemedColor({ colorTheme, theme }),
});

const getDisabledContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedColor({ colorTheme, theme }),
});

// tslint:disable-next-line:max-line-length
const getEnabledContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedColor({ colorTheme, theme }),
});

// tslint:disable-next-line:max-line-length
const getFocusedContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .lighten(0.35)
    .toString(),
});

// tslint:disable-next-line:max-line-length
const getHoveredContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .lighten(0.12)
    .toString(),
});
/*
const getPressedContainedContainerStyle: ViewStyleGetter = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .lighten(0.6)
    .toString(),
});
*/

const getPressedContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getHoveredContainedContainerStyle(props),
});

const getDisabledContainedRaisedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getDisabledContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getEnabledContainedRaisedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getEnabledContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getFocusedContainedRaisedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getFocusedContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getHoveredContainedRaisedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getHoveredContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getPressedContainedRaisedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getPressedContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getDisabledDefaultContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getEnabledDefaultContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getFocusedDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.89)
    .toString(),
});

const getHoveredDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.94)
    .toString(),
});

const getPressedDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.81)
    .toString(),
});

const getDisabledOutlinedContainerStyle: ViewStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  ...getDisabledDefaultContainerStyle(props),
});

const getEnabledOutlinedContainerStyle: ViewStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  ...getEnabledDefaultContainerStyle(props),
});

const getFocusedOutlinedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getFocusedDefaultContainerStyle(props),
});

const getHoveredOutlinedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getHoveredDefaultContainerStyle(props),
});

const getPressedOutlinedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = props => ({
  ...getPressedDefaultContainerStyle(props),
});

const getContainedLabelStyle: TextStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  color: getThemedColor({ colorTheme, theme, onColor: true }),
});

const getContainedRaisedLabelStyle: TextStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  ...getContainedLabelStyle(props),
});

const getDefaultLabelStyle: TextStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  color: getThemedColor({ colorTheme, theme, onColor: false }),
});

const getOutlinedLabelStyle: TextStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  ...getDefaultLabelStyle(props),
});

type TextStyleFromThemeGetter<TextThemeProps> = (
  textTheme: TextTheme<TextThemeProps>,
  props: TextThemeProps,
) => TextStyle;

const getTextButtonStyleFromTheme: TextStyleFromThemeGetter<
  SpecialButtonProps
> = (textTheme, props): TextStyle => ({
  ...textTheme.style,
  ...textTheme.getDynamicStyle(props),
  ...textTheme.getDynamicCustomStyle(props),
});

export const getTextStyle: TextStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): TextStyle => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  return {
    /* allVariants && allSizes && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants.allSizes.allStates.text,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants.allSizes[interactivityType].text,
      props,
    ),
    /* allVariants && size && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants[props.size].allStates.text,
      props,
    ),
    /* allVariants && size && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants[props.size][interactivityType].text,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant].allSizes.allStates.text,
      props,
    ),
    /* variant && allSizes && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant].allSizes[interactivityType].text,
      props,
    ),
    /* variant && size && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant][props.size].allStates.text,
      props,
    ),
    /* variant && size && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant][props.size][interactivityType].text,
      props,
    ),
  };
};

export const getRegisteredTextStyle: RegisteredTextStyleGetter<
  SpecialButtonProps
> = props =>
  StyleSheet.create<TextStyleObj>({
    text: getTextStyle(props),
  });

type ViewStyleFromThemeGetter<ViewThemeProps> = (
  viewTheme: ViewTheme<ViewThemeProps>,
  props: ViewThemeProps,
) => ViewStyle;

const getViewStyleFromTheme: ViewStyleFromThemeGetter<SpecialButtonProps> = (
  viewTheme,
  props,
): ViewStyle => ({
  ...viewTheme.style,
  ...viewTheme.getDynamicStyle(props),
  ...viewTheme.getDynamicCustomStyle(props),
});

export const getViewStyle: ViewStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): ViewStyle => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  return {
    /* allVariants && allSizes && allStates */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants.allSizes.allStates.view,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants.allSizes[interactivityType].view,
      props,
    ),
    /* allVariants && size && allStates */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants[props.size].allStates.view,
      props,
    ),
    /* allVariants && size && state */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants[props.size][interactivityType].view,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant].allSizes.allStates.view,
      props,
    ),
    /* variant && allSizes && state */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant].allSizes[interactivityType].view,
      props,
    ),
    /* variant && size && allStates */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant][props.size].allStates.view,
      props,
    ),
    /* variant && size && state */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant][props.size][interactivityType].view,
      props,
    ),
  };
};

export const getRegisteredViewStyle: RegisteredViewStyleGetter<
  SpecialButtonProps
> = props =>
  StyleSheet.create<ViewStyleObj>({
    view: getViewStyle(props),
  });

const DefaultInnerContainer: React.ComponentType<ButtonViewProps> = ({
  children,
  colorTheme,
  fullWidth,
  interactivityState,
  leftIcon,
  rightIcon,
  size,
  theme,
  variant,
  /*
   * This is used to pass framework's own stuff as well as to
   * deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...otherProps
  /**/
}) => (
  <View {...otherProps} pointerEvents="box-only">
    {children}
  </View>
);

const DefaultButton: Touchable<
  TouchableWithoutFeedbackProps
> = TouchableWithoutFeedback;

const DefaultText: React.ComponentType<ButtonTextProps> = props => (
  <Text style={props.style}>{props.children}</Text>
);

const emptyButtonSubComponentsTheme: ButtonSubComponentsTheme = {
  text: {
    getDynamicCustomStyle: () => ({}),
    getDynamicStyle: () => ({}),
    style: {},
  },
  view: {
    getDynamicCustomStyle: () => ({}),
    getDynamicStyle: () => ({}),
    style: {},
  },
};

const emptyButtonInteractivityStateTheme: InteractivityStateTheme<
  ButtonSubComponentsTheme
> = {
  allStates: emptyButtonSubComponentsTheme,
  disabled: emptyButtonSubComponentsTheme,
  enabled: emptyButtonSubComponentsTheme,
  focused: emptyButtonSubComponentsTheme,
  hovered: emptyButtonSubComponentsTheme,
  pressed: emptyButtonSubComponentsTheme,
};

const emptyButtonSubComponents: ButtonSubComponents = {
  Text: DefaultText,
  Touchable: DefaultButton,
  View: DefaultInnerContainer,
};

const emptyButtonVariantTheme: ButtonVariantTheme = {
  allSizes: emptyButtonInteractivityStateTheme,
  large: emptyButtonInteractivityStateTheme,
  regular: emptyButtonInteractivityStateTheme,
  small: emptyButtonInteractivityStateTheme,
  subComponents: emptyButtonSubComponents,
  xlarge: emptyButtonInteractivityStateTheme,
  xsmall: emptyButtonInteractivityStateTheme,
};

const emptyButtonTheme: ButtonTheme = {
  allVariants: emptyButtonVariantTheme,
  contained: emptyButtonVariantTheme,
  containedRaised: emptyButtonVariantTheme,
  default: emptyButtonVariantTheme,
  outlined: emptyButtonVariantTheme,
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

const themePalette: PaletteTheme = {
  background: {
    dark: {
      color: '#ffffff',
      onColor: '#000000',
    },
    light: {
      color: '#ffffff',
      onColor: '#000000',
    },
    normal: {
      color: '#ffffff',
      onColor: '#000000',
    },
  },
  error: {
    dark: {
      color: '#b00020',
      onColor: '#ffffff',
    },
    light: {
      color: '#b00020',
      onColor: '#ffffff',
    },
    normal: {
      color: '#b00020',
      onColor: '#ffffff',
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
    dark: {
      color: '#ffffff',
      onColor: '#000000',
    },
    light: {
      color: '#ffffff',
      onColor: '#000000',
    },
    normal: {
      color: '#ffffff',
      onColor: '#000000',
    },
  },
};

const buttonTheme: OptionalButtonTheme = {
  allVariants: {
    allSizes: {
      allStates: {
        text: {
          style: {
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
        view: {
          getDynamicStyle: getButtonViewStyle,
          style: {
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
      },
      disabled: {
        view: {
          style: {
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
        text: {
          style: {
            fontSize: 15,
            letterSpacing: 1,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    regular: {
      allStates: {
        text: {
          style: {
            fontSize: 14,
            letterSpacing: 0.75,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    small: {
      allStates: {
        text: {
          style: {
            fontSize: 13,
            letterSpacing: 0.5,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        text: {
          style: {
            fontSize: 16,
            letterSpacing: 1.25,
          },
        },
        view: {
          style: {
            borderRadius: 4,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        text: {
          style: {
            fontSize: 12,
            letterSpacing: 0.25,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
  contained: {
    allSizes: {
      allStates: {
        text: {
          getDynamicStyle: getContainedLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledContainedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledContainedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedContainedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredContainedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedContainedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    subComponents: {
      View: withRippleEffect(DefaultInnerContainer),
    },
    xlarge: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        text: {
          getDynamicStyle: getContainedRaisedLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledContainedRaisedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledContainedRaisedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedContainedRaisedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredContainedRaisedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedContainedRaisedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    subComponents: {
      View: withRippleEffect(withRaiseEffect(DefaultInnerContainer)),
    },
    xlarge: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        text: {
          getDynamicStyle: getDefaultLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledDefaultContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledDefaultContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedDefaultContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredDefaultContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedDefaultContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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
        text: {
          getDynamicStyle: getOutlinedLabelStyle,
        },
        view: {
          getDynamicStyle: getOutlinedContainerCommonStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledOutlinedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledOutlinedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedOutlinedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredOutlinedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedOutlinedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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
        view: {
          style: {
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

const mergedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, emptyButtonTheme, buttonTheme);

export const PurpleTealTheme: Theme = {
  components: {
    button: mergedButtonTheme,
    typography: typographyComponentsTheme,
  },
  palette: themePalette,
};
