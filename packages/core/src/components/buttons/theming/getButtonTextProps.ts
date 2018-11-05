import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { ButtonProps } from '../ButtonProps';

export const getButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
): TextProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).text || {}
    : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.text.props,
    buttonTheme.allVariants.allSizes.allStates.text.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].text.props,
    buttonTheme.allVariants.allSizes[interactivityType].text.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.text.props,
    buttonTheme.allVariants[size].allStates.text.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].text.props,
    buttonTheme.allVariants[size][interactivityType].text.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.text.props,
    buttonTheme[variant].allSizes.allStates.text.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].text.props,
    buttonTheme[variant].allSizes[interactivityType].text.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.text.props,
    buttonTheme[variant][size].allStates.text.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].text.props,
    buttonTheme[variant][size][interactivityType].text.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
