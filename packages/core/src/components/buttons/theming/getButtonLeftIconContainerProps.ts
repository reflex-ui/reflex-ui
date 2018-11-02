import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonLeftIconContainerProps: ViewPropsGetter<ButtonProps> = (
  props: ButtonProps,
): ViewProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getLeftIconContainerProps
    ? props.getLeftIconContainerProps(props)
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.leftIconContainer.props,
    buttonTheme.allVariants.allSizes.allStates.leftIconContainer.getProps(
      props,
    ),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].leftIconContainer.props,
    // tslint:disable-next-line
    buttonTheme.allVariants.allSizes[
      interactivityType
      // tslint:disable-next-line
    ].leftIconContainer.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.leftIconContainer.props,
    buttonTheme.allVariants[size].allStates.leftIconContainer.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].leftIconContainer.props,
    buttonTheme.allVariants[size][interactivityType].leftIconContainer.getProps(
      props,
    ),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.leftIconContainer.props,
    buttonTheme[variant].allSizes.allStates.leftIconContainer.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].leftIconContainer.props,
    buttonTheme[variant].allSizes[interactivityType].leftIconContainer.getProps(
      props,
    ),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.leftIconContainer.props,
    buttonTheme[variant][size].allStates.leftIconContainer.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].leftIconContainer.props,
    buttonTheme[variant][size][interactivityType].leftIconContainer.getProps(
      props,
    ),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
