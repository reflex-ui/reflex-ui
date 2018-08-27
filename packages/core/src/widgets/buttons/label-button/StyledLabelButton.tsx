import * as Color from 'color';
import * as React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';

import { ITheme, ThemeContext } from '../../../styles';
import { isAndroid } from '../../../utils';
import { TextTransformation } from '../../TextTransformation';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
  ILabelButtonStyleAndChildren,
} from './LabelButton';

export type StyledLabelButtonProps = ILabelButtonStyleProps & ILabelButtonProps;

export type IStyledLabelButton = React.ComponentType<StyledLabelButtonProps>;

export enum ButtonState {
  DISABLED,
  NORMAL,
  HOVERED,
  PRESSED,
}

enum ColorVariant {
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  PRIMARY_NORMAL,
  SECONDARY_DARK,
  SECONDARY_LIGHT,
  SECONDARY_NORMAL,
}

enum Size {
  XSMALL = 'xsmall',
  SMALL = 'small',
  REGULAR = 'regular',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

export enum Variant {
  CONTAINED,
  CONTAINED_RAISED,
  DEFAULT,
  OUTLINED,
}

interface ILabelButtonStyleProps {
  children?: React.ReactNode;
  colorVariant?: ColorVariant;
  fullWidth?: boolean;
  size?: Size;
  state?: ButtonState;
  variant?: Variant;
}

interface IThemed {
  theme: ITheme;
}

type IGetBackgroundColor = (
  props: {
    colorVariant: ColorVariant;
    state: ButtonState;
    theme: ITheme;
    variant: Variant;
  },
) => string;

const getBackgroundColor: IGetBackgroundColor = ({
  colorVariant,
  state,
  theme,
  variant,
}): string => {
  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getBackgroundColor() - state: ', state);

  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getBackgroundColor() - variant: ', variant);

  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getBackgroundColor() - Color: ', Color);

  const bgColor: Color = Color.rgb(getThemedColor({ colorVariant, theme }));

  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - bgColor.hex(): ',
    bgColor.hex(),
  );

  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - bgColor.lighten(0).hex(): ',
    bgColor.lighten(0).hex(),
  );

  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - bgColor.lighten(.2).hex(): ',
    bgColor.lighten(0.2).hex(),
  );

  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - bgColor.fade(.2).toString(): ',
    bgColor.fade(0.2).toString(),
  );

  if (variant === Variant.DEFAULT || variant === Variant.OUTLINED) {
    switch (state) {
      case ButtonState.HOVERED:
        return bgColor.fade(0.94).toString();
      case ButtonState.PRESSED:
        return bgColor.fade(0.81).toString();
      default:
        return 'transparent';
    }
  }

  switch (state) {
    case ButtonState.HOVERED:
      return bgColor.lighten(0.12).toString();
    case ButtonState.PRESSED:
      return bgColor.lighten(0.6).toString();
    default:
      return bgColor.hex();
  }
};

type IGetLabelStyle = (
  props: {
    colorVariant: ColorVariant;
    size: Size;
    theme: ITheme;
    variant: Variant;
  },
) => TextStyle;

const getLabelStyle: IGetLabelStyle = ({
  colorVariant,
  size,
  theme,
  variant,
}): TextStyle => {
  const onColor: boolean =
    variant === Variant.CONTAINED || variant === Variant.CONTAINED_RAISED
      ? true
      : false;

  return {
    color: getThemedColor({ colorVariant, onColor, theme }),
    fontFamily: theme.components.button[size].label.fontFamily,
    fontSize: theme.components.button[size].label.fontSize,
    fontWeight: theme.components.button[size].label.fontWeight,
    letterSpacing: theme.components.button[size].label.letterSpacing,
    textTransform: theme.components.button[size].label.textTransform,
    ...Platform.select({
      web: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        userSelect: 'none',
      },
    }),
  };
};

type IGetThemedColor = (
  props: {
    colorVariant: ColorVariant;
    onColor?: boolean;
    theme: ITheme;
  },
) => string;

const getThemedColor: IGetThemedColor = ({
  colorVariant,
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
  }
};

interface IBorderStyle {
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
}

type IGetBorderStyle = (
  props: { colorVariant: ColorVariant; theme: ITheme; variant: Variant },
) => IBorderStyle;

const getBorderStyle: IGetBorderStyle = ({
  colorVariant,
  theme,
  variant,
}): IBorderStyle => {
  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getBorderStyle() - variant: ', variant);

  let style: IBorderStyle = {
    borderRadius: 2,
  };

  if (variant === Variant.OUTLINED) {
    style = {
      ...style,
      borderColor: getThemedColor({ colorVariant, theme }),
      borderWidth: 2,
    };
  }

  return style;
};

interface IBoxShadowStyle {
  boxShadow?: string;
  elevation?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
}

type IGetBoxShadowStyle = (
  props: { state: ButtonState; variant: Variant },
) => IBoxShadowStyle;

const getBoxShadowStyle: IGetBoxShadowStyle = ({
  state,
  variant,
}): IBoxShadowStyle => {
  if (
    variant === Variant.CONTAINED ||
    variant === Variant.DEFAULT ||
    variant === Variant.OUTLINED
  ) {
    return {};
  }

  const androidShadows: number[] = [];
  androidShadows[ButtonState.DISABLED] = 0;
  androidShadows[ButtonState.NORMAL] = 2;
  /*
   * No hover state on native Android.
   */
  // androidShadows[ButtonState.HOVERED] = 0;
  /**/
  androidShadows[ButtonState.PRESSED] = 8;

  const iosShadows: {}[] = [];
  iosShadows[ButtonState.DISABLED] = {};
  iosShadows[ButtonState.NORMAL] = {
    shadowColor: '#000000',
    shadowOffset: { height: 1.6 },
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
    shadowOffset: { height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  };

  const webShadows: string[] = [];
  webShadows[ButtonState.DISABLED] = '0 0 0 0 rgba(0,0,0,0)';
  webShadows[ButtonState.NORMAL] = `0 3px 1px -2px rgba(0,0,0,.2),
    0 2px 2px 0 rgba(0,0,0,.14),
    0 1px 5px 0 rgba(0,0,0,.12)`;
  webShadows[ButtonState.HOVERED] = `0px 2px 4px -1px rgba(0,0,0,.2),
  0px 4px 5px 0px rgba(0,0,0,.14),
  0px 1px 10px 0px rgba(0,0,0,.12)`;
  webShadows[ButtonState.PRESSED] = `0px 5px 5px -3px rgba(0,0,0,.2),
  0px 8px 10px 1px rgba(0,0,0,.14),
  0px 3px 14px 2px rgba(0,0,0,.12)`;

  const style = Platform.select({
    android: {
      elevation: androidShadows[state],
    },
    ios: { ...iosShadows[state] },
    web: {
      boxShadow: webShadows[state],
    },
  });

  // alert(`getBoxShadowStyle() - style.elevation: ${style.elevation}`);
  // tslint:disable-next-line:no-console
  console.log('getBoxShadowStyle() - style: ', style);

  return Platform.select({
    android: {
      elevation: androidShadows[state],
    },
    ios: { ...iosShadows[state] },
    web: {
      boxShadow: webShadows[state],
    },
  });
};

interface IMarginPaddingStyle {
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
}

type IGetMarginPaddingStyle = (
  props: { variant: Variant },
) => IMarginPaddingStyle;

const getMarginPaddingStyle: IGetMarginPaddingStyle = ({
  variant,
}): IMarginPaddingStyle => {
  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getMarginPaddingStyle() - variant: ', variant);

  let style: IMarginPaddingStyle = {
    marginHorizontal: 16,
    marginVertical: 8,
  };

  if (variant === Variant.DEFAULT) {
    style = {
      ...style,
      paddingHorizontal: 8,
    };
  } else if (variant === Variant.OUTLINED) {
    style = {
      ...style,
      paddingHorizontal: 14,
    };
  } else {
    style = {
      ...style,
      paddingHorizontal: 16,
    };
  }

  return style;
};

interface IWidthHeightStyle {
  height?: number;
  minHeight?: number;
  minWidth?: number;
  width?: number;
}

type IGetWidthHeightStyle = (props: { size: Size }) => IWidthHeightStyle;

const getWidthHeightStyle: IGetWidthHeightStyle = ({
  size,
}): IWidthHeightStyle => {
  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getWidthHeightStyle() - size: ', size);

  switch (size) {
    case Size.XSMALL:
      return { height: 28, minWidth: 58 };
    case Size.SMALL:
      return { height: 32, minWidth: 64 };
    case Size.REGULAR:
      return { height: 36, minWidth: 64 };
    case Size.LARGE:
      return { height: 40, minWidth: 64 };
    case Size.XLARGE:
      return { height: 44, minWidth: 70 };
  }
};

type ITransformText = (
  props: { text: string; transformation?: TextTransformation },
) => string;

const transformText: ITransformText = ({
  text,
  transformation = 'none',
}): string => {
  switch (transformation) {
    case 'capitalize':
      return text.replace(
        /\w\S*/g,
        w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(),
      );
    case 'lowercase':
      return text.toLowerCase();
    case 'uppercase':
      return text.toUpperCase();
    default:
      return text;
  }
};

type IGetStyledChildren = (
  props: { children: React.ReactNode; size: Size; theme: ITheme },
) => React.ReactNode;

const getStyledChildren: IGetStyledChildren = ({
  children,
  size,
  theme,
}): React.ReactNode =>
  // prettier-ignore
  typeof children === 'string' && isAndroid
    ? transformText({
      text: children,
      transformation: theme.components.button[size].label.textTransform,
    })
    : children;

/*
type IGetStyle = (props: { children: React.ReactNode,
  colorVariant: ColorVariant,
  fullWidth: boolean,
  size: Size,
  state: ButtonState,
  theme: ITheme,
  variant: Variant }) => IWidthHeightStyle;
*/

type IGetStyle = (
  props: ILabelButtonStyleProps & IThemed,
) => ILabelButtonStyleAndChildren;

const getStyle: IGetStyle = ({
  children,
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  fullWidth,
  size = Size.REGULAR,
  state = ButtonState.NORMAL,
  theme,
  variant = Variant.DEFAULT,
}: ILabelButtonStyleProps & IThemed): ILabelButtonStyleAndChildren => ({
  children: getStyledChildren({ children, size, theme }),
  styles: StyleSheet.create<ILabelButtonStyle>({
    innerContainer: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor({
        colorVariant,
        state,
        theme,
        variant,
      }),
      flexDirection: fullWidth ? 'column' : 'row',
      ...getBorderStyle({ colorVariant, theme, variant }),
      ...getBoxShadowStyle({ state, variant }),
      ...getMarginPaddingStyle({ variant }),
      ...getWidthHeightStyle({ size }),
      justifyContent: 'center',
    },
    label: {
      ...getLabelStyle({ colorVariant, size, theme, variant }),
    },
    outerContainer: {
      flexDirection: fullWidth ? 'column' : 'row',
      flexGrow: fullWidth ? 1 : undefined,
    },
  }),
});

const Button: IStyledLabelButton = ({
  children,
  colorVariant,
  fullWidth,
  size,
  state,
  variant,
  ...other // tslint:disable-line:trailing-comma
}: StyledLabelButtonProps): JSX.Element => (
  <ThemeContext.Consumer>
    {theme => (
      <LabelButton
        {...other}
        customStyle={getStyle({
          children,
          colorVariant,
          fullWidth,
          size,
          state,
          theme,
          variant,
        })}
      />
    )}
  </ThemeContext.Consumer>
);

export default Button;
