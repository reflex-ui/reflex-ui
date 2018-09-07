import * as Color from 'color';
import delay from 'delay';
import merge from 'lodash/merge';
import * as React from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import { Keyframes } from 'react-spring';
// @ts-ignore
import { Easing, TimingAnimation } from 'react-spring/dist/addons';

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

export type ButtonContainer = React.ComponentType<ThemedVisualButtonProps>;

export type ButtonComponent = React.ComponentType<
  TouchableWithoutFeedbackProps
>;

export type TextComponent = React.ComponentType<ThemedVisualButtonProps>;

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
  readonly Button?: ButtonComponent;
  readonly InnerContainer?: ButtonContainer;
  readonly large?: OptionalButtonStateTheme;
  readonly regular?: OptionalButtonStateTheme;
  readonly small?: OptionalButtonStateTheme;
  readonly Text?: TextComponent;
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
  readonly Button: ButtonComponent;
  readonly InnerContainer: ButtonContainer;
  readonly large: ButtonStateTheme;
  readonly regular: ButtonStateTheme;
  readonly small: ButtonStateTheme;
  readonly Text: TextComponent;
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

// tslint:disable-next-line:max-line-length
const getDisabledContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getDisabledContainedContainerStyles(props),
  ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getEnabledContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getEnabledContainedContainerStyles(props),
  ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getFocusedContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getFocusedContainedContainerStyles(props),
  ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getHoveredContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getHoveredContainedContainerStyles(props),
  ...getContainerElevationStyles(props),
});

// tslint:disable-next-line:max-line-length
const getPressedContainedRaisedContainerStyles: IGetButtonContainerStyles = props => ({
  ...getPressedContainedContainerStyles(props),
  ...getContainerElevationStyles(props),
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

/*
const DefaultChildrenContainer: StyledContainerFactory = () => ({
  children,
}) => {
  // tslint:disable-next-line:no-console
  console.log('PurpleTealTheme.DefaultChildrenContainerX()');
  return <React.Fragment>{children}</React.Fragment>;
};

const RippleContainerFactory: StyledContainerFactory = (
  buttonProps: ThemedVisualButtonProps,
) =>
  class RippleContainer extends React.Component {
    public static getDerivedStateFromProps(props, state: RippleContainerState) {
      if (state.isAnimating) return state;

      const newState: RippleContainerState = {
        ...state,

      };

      return newState;
    }

    public readonly state: RippleContainerState = {
      isAnimating: false,
    };

    public render() {
      const to =
        buttonProps.interactivityState === InteractivityState.PRESSED
          ? { scale: 1 }
          : { scale: 0.001 };

      return (
        <Spring from={{ scale: 0.01 }} to={to}>
          {styles => {
            const transformStyles = {
              transform: [{ scale: (styles as { scale: number }).scale }],
            };

            return (
              <React.Fragment>
                <View style={getDefaultRippleStyles().container}>
                  <View
                    style={[getDefaultRippleStyles().ripple, transformStyles]}
                  />
                </View>
                {this.props.children}
              </React.Fragment>
            );
          }}
        </Spring>
      );
    }
  };
*/

/*
const RippleContainerFactory: StyledContainerFactory = (
  props: ThemedVisualButtonProps,
) =>
  class RippleContainer extends React.Component {
    public readonly state: RippleContainerState = {
      isAnimating: false,
    };

    public render() {
      if (props.interactivityState === InteractivityState.PRESSED) {
        return (
          <Spring
            from={{ scale: 0.01 }}
            to={{ scale: 1 }}
            render={this.renderContainer}
          />
        );
      }

      return this.props.children;
    }

    private renderContainer = ({
      children,
      ...styles
    }: {
      children?: React.ReactNode;
      scale: number;
    }): JSX.Element => {
      // tslint:disable-next-line:no-console
      console.log('RippleContainer.renderContainer() - styles: ', styles);

      const transformStyles = {
        transform: [{ scale: (styles as { scale: number }).scale }],
      };

      return (
        <React.Fragment>
          <View style={getDefaultRippleStyles().container}>
            <View style={[getDefaultRippleStyles().ripple, transformStyles]} />
          </View>
          {this.props.children}
        </React.Fragment>
      );
    };
  };
*/
/*
const RippleContainerFactory: StyledContainerFactory = (
  props: ThemedVisualButtonProps,
) => ({ children }) => {
  const to =
    props.interactivityState === InteractivityState.PRESSED
      ? { scale: 1 }
      : { scale: 0.001 };
  return (
    <Spring from={{ scale: 0.001 }} to={to}>
      {styles => {
        // tslint:disable-next-line:no-console
        console.log(
          'RippleContainerFactory - styles.scale: ',
          (styles as { scale: number }).scale,
        );

        const transformStyles = {
          transform: [{ scale: (styles as { scale: number }).scale }],
        };

        // const transformStyles = {
        //  opacity: (styles as { scale: number }).scale,
        // };

        return (
          <React.Fragment>
            <View style={getDefaultRippleStyles().container}>
              <View
                style={[getDefaultRippleStyles().ripple, transformStyles]}
              />
            </View>
            {children}
          </React.Fragment>
        );
      }}
    </Spring>
  );
};
*/

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

interface TextStyleSheet {
  text: TextStyle;
}

type GetTextStyleSheet = (props: ThemedVisualButtonProps) => TextStyleSheet;

export const getLabelStyle: GetTextStyleSheet = props =>
  StyleSheet.create<TextStyleSheet>({
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

type GetContainerStyle = (props: ThemedVisualButtonProps) => ContainerStyle;

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
ThemedVisualButtonProps) => {
  // tslint:disable-next-line:no-console
  // console.log('DefaultInnerContainer() - props: ', props);
  const style = getInnerContainerStyle({
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
  });
  return (
    <View {...buttonProps} style={style.container}>
      {children}
    </View>
  );
};

const DefaultButton: ButtonComponent = TouchableWithoutFeedback;

/*
const DefaultButton: ButtonComponent = (
  props: TouchableWithoutFeedbackProps & { children?: React.ReactNode },
) => <TouchableWithoutFeedback>{props.children}</TouchableWithoutFeedback>;
*/

/*
const DefaultButton: ButtonComponent = (
  props: TouchableWithoutFeedbackProps,
) => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButton() - props: ', props);
  return <TouchableWithoutFeedback {...props} />;
};
*/

const DefaultText: TextComponent = (props: ThemedVisualButtonProps) => {
  const style = getLabelStyle(props);
  return <Text style={style.text}>{props.children}</Text>;
};

interface RippleStyles {
  container: ViewStyle;
  ripple: ViewStyle;
}

interface RipplePosition {
  left?: number;
  top?: number;
}

interface RippleContainerState {
  readonly diameter: number;
  readonly isHiding: boolean;
  readonly isShowing: boolean;
  readonly isShowingComplete: boolean;
  readonly ripplePosition: RipplePosition;
}

export type WithRippleEffect = <P extends ThemedVisualButtonProps>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

const withRippleEffect: WithRippleEffect = <P extends ThemedVisualButtonProps>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class RippledComponent extends React.Component<P> {
    public static getDerivedStateFromProps(
      props: P,
      state: RippleContainerState,
    ) {
      let newState = { ...state };

      if (props.interactivityState === InteractivityState.PRESSED) {
        newState = {
          ...newState,
          ripplePosition: RippledComponent.getRipplePosition(props, state),
        };
      }

      if (
        state.isShowing ||
        (props.interactivityState === InteractivityState.PRESSED &&
          !state.isShowingComplete)
      ) {
        return {
          ...newState,
          isShowing: true,
        };
      }

      if (
        props.interactivityState !== InteractivityState.PRESSED &&
        state.isShowingComplete
      ) {
        return {
          ...newState,
          isShowing: false,
          isShowingComplete: false,
        };
      }

      return newState;
    }

    public static getRipplePosition(
      props: P,
      state: RippleContainerState,
    ): RipplePosition {
      const ripplePosition: { left?: number; top?: number } = {};

      // tslint:disable-next-line:no-console
      console.log(
        'RippledComponent.render() - this.props.interactivityEvent: ',
        props.interactivityEvent,
      );

      if (props.interactivityState === InteractivityState.PRESSED) {
        let px = 0;
        let py = 0;

        if (props.interactivityEvent) {
          px = (props.interactivityEvent as GestureResponderEvent).nativeEvent
            .locationX;
          py = (props.interactivityEvent as GestureResponderEvent).nativeEvent
            .locationY;
        }

        const { diameter } = state;
        ripplePosition.left = px - diameter / 2;
        ripplePosition.top = py - diameter / 2;
      }

      return ripplePosition;
    }

    public maxDiameter: number = 200;
    public rippleAnimation: {};
    public rippleStyles: RippleStyles;

    public readonly state: RippleContainerState = {
      diameter: this.maxDiameter,
      isHiding: false,
      isShowing: false,
      isShowingComplete: false,
      ripplePosition: {},
    };

    public constructor(props: P) {
      super(props);

      this.rippleStyles = this.getDefaultRippleStyles();

      this.rippleAnimation = Keyframes.Spring({
        // @ts-ignore
        pressin: async call => {
          // tslint:disable-next-line:no-console
          console.log('RippledComponent.Keyframes.Spring.pressin()');
          call({
            config: { tension: 200, friction: 20 },
            // config: { duration: 2000, easing: Easing.linear },
            // from: { opacity: 0, scale: 0.001 },
            from: {
              // config: { duration: 2000, easing: Easing.linear },
              opacity: 0,
              scale: 0.001,
            },
            to: { opacity: 1, scale: 1 },
          });
          // await call({ from: { opacity: 1 }, to: { opacity: 0 } });
          await delay(300);
          if (this.state.isShowing) this.motionComplete();
        },
        // @ts-ignore
        pressout: async call => {
          // tslint:disable-next-line:no-console
          console.log('RippledComponent.Keyframes.Spring.pressout()');
          await call({ to: { opacity: 0 } });
          await call({ to: { scale: 0 } });
          // if (this.state.isHiding) this.hidingComplete();
        },
      });
    }

    public onLayoutChanged = (event: LayoutChangeEvent) => {
      // tslint:disable-next-line:no-console
      console.log('RippledComponent.onLayoutChanged() - event: ', event);

      const { height, width } = event.nativeEvent.layout;
      const diameter = Math.ceil(Math.sqrt(width * width + height * height));

      this.setState(
        {
          diameter: Math.min(diameter, this.maxDiameter),
        },
        this.setRippleStyles,
      );
    };

    public render() {
      const state =
        this.state.isShowing ||
        this.props.interactivityState === InteractivityState.PRESSED
          ? 'pressin'
          : 'pressout';

      // tslint:disable-next-line:no-console
      console.log(
        `RippledComponent.render() - isShowing: ${
          this.state.isShowing
        } | state: ${state}`,
      );

      const { children, ...otherProps } = this.props as ThemedVisualButtonProps;
      const RippleAnimation = this.rippleAnimation;

      /*
      const ripplePosition: { left?: number; top?: number } = {};

      // tslint:disable-next-line:no-console
      console.log(
        'RippledComponent.render() - this.props.interactivityEvent: ',
        this.props.interactivityEvent,
      );

      if (this.props.interactivityState === InteractivityState.PRESSED) {
        let px = 0;
        let py = 0;

        if (this.props.interactivityEvent) {
          px = (this.props.interactivityEvent as GestureResponderEvent)
            .nativeEvent.locationX;
          py = (this.props.interactivityEvent as GestureResponderEvent)
            .nativeEvent.locationY;
        }

        const { diameter } = this.state;
        ripplePosition.left = px - diameter / 2;
        ripplePosition.top = py - diameter / 2;
      }
      */

      // tslint:disable-next-line:no-console
      console.log(
        'RippledComponent.render() - ripplePosition: ',
        this.state.ripplePosition,
      );

      return (
        // @ts-ignore
        // impl={TimingAnimation}
        // config={{ duration: 1000, easing: Easing.linear }}
        /*
        <RippleAnimation
          impl={TimingAnimation}
          config={{ duration: 2000, easing: Easing.linear }}
          state={state}
        >
        */
        // @ts-ignore
        <RippleAnimation state={state}>
          {(styles: { opacity: number; scale: number }) => {
            // tslint:disable-next-line:no-console
            /*
            console.log(
              'RippledComponent.RippleAnimation() - styles: ',
              styles,
            );
            */

            const motionStyles = {
              opacity: styles.opacity,
              transform: [{ scale: styles.scale }],
            };

            return (
              <WrappedComponent {...otherProps}>
                <React.Fragment>
                  <View
                    onLayout={this.onLayoutChanged}
                    style={this.rippleStyles.container}
                  >
                    <View
                      style={[
                        this.rippleStyles.ripple,
                        { ...this.state.ripplePosition, ...motionStyles },
                      ]}
                    />
                  </View>
                </React.Fragment>
                {children}
              </WrappedComponent>
            );
          }}
        </RippleAnimation>
      );
    }

    private getDefaultRippleStyles = () => {
      const { colorVariant, theme } = this.props;
      const { diameter } = this.state;

      return StyleSheet.create<RippleStyles>({
        container: {
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
        },
        ripple: {
          // backgroundColor: 'red',
          backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
            .lighten(0.6)
            .toString(),
          borderRadius: diameter / 2,
          height: diameter,
          left: 0,
          // opacity: 0.01,
          position: 'absolute',
          top: 0,
          // transform: [{ scale: 2 }],
          width: diameter,
        },
      });
    };

    private motionComplete() {
      // tslint:disable-next-line:no-console
      console.log('RippledComponent.motionComplete()');
      const isShowingComplete =
        this.props.interactivityState === InteractivityState.PRESSED
          ? true
          : false;

      this.setState({ isShowingComplete, isShowing: false });
    }

    private setRippleStyles() {
      this.rippleStyles = this.getDefaultRippleStyles();
    }

    /*
    public render() {
      const to = this.state.isShowing ? { scale: 1 } : { scale: 0.001 };

      return (
        <Keyframes
          native
          // @ts-ignore
          script={async next => {
            while (true) {
              await next(Spring, {
                from: { scale: 0.01 },
                // tslint:disable-next-line:object-shorthand-properties-first
                to,
              });
            }
          }}
        >
          {(motion: ViewStyle) => (
            <React.Fragment>
              <View style={getDefaultRippleStyles().container}>
                <View
                  style={[getDefaultRippleStyles().ripple, { ...motion }]}
                />
              </View>
              <WrappedComponent {...this.props} />
            </React.Fragment>
          )}
        </Keyframes>
      );
    }
    */

    /*
    public render() {
      const to = this.state.isShowing ? { scale: 1 } : { scale: 0.001 };

      return (
        <Spring from={{ scale: 0.01 }} to={to}>
          {styles => {
            const transformStyles = {
              transform: [{ scale: (styles as { scale: number }).scale }],
            };

            return (
              <React.Fragment>
                <View style={getDefaultRippleStyles().container}>
                  <View
                    style={[getDefaultRippleStyles().ripple, transformStyles]}
                  />
                </View>
                <WrappedComponent {...this.props} />
              </React.Fragment>
            );
          }}
        </Spring>
      );
    }
    */
  };

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
  Button: DefaultButton,
  InnerContainer: DefaultInnerContainer,
  Text: DefaultText,
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
