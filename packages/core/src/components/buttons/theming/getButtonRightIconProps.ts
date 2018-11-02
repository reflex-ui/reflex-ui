import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { ButtonProps } from '../ButtonProps';

export const getButtonRightIconProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
): TextProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getTextProps ? props.getTextProps(props) : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.rightIcon.props,
    buttonTheme.allVariants.allSizes.allStates.rightIcon.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].rightIcon.props,
    buttonTheme.allVariants.allSizes[interactivityType].rightIcon.getProps(
      props,
    ),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.rightIcon.props,
    buttonTheme.allVariants[size].allStates.rightIcon.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].rightIcon.props,
    buttonTheme.allVariants[size][interactivityType].rightIcon.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.rightIcon.props,
    buttonTheme[variant].allSizes.allStates.rightIcon.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].rightIcon.props,
    buttonTheme[variant].allSizes[interactivityType].rightIcon.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.rightIcon.props,
    buttonTheme[variant][size].allStates.rightIcon.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].rightIcon.props,
    buttonTheme[variant][size][interactivityType].rightIcon.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
