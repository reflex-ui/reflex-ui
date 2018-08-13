import * as React from 'react';
import { StyleSheet } from 'react-native';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
} from './LabelButton';

enum Size {
  XSMALL,
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
}

interface ILabelButtonStyleProps {
  fullWidth?: boolean;
  outlined?: boolean;
  primary?: boolean;
  size?: Size;
}

const getStyle = ({
  fullWidth,
  outlined,
  primary,
}: ILabelButtonStyleProps): ILabelButtonStyle =>
  StyleSheet.create<ILabelButtonStyle>({
    button: {
      backgroundColor: primary ? 'blue' : 'white',
      borderColor: outlined ? 'red' : undefined,
      borderRadius: outlined ? 4 : 0,
      borderWidth: outlined ? 1 : 0,
    },
    container: {
      flexDirection: fullWidth ? 'column' : 'row',
    },
    label: {
      color: 'green',
    },
  });

const Button: React.SFC<ILabelButtonStyleProps & ILabelButtonProps> = ({
  fullWidth,
  outlined,
  primary,
  size,
  ...other // tslint:disable-line:trailing-comma
}: ILabelButtonStyleProps & ILabelButtonProps): JSX.Element => (
  <LabelButton
    {...other}
    customStyle={getStyle({
      fullWidth,
      outlined,
      primary,
      size,
    })}
  />
);

export default Button;
