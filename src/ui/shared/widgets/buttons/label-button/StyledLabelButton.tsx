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

interface ILabelButtonStyleProps {
  fullWidth?: boolean;
  isHovering?: boolean;
  isPressing?: boolean;
  outlined?: boolean;
  primary?: boolean;
  size?: Size;
}

type IGetBackgroundColor = (
  props: { isHovering?: boolean; isPressing?: boolean; primary?: boolean },
) => string;

const getBackgroundColor: IGetBackgroundColor = ({
  isHovering,
  isPressing,
  primary,
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
  if (isPressing) return primary ? 'green' : 'red';
  if (isHovering) return primary ? 'orange' : 'black';
  return primary ? 'blue' : 'yellow';
};

const getStyle = ({
  fullWidth,
  isHovering,
  isPressing,
  outlined,
  primary,
}: ILabelButtonStyleProps): ILabelButtonStyle =>
  StyleSheet.create<ILabelButtonStyle>({
    button: {
      backgroundColor: getBackgroundColor({ isHovering, isPressing, primary }),
      borderColor: outlined ? 'red' : undefined,
      borderRadius: outlined ? 4 : 0,
      borderWidth: outlined ? 1 : 0,
      flexDirection: fullWidth ? 'column' : 'row',
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
  outlined,
  primary,
  size,
  ...other // tslint:disable-line:trailing-comma
}: StyledLabelButtonProps): JSX.Element => (
  <LabelButton
    {...other}
    customStyle={getStyle({
      fullWidth,
      isHovering,
      isPressing,
      outlined,
      primary,
      size,
    })}
  />
);

export default Button;
