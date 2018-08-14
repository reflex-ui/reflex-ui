import * as React from 'react';
import { StyleSheet } from 'react-native';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
} from './LabelButton';

export type StyledLabelButtonProps = ILabelButtonStyleProps & ILabelButtonProps;

export type IStyledLabelButton = React.ComponentType<StyledLabelButtonProps>;

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
  fullWidth?: boolean;
  isHovering?: boolean;
  isPressing?: boolean;
  primary?: boolean;
  size?: Size;
  variant?: Variant;
}

type IGetBackgroundColor = (
  props: {
    isHovering?: boolean;
    isPressing?: boolean;
    primary?: boolean;
    variant: Variant;
  },
) => string;

const getBackgroundColor: IGetBackgroundColor = ({
  isHovering,
  isPressing,
  primary,
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
  if (isPressing) return primary ? 'green' : 'red';
  if (isHovering) return primary ? 'orange' : 'black';
  return primary ? 'yellow' : '#6200ee';
};

interface IBorderStyle {
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
}

type IGetBorderStyle = (props: { variant: Variant }) => IBorderStyle;

const getBorderStyle: IGetBorderStyle = ({ variant }): IBorderStyle => {
  // tslint:disable-next-line:no-console
  console.log('StyledLabelButton.getBorderStyle() - variant: ', variant);

  let style: IBorderStyle = {
    borderRadius: 4,
  };

  if (variant === Variant.OUTLINED) {
    style = {
      ...style,
      borderColor: 'red',
      borderWidth: 1,
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
  fullWidth,
  isHovering,
  isPressing,
  primary,
  size = Size.MEDIUM,
  variant = Variant.DEFAULT,
}: ILabelButtonStyleProps): ILabelButtonStyle =>
  StyleSheet.create<ILabelButtonStyle>({
    button: {
      alignItems: 'center',
      backgroundColor: getBackgroundColor({
        isHovering,
        isPressing,
        primary,
        variant,
      }),
      flexDirection: fullWidth ? 'column' : 'row',
      ...getBorderStyle({ variant }),
      ...getMarginPaddingStyle({ variant }),
      ...getWidthHeightStyle({ size }),
      justifyContent: 'center',
    },
    container: {
      flexDirection: fullWidth ? 'column' : 'row',
    },
    label: {
      color: 'green',
    },
  });

const Button: IStyledLabelButton = ({
  fullWidth,
  isHovering,
  isPressing,
  primary,
  size,
  variant,
  ...other // tslint:disable-line:trailing-comma
}: StyledLabelButtonProps): JSX.Element => (
  <LabelButton
    {...other}
    customStyle={getStyle({
      fullWidth,
      isHovering,
      isPressing,
      primary,
      size,
      variant,
    })}
  />
);

export default Button;
