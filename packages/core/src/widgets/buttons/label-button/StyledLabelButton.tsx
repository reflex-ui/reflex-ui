import * as React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { InteractivityState } from '../../../interactivity';
import { ColorVariant, Theme, ThemeContext } from '../../../styles';
import {
  ButtonContainerStyles,
  ButtonLabelStyles,
} from '../../../styles/themes/PurpleTealTheme';
import { isAndroid } from '../../../utils';
import { Size } from '../../Size';
import {
  Button,
  ButtonProps,
  ButtonStyle,
  ButtonStyleAndChildren,
} from './LabelButton';

export interface StyledButtonProps extends ButtonProps {
  children?: React.ReactNode;
  colorVariant?: ColorVariant;
  fullWidth?: boolean;
  interactivityState?: InteractivityState;
  size?: Size;
  variant?: Variant;
}

// export type StyledButtonProps = ButtonStyleProps & ButtonProps;

export type StyledButton = React.ComponentType<StyledButtonProps>;

export enum Variant {
  CONTAINED = 'contained',
  CONTAINED_RAISED = 'containedRaised',
  DEFAULT = 'default',
  OUTLINED = 'outlined',
}

interface Themed {
  theme: Theme;
}

export interface ThemedStyledButtonProps extends StyledButtonProps, Themed {}

type GetInnerContainerStylesFromTheme = (
  containerStyles: ButtonContainerStyles,
  props: ThemedStyledButtonProps,
) => ViewStyle;

const getInnerContainerStylesFromTheme: GetInnerContainerStylesFromTheme = (
  containerStyles,
  props,
): ViewStyle => ({
  ...containerStyles.styles,
  ...containerStyles.getDynamicStyles(props),
  ...containerStyles.getDynamicCustomStyles(props),
});

type GetInnerContainerStyles = (props: ThemedStyledButtonProps) => ViewStyle;

const getInnerContainerStyles: GetInnerContainerStyles = (
  props: ThemedStyledButtonProps,
): TextStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: InteractivityState =
    props.interactivityState || InteractivityState.REGULAR;
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

type GetLabelButtonStylesFromTheme = (
  labelStyles: ButtonLabelStyles,
  props: ThemedStyledButtonProps,
) => TextStyle;

const getLabelButtonStylesFromTheme: GetLabelButtonStylesFromTheme = (
  labelStyles,
  props,
): TextStyle => ({
  ...labelStyles.styles,
  ...labelStyles.getDynamicStyles(props),
  ...labelStyles.getDynamicCustomStyles(props),
});

type GetLabelStyles = (props: ThemedStyledButtonProps) => TextStyle;

const getLabelStyles: GetLabelStyles = (
  props: ThemedStyledButtonProps,
): TextStyle => {
  const size: Size = props.size || Size.REGULAR;
  const state: InteractivityState =
    props.interactivityState || InteractivityState.REGULAR;
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

type TransformText = (
  props: { text: string; transformation?: string },
) => string;

const transformText: TransformText = ({
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

type GetStyledChildren = (
  props: { children: React.ReactNode; size: Size; theme: Theme },
) => React.ReactNode;

const getStyledChildren: GetStyledChildren = ({ children }): React.ReactNode =>
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

type GetStyle = (props: ThemedStyledButtonProps) => ButtonStyleAndChildren;

const getStyle: GetStyle = ({
  children,
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  fullWidth,
  size = Size.REGULAR,
  interactivityState = InteractivityState.REGULAR,
  theme,
  variant = Variant.DEFAULT,
}: ThemedStyledButtonProps): ButtonStyleAndChildren => ({
  children: getStyledChildren({ children, size, theme }),
  styles: StyleSheet.create<ButtonStyle>({
    innerContainer: {
      ...getInnerContainerStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
        theme,
        variant,
      }),
    },
    label: {
      ...getLabelStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
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

export const ThemedButton: StyledButton = ({
  children,
  colorVariant,
  fullWidth,
  interactivityState,
  size,
  variant,
  ...other // tslint:disable-line:trailing-comma
}: StyledButtonProps): JSX.Element => (
  <ThemeContext.Consumer>
    {theme => (
      <Button
        {...other}
        customStyle={getStyle({
          children,
          colorVariant,
          fullWidth,
          interactivityState,
          size,
          theme,
          variant,
        })}
      />
    )}
  </ThemeContext.Consumer>
);
