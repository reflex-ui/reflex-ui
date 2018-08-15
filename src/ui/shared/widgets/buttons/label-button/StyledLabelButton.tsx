import * as Color from 'color';
import * as React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';

import {
  FontWeight,
  getFontWeight,
  ITheme,
  ThemeContext,
} from '../../../styles';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
} from './LabelButton';

export type StyledLabelButtonProps = ILabelButtonStyleProps & ILabelButtonProps;

export type IStyledLabelButton = React.ComponentType<StyledLabelButtonProps>;

export enum ButtonState {
  DISABLED,
  NORMAL,
  HOVERED,
  PRESSED,
}

enum ColorTheme {
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  PRIMARY_NORMAL,
  SECONDAY_DARK,
  SECONDAY_LIGHT,
  SECONDAY_NORMAL,
}

enum Size {
  XSMALL,
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
}

export enum Variant {
  CONTAINED,
  CONTAINED_RAISED,
  DEFAULT,
  OUTLINED,
}

interface ILabelButtonStyleProps {
  colorTheme?: ColorTheme;
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
    colorTheme: ColorTheme;
    state: ButtonState;
    theme: ITheme;
    variant: Variant;
  },
) => string;

const getBackgroundColor: IGetBackgroundColor = ({
  colorTheme,
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

  const bgColor: Color = Color.rgb(getThemeColor({ colorTheme, theme }));

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
    colorTheme: ColorTheme;
    theme: ITheme;
    variant: Variant;
  },
) => TextStyle;

const getLabelStyle: IGetLabelStyle = ({
  colorTheme,
  theme,
  variant,
}): TextStyle => {
  const onColor: boolean =
    variant === Variant.CONTAINED || variant === Variant.CONTAINED_RAISED
      ? true
      : false;

  return {
    color: getThemeColor({ colorTheme, onColor, theme }),
    fontSize: 14,
    fontWeight: getFontWeight(FontWeight.WEIGHT_REGULAR),
    textTransform: 'uppercase',
    ...Platform.select({
      web: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        userSelect: 'none',
      },
    }),
  };
};

type IGetThemeColor = (
  props: {
    colorTheme: ColorTheme;
    onColor?: boolean;
    theme: ITheme;
  },
) => string;

const getThemeColor: IGetThemeColor = ({
  colorTheme,
  onColor,
  theme,
}): string => {
  switch (colorTheme) {
    case ColorTheme.PRIMARY_DARK:
      return onColor
        ? theme.palette.primary.dark.onColor
        : theme.palette.primary.dark.color;
    case ColorTheme.PRIMARY_LIGHT:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
    case ColorTheme.PRIMARY_NORMAL:
      return onColor
        ? theme.palette.primary.normal.onColor
        : theme.palette.primary.normal.color;
    case ColorTheme.SECONDAY_DARK:
      return onColor
        ? theme.palette.secondary.dark.onColor
        : theme.palette.secondary.dark.color;
    case ColorTheme.SECONDAY_LIGHT:
      return onColor
        ? theme.palette.secondary.light.onColor
        : theme.palette.secondary.light.color;
    case ColorTheme.SECONDAY_NORMAL:
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
  props: { colorTheme: ColorTheme; theme: ITheme; variant: Variant },
) => IBorderStyle;

const getBorderStyle: IGetBorderStyle = ({
  colorTheme,
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
      borderColor: getThemeColor({ colorTheme, theme }),
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
    case Size.MEDIUM:
      return { height: 36, minWidth: 64 };
    case Size.LARGE:
      return { height: 40, minWidth: 64 };
    case Size.XLARGE:
      return { height: 44, minWidth: 70 };
  }
};

const getStyle = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  fullWidth,
  size = Size.MEDIUM,
  state = ButtonState.NORMAL,
  theme,
  variant = Variant.DEFAULT,
}: ILabelButtonStyleProps & IThemed): ILabelButtonStyle =>
  StyleSheet.create<ILabelButtonStyle>({
    button: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor({
        colorTheme,
        state,
        theme,
        variant,
      }),
      flexDirection: fullWidth ? 'column' : 'row',
      ...getBorderStyle({ colorTheme, theme, variant }),
      ...getBoxShadowStyle({ state, variant }),
      ...getMarginPaddingStyle({ variant }),
      ...getWidthHeightStyle({ size }),
      justifyContent: 'center',
    },
    container: {
      flexDirection: fullWidth ? 'column' : 'row',
    },
    label: {
      ...getLabelStyle({ colorTheme, theme, variant }),
    },
  });

const Button: IStyledLabelButton = ({
  colorTheme,
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
          colorTheme,
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
