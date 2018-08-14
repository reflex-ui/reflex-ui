import * as React from 'react';
import { StyleSheet, TextStyle } from 'react-native';

import { ITheme, ThemeContext } from '../../../styles';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
} from './LabelButton';

export type StyledLabelButtonProps = ILabelButtonStyleProps & ILabelButtonProps;

export type IStyledLabelButton = React.ComponentType<StyledLabelButtonProps>;

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
  isHovering?: boolean;
  isPressing?: boolean;
  size?: Size;
  variant?: Variant;
}

interface IThemed {
  theme: ITheme;
}

type IGetBackgroundColor = (
  props: {
    colorTheme: ColorTheme;
    isHovering?: boolean;
    isPressing?: boolean;
    theme: ITheme;
    variant: Variant;
  },
) => string;

const getBackgroundColor: IGetBackgroundColor = ({
  colorTheme,
  isHovering,
  isPressing,
  theme,
  variant,
}): string => {
  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - isHovering: ',
    isHovering,
  );
  // tslint:disable-next-line:no-console
  console.log(
    'StyledLabelButton.getBackgroundColor() - isPressing: ',
    isPressing,
  );
  if (variant === Variant.DEFAULT || variant === Variant.OUTLINED) {
    return 'transparent';
  }
  // if (isPressing) return primary ? 'green' : 'red';
  // if (isHovering) return primary ? 'orange' : 'black';
  return getThemeColor({ colorTheme, theme });
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
    borderRadius: 4,
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
  isHovering,
  isPressing,
  size = Size.MEDIUM,
  theme,
  variant = Variant.DEFAULT,
}: ILabelButtonStyleProps & IThemed): ILabelButtonStyle =>
  StyleSheet.create<ILabelButtonStyle>({
    button: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor({
        colorTheme,
        isHovering,
        isPressing,
        theme,
        variant,
      }),
      flexDirection: fullWidth ? 'column' : 'row',
      ...getBorderStyle({ colorTheme, theme, variant }),
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
  isHovering,
  isPressing,
  size,
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
          isHovering,
          isPressing,
          size,
          theme,
          variant,
        })}
      />
    )}
  </ThemeContext.Consumer>
);

export default Button;
