import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { ButtonProps } from '../ButtonProps';

export const getButtonIconProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
): TextProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getTextProps ? props.getTextProps(props) : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.icon.props,
    buttonTheme.allVariants.allSizes.allStates.icon.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].icon.props,
    buttonTheme.allVariants.allSizes[interactivityType].icon.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.icon.props,
    buttonTheme.allVariants[size].allStates.icon.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].icon.props,
    buttonTheme.allVariants[size][interactivityType].icon.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.icon.props,
    buttonTheme[variant].allSizes.allStates.icon.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].icon.props,
    buttonTheme[variant].allSizes[interactivityType].icon.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.icon.props,
    buttonTheme[variant][size].allStates.icon.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].icon.props,
    buttonTheme[variant][size][interactivityType].icon.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
