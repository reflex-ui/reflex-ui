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

type GetContainerStylesFromTheme = (
  containerStyles: ButtonContainerStyles,
  props: ThemedStyledButtonProps,
) => ViewStyle;

const getContainerStylesFromTheme: GetContainerStylesFromTheme = (
  containerStyles,
  props,
): ViewStyle => ({
  ...containerStyles.styles,
  ...containerStyles.getDynamicStyles(props),
  ...containerStyles.getDynamicCustomStyles(props),
});

type GetContainerStyles = (props: ThemedStyledButtonProps) => ViewStyle;

const getInnerContainerStyles: GetContainerStyles = (
  props: ThemedStyledButtonProps,
): TextStyle => {
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

const getOuterContainerStyles: GetContainerStyles = (
  props: ThemedStyledButtonProps,
): TextStyle => {
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
  interactivityState = InteractivityState.ENABLED,
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
      ...getOuterContainerStyles({
        children,
        colorVariant,
        fullWidth,
        interactivityState,
        size,
        theme,
        variant,
      }),
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
