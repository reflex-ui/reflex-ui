import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonContainerProps: ViewPropsGetter<ButtonProps> = (
  props: ButtonProps,
): ViewProps => {
  const buttonTheme = props.componentsTheme.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).container || {}
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.container.props,
    buttonTheme.allVariants.allSizes.allStates.container.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].container.props,
    buttonTheme.allVariants.allSizes[interactivityType].container.getProps(
      props,
    ),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.container.props,
    buttonTheme.allVariants[size].allStates.container.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].container.props,
    buttonTheme.allVariants[size][interactivityType].container.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.container.props,
    buttonTheme[variant].allSizes.allStates.container.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].container.props,
    buttonTheme[variant].allSizes[interactivityType].container.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.container.props,
    buttonTheme[variant][size].allStates.container.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].container.props,
    buttonTheme[variant][size][interactivityType].container.getProps(props),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
