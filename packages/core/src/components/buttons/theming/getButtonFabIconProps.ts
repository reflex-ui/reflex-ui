import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { ButtonProps } from '../ButtonProps';

export const getButtonFabIconProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
): TextProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  const { size, variant } = props;
  const userProps = props.getTextProps ? props.getTextProps(props) : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.fabIcon.props,
    buttonTheme.allVariants.allSizes.allStates.fabIcon.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].fabIcon.props,
    buttonTheme.allVariants.allSizes[interactivityType].fabIcon.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.fabIcon.props,
    buttonTheme.allVariants[size].allStates.fabIcon.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].fabIcon.props,
    buttonTheme.allVariants[size][interactivityType].fabIcon.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.fabIcon.props,
    buttonTheme[variant].allSizes.allStates.fabIcon.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].fabIcon.props,
    buttonTheme[variant].allSizes[interactivityType].fabIcon.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.fabIcon.props,
    buttonTheme[variant][size].allStates.fabIcon.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].fabIcon.props,
    buttonTheme[variant][size][interactivityType].fabIcon.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
