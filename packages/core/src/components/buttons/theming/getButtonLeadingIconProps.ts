import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { ButtonProps } from '../ButtonProps';

export const getButtonLeadingIconProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
): TextProps => {
  const buttonTheme = props.componentsTheme.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).text || {}
    : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.leadingIcon.props,
    buttonTheme.allVariants.allSizes.allStates.leadingIcon.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].leadingIcon.props,
    buttonTheme.allVariants.allSizes[interactivityType].leadingIcon.getProps(
      props,
    ),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.leadingIcon.props,
    buttonTheme.allVariants[size].allStates.leadingIcon.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].leadingIcon.props,
    buttonTheme.allVariants[size][interactivityType].leadingIcon.getProps(
      props,
    ),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.leadingIcon.props,
    buttonTheme[variant].allSizes.allStates.leadingIcon.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].leadingIcon.props,
    buttonTheme[variant].allSizes[interactivityType].leadingIcon.getProps(
      props,
    ),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.leadingIcon.props,
    buttonTheme[variant][size].allStates.leadingIcon.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].leadingIcon.props,
    buttonTheme[variant][size][interactivityType].leadingIcon.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
