import * as React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import {
  ButtonState,
  ColorVariant,
  ITheme,
  ThemeContext,
} from '../../../styles';
import {
  IButtonContainerStyles,
  IButtonLabelStyles,
} from '../../../styles/themes/PurpleTealTheme';
import { isAndroid } from '../../../utils';
import { Size } from '../../Size';
import LabelButton, {
  ILabelButtonProps,
  ILabelButtonStyle,
  ILabelButtonStyleAndChildren,
} from './LabelButton';

export type StyledLabelButtonProps = ILabelButtonStyleProps & ILabelButtonProps;

export type IStyledLabelButton = React.ComponentType<StyledLabelButtonProps>;

export enum Variant {
  CONTAINED = 'contained',
  CONTAINED_RAISED = 'containedRaised',
  DEFAULT = 'default',
  OUTLINED = 'outlined',
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

export interface IThemedLabelButtonStyleProps
  extends ILabelButtonStyleProps,
    IThemed {}

type IGetInnerContainerStylesFromTheme = (
  containerStyles: IButtonContainerStyles,
  props: IThemedLabelButtonStyleProps,
) => ViewStyle;

const getInnerContainerStylesFromTheme: IGetInnerContainerStylesFromTheme = (
  containerStyles,
  props,
): ViewStyle => ({
  ...containerStyles.styles,
  ...containerStyles.getDynamicStyles(props),
  ...containerStyles.getDynamicCustomStyles(props),
});

type IGetInnerContainerStyles = (
  props: IThemedLabelButtonStyleProps,
) => ViewStyle;

const getInnerContainerStyles: IGetInnerContainerStyles = (
  props: IThemedLabelButtonStyleProps,
): TextStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: ButtonState = props.state || ButtonState.REGULAR;
  const variant: Variant = props.variant || Variant.DEFAULT;

  return {
    /* allVariants && allSizes && allStates */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes.allStates
        .innerContainer,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button.allVariants.allSizes[state].innerContainer,
      props,
    ),
    /* allVariants && size && allStates */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button.allVariants[size].allStates.innerContainer,
      props,
    ),
    /* allVariants && size && state */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button.allVariants[size][state].innerContainer,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes.allStates.innerContainer,
      props,
    ),
    /* variant && allSizes && state */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button[variant].allSizes[state].innerContainer,
      props,
    ),
    /* variant && size && allStates */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button[variant][size].allStates.innerContainer,
      props,
    ),
    /* variant && size && state */
    ...getInnerContainerStylesFromTheme(
      props.theme.components.button[variant][size][state].innerContainer,
      props,
    ),
  };
};

type IGetLabelButtonStylesFromTheme = (
  labelStyles: IButtonLabelStyles,
  props: IThemedLabelButtonStyleProps,
) => TextStyle;

const getLabelButtonStylesFromTheme: IGetLabelButtonStylesFromTheme = (
  labelStyles,
  props,
): TextStyle => ({
  ...labelStyles.styles,
  ...labelStyles.getDynamicStyles(props),
  ...labelStyles.getDynamicCustomStyles(props),
});

type IGetLabelStyles = (props: IThemedLabelButtonStyleProps) => TextStyle;

const getLabelStyles: IGetLabelStyles = (
  props: IThemedLabelButtonStyleProps,
): TextStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: ButtonState = props.state || ButtonState.REGULAR;
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

type ITransformText = (
  props: { text: string; transformation?: string },
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

const getStyledChildren: IGetStyledChildren = ({ children }): React.ReactNode =>
  // prettier-ignore
  typeof children === 'string' && isAndroid
    ? transformText({
      text: children,
      // TODO: implement this retrieving data from theme.
      transformation: 'uppercase',
      // tslint:disable-next-line
      // transformation: theme.components.button[size].common.label.textTransform,
    })
    : children;

type IGetStyle = (
  props: IThemedLabelButtonStyleProps,
) => ILabelButtonStyleAndChildren;

const getStyle: IGetStyle = ({
  children,
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  fullWidth,
  size = Size.REGULAR,
  state = ButtonState.REGULAR,
  theme,
  variant = Variant.DEFAULT,
}: IThemedLabelButtonStyleProps): ILabelButtonStyleAndChildren => ({
  children: getStyledChildren({ children, size, theme }),
  styles: StyleSheet.create<ILabelButtonStyle>({
    innerContainer: {
      ...getInnerContainerStyles({
        children,
        colorVariant,
        fullWidth,
        size,
        state,
        theme,
        variant,
      }),
    },
    label: {
      ...getLabelStyles({
        children,
        colorVariant,
        fullWidth,
        size,
        state,
        theme,
        variant,
      }),
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
