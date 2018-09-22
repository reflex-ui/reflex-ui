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

type ViewPropsGetter<P> = (props: P) => ViewProps;

type ViewStyleGetter<P> = (props: P) => ViewStyle;

interface ViewStyleObj {
  view: ViewStyle;
}

type RegisteredViewStyleFactory = (
  style: ViewStyle,
) => { view: RegisteredStyle<ViewStyle> };

/*
type RegisteredViewStyleGetter<P> = (
  props: P,
) => { view: RegisteredStyle<ViewStyle> };
*/

type TextPropsGetter<P> = (props: P) => TextProps;

type TextStyleGetter<P> = (props: P) => TextStyle;

interface TextStyleObj {
  text: TextStyle;
}

type RegisteredTextStyleFactory = (
  style: TextStyle,
) => { text: RegisteredStyle<TextStyle> };

/*
type RegisteredTextStyleGetter<P> = (
  props: P,
) => { text: RegisteredStyle<TextStyle> };
*/
export type ButtonViewProps = SpecialButtonProps & ViewProps;

export type ButtonTextProps = SpecialButtonProps & TextProps;

export type Touchable<
  T extends TouchableWithoutFeedbackProps
> = React.ComponentType<T>;

/* BEGIN OPTIONAL BUTTON STUFF */

interface OptionalViewTheme<P> {
  readonly getProps?: ViewPropsGetter<P>;
  readonly props?: ViewProps;
}

interface OptionalTextTheme<P> {
  readonly getProps?: TextPropsGetter<P>;
  readonly props?: TextProps;
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
  readonly getProps: ViewPropsGetter<P>;
  readonly props: ViewProps;
}

export interface TextTheme<P> {
  readonly getProps: TextPropsGetter<P>;
  readonly props: TextProps;
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

const getButtonViewProps: ViewPropsGetter<SpecialButtonProps> = props => ({
  style: getButtonViewStyle(props),
});

const getOutlinedContainerCommonStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}): ViewStyle => ({
  borderColor: getThemedColor({ colorTheme, theme }),
});

const getOutlinedContainerCommonProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getOutlinedContainerCommonStyle(props),
});

const getDisabledContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedColor({ colorTheme, theme }),
});

const getDisabledContainedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDisabledContainedContainerStyle(props),
});

const getEnabledContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedColor({ colorTheme, theme }),
});

const getEnabledContainedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getEnabledContainedContainerProps(props),
});

const getFocusedContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .lighten(0.35)
    .toString(),
});

const getFocusedContainedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedContainedContainerStyle(props),
});

const getHoveredContainedContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .lighten(0.12)
    .toString(),
});

const getHoveredContainedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedContainerStyle(props),
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

const getPressedContainedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedContainerStyle(props),
});

const getDisabledContainedRaisedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDisabledContainedContainerStyle(props),
});

const getEnabledContainedRaisedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getEnabledContainedContainerStyle(props),
});

const getFocusedContainedRaisedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedContainedContainerStyle(props),
});

const getHoveredContainedRaisedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedContainerStyle(props),
});

const getPressedContainedRaisedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedContainerStyle(props),
});

const getDisabledDefaultContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getDisabledDefaultContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDisabledDefaultContainerStyle(props),
});

const getEnabledDefaultContainerStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getEnabledDefaultContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getEnabledDefaultContainerStyle(props),
});

const getFocusedDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.89)
    .toString(),
});

const getFocusedDefaultContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedDefaultContainerStyle(props),
});

const getHoveredDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.94)
    .toString(),
});

const getHoveredDefaultContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredDefaultContainerStyle(props),
});

const getPressedDefaultContainerStyle: ViewStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, theme }))
    .fade(0.81)
    .toString(),
});

const getPressedDefaultContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getPressedDefaultContainerStyle(props),
});

const getDisabledOutlinedContainerProps: ViewPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  style: getDisabledDefaultContainerStyle(props),
});

const getEnabledOutlinedContainerProps: ViewPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  style: getEnabledDefaultContainerStyle(props),
});

const getFocusedOutlinedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedDefaultContainerStyle(props),
});

const getHoveredOutlinedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredDefaultContainerStyle(props),
});

const getPressedOutlinedContainerProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getPressedDefaultContainerStyle(props),
});

const getContainedLabelStyle: TextStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  color: getThemedColor({ colorTheme, theme, onColor: true }),
});

const getContainedLabelProps: TextPropsGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  style: {
    color: getThemedColor({ colorTheme, theme, onColor: true }),
  },
});

const getContainedRaisedLabelProps: TextPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  style: getContainedLabelStyle(props),
});

const getDefaultLabelStyle: TextStyleGetter<SpecialButtonProps> = ({
  colorTheme,
  theme,
}) => ({
  color: getThemedColor({ colorTheme, theme, onColor: false }),
});

const getDefaultLabelProps: TextPropsGetter<SpecialButtonProps> = props => ({
  style: getDefaultLabelStyle(props),
});

const getOutlinedLabelProps: TextPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  style: getDefaultLabelStyle(props),
});

type TextPropsFromThemeGetter<TextThemeProps> = (
  textTheme: TextTheme<TextThemeProps>,
  props: TextThemeProps,
) => TextProps;

const getTextButtonPropsFromTheme: TextPropsFromThemeGetter<
  SpecialButtonProps
> = (textTheme, props): TextProps =>
  merge({}, textTheme.props, textTheme.getProps(props));

export const createRegisteredTextStyle: RegisteredTextStyleFactory = style =>
  StyleSheet.create<TextStyleObj>({
    text: style,
  });

export const getTextProps: TextPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): TextProps => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  let textProps: ViewProps = {};

  textProps = merge(
    textProps,
    /* allVariants && allSizes && allStates */
    getTextButtonPropsFromTheme(
      buttonTheme.allVariants.allSizes.allStates.text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* allVariants && allSizes && state */
    getTextButtonPropsFromTheme(
      buttonTheme.allVariants.allSizes[interactivityType].text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* allVariants && size && allStates */
    getTextButtonPropsFromTheme(
      buttonTheme.allVariants[props.size].allStates.text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* allVariants && size && state */
    getTextButtonPropsFromTheme(
      buttonTheme.allVariants[props.size][interactivityType].text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* variant && allSizes && allStates */
    getTextButtonPropsFromTheme(
      buttonTheme[props.variant].allSizes.allStates.text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* variant && allSizes && state */
    getTextButtonPropsFromTheme(
      buttonTheme[props.variant].allSizes[interactivityType].text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* variant && size && allStates */
    getTextButtonPropsFromTheme(
      buttonTheme[props.variant][props.size].allStates.text,
      props,
    ),
  );

  textProps = merge(
    textProps,
    /* variant && size && state */
    getTextButtonPropsFromTheme(
      buttonTheme[props.variant][props.size][interactivityType].text,
      props,
    ),
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).text;

  return textProps;
};
/*
export const getRegisteredTextStyle: RegisteredTextStyleGetter<
  SpecialButtonProps
> = props =>
  StyleSheet.create<TextStyleObj>({
    text: getTextStyle(props),
  });
*/
type ViewPropsFromThemeGetter<ViewThemeProps> = (
  viewTheme: ViewTheme<ViewThemeProps>,
  props: ViewThemeProps,
) => ViewProps;

const getViewPropsFromTheme: ViewPropsFromThemeGetter<SpecialButtonProps> = (
  viewTheme,
  props,
): ViewProps => merge({}, viewTheme.props, viewTheme.getProps(props));

export const createRegisteredViewStyle: RegisteredViewStyleFactory = style =>
  StyleSheet.create<ViewStyleObj>({
    view: style,
  });

export const getViewProps: ViewPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): ViewProps => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  let viewProps: ViewProps = {};

  viewProps = merge(
    viewProps,
    /* allVariants && allSizes && allStates */
    getViewPropsFromTheme(
      buttonTheme.allVariants.allSizes.allStates.view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* allVariants && allSizes && state */
    getViewPropsFromTheme(
      buttonTheme.allVariants.allSizes[interactivityType].view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* allVariants && size && allStates */
    getViewPropsFromTheme(
      buttonTheme.allVariants[props.size].allStates.view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* allVariants && size && state */
    getViewPropsFromTheme(
      buttonTheme.allVariants[props.size][interactivityType].view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* variant && allSizes && allStates */
    getViewPropsFromTheme(
      buttonTheme[props.variant].allSizes.allStates.view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* variant && allSizes && state */
    getViewPropsFromTheme(
      buttonTheme[props.variant].allSizes[interactivityType].view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* variant && size && allStates */
    getViewPropsFromTheme(
      buttonTheme[props.variant][props.size].allStates.view,
      props,
    ),
  );

  viewProps = merge(
    viewProps,
    /* variant && size && state */
    getViewPropsFromTheme(
      buttonTheme[props.variant][props.size][interactivityType].view,
      props,
    ),
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).view;

  return viewProps;
};

/*
export const getRegisteredViewStyle: RegisteredViewStyleGetter<
  SpecialButtonProps
> = props =>
  StyleSheet.create<ViewStyleObj>({
    view: getViewStyle(props),
  });
*/
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
}) => <View {...otherProps}>{children}</View>;

const DefaultButton: Touchable<
  TouchableWithoutFeedbackProps
> = TouchableWithoutFeedback;

const DefaultText: React.ComponentType<ButtonTextProps> = props => (
  <Text style={props.style}>{props.children}</Text>
);

const emptyButtonSubComponentsTheme: ButtonSubComponentsTheme = {
  text: {
    getProps: () => ({}),
    props: {},
  },
  view: {
    getProps: () => ({}),
    props: {},
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
          props: {
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
        },
        view: {
          getProps: getButtonViewProps,
          props: {
            pointerEvents: 'box-only',
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
      },
      disabled: {
        view: {
          props: {
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
    },
    large: {
      allStates: {
        text: {
          props: {
            style: {
              fontSize: 15,
              letterSpacing: 1,
            },
          },
        },
        view: {
          props: {
            style: {
              borderRadius: 2,
            },
          },
        },
      },
    },
    regular: {
      allStates: {
        text: {
          props: {
            style: {
              fontSize: 14,
              letterSpacing: 0.75,
            },
          },
        },
        view: {
          props: {
            style: {
              borderRadius: 2,
            },
          },
        },
      },
    },
    small: {
      allStates: {
        text: {
          props: {
            style: {
              fontSize: 13,
              letterSpacing: 0.5,
            },
          },
        },
        view: {
          props: {
            style: {
              borderRadius: 2,
            },
          },
        },
      },
    },
    xlarge: {
      allStates: {
        text: {
          props: {
            style: {
              fontSize: 16,
              letterSpacing: 1.25,
            },
          },
        },
        view: {
          props: {
            style: {
              borderRadius: 4,
            },
          },
        },
      },
    },
    xsmall: {
      allStates: {
        text: {
          props: {
            style: {
              fontSize: 12,
              letterSpacing: 0.25,
            },
          },
        },
        view: {
          props: {
            style: {
              borderRadius: 2,
            },
          },
        },
      },
    },
  },
  contained: {
    allSizes: {
      allStates: {
        text: {
          getProps: getContainedLabelProps,
        },
      },
      disabled: {
        view: {
          getProps: getDisabledContainedContainerProps,
        },
      },
      enabled: {
        view: {
          getProps: getEnabledContainedContainerProps,
        },
      },
      focused: {
        view: {
          getProps: getFocusedContainedContainerProps,
        },
      },
      hovered: {
        view: {
          getProps: getHoveredContainedContainerProps,
        },
      },
      pressed: {
        view: {
          getProps: getPressedContainedContainerProps,
        },
      },
    },
    large: {
      allStates: {
        view: {
          props: {
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
    },
    regular: {
      allStates: {
        view: {
          props: {
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
    },
    small: {
      allStates: {
        view: {
          props: {
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
    },
    subComponents: {
      View: withRippleEffect(DefaultInnerContainer),
    },
    xlarge: {
      allStates: {
        view: {
          props: {
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
    },
    xsmall: {
      allStates: {
        view: {
          props: {
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
  },
  containedRaised: {
    allSizes: {
      allStates: {
        text: {
          getProps: getContainedRaisedLabelProps,
        },
      },
      disabled: {
        view: {
          getProps: getDisabledContainedRaisedContainerProps,
        },
      },
      enabled: {
        view: {
          getProps: getEnabledContainedRaisedContainerProps,
        },
      },
      focused: {
        view: {
          getProps: getFocusedContainedRaisedContainerProps,
        },
      },
      hovered: {
        view: {
          getProps: getHoveredContainedRaisedContainerProps,
        },
      },
      pressed: {
        view: {
          getProps: getPressedContainedRaisedContainerProps,
        },
      },
    },
    large: {
      allStates: {
        view: {
          props: {
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
    },
    regular: {
      allStates: {
        view: {
          props: {
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
    },
    small: {
      allStates: {
        view: {
          props: {
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
    },
    subComponents: {
      View: withRippleEffect(withRaiseEffect(DefaultInnerContainer)),
    },
    xlarge: {
      allStates: {
        view: {
          props: {
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
    },
    xsmall: {
      allStates: {
        view: {
          props: {
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
  },
  default: {
    allSizes: {
      allStates: {
        text: {
          getProps: getDefaultLabelProps,
        },
      },
      disabled: {
        view: {
          getProps: getDisabledDefaultContainerProps,
        },
      },
      enabled: {
        view: {
          getProps: getEnabledDefaultContainerProps,
        },
      },
      focused: {
        view: {
          getProps: getFocusedDefaultContainerProps,
        },
      },
      hovered: {
        view: {
          getProps: getHoveredDefaultContainerProps,
        },
      },
      pressed: {
        view: {
          getProps: getPressedDefaultContainerProps,
        },
      },
    },
    large: {
      allStates: {
        view: {
          props: {
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
    },
    regular: {
      allStates: {
        view: {
          props: {
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
    },
    small: {
      allStates: {
        view: {
          props: {
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
    },
    xlarge: {
      allStates: {
        view: {
          props: {
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
    },
    xsmall: {
      allStates: {
        view: {
          props: {
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
  },
  outlined: {
    allSizes: {
      allStates: {
        text: {
          getProps: getOutlinedLabelProps,
        },
        view: {
          getProps: getOutlinedContainerCommonProps,
        },
      },
      disabled: {
        view: {
          getProps: getDisabledOutlinedContainerProps,
        },
      },
      enabled: {
        view: {
          getProps: getEnabledOutlinedContainerProps,
        },
      },
      focused: {
        view: {
          getProps: getFocusedOutlinedContainerProps,
        },
      },
      hovered: {
        view: {
          getProps: getHoveredOutlinedContainerProps,
        },
      },
      pressed: {
        view: {
          getProps: getPressedOutlinedContainerProps,
        },
      },
    },
    large: {
      allStates: {
        view: {
          props: {
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
    },
    regular: {
      allStates: {
        view: {
          props: {
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
    },
    small: {
      allStates: {
        view: {
          props: {
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
    },
    xlarge: {
      allStates: {
        view: {
          props: {
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
    },
    xsmall: {
      allStates: {
        view: {
          props: {
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
