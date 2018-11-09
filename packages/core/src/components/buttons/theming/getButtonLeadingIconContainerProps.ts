import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonLeadingIconContainerProps: ViewPropsGetter<
  ButtonProps
> = (props: ButtonProps): ViewProps => {
  const buttonTheme = props.componentsTheme.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).leadingIconContainer || {}
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.leadingIconContainer.props,
    buttonTheme.allVariants.allSizes.allStates.leadingIconContainer.getProps(
      props,
    ),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].leadingIconContainer
      .props,
    // tslint:disable-next-line
    buttonTheme.allVariants.allSizes[
      interactivityType
      // tslint:disable-next-line
    ].leadingIconContainer.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.leadingIconContainer.props,
    buttonTheme.allVariants[size].allStates.leadingIconContainer.getProps(
      props,
    ),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].leadingIconContainer.props,
    buttonTheme.allVariants[size][
      interactivityType
      // tslint:disable-next-line
    ].leadingIconContainer.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.leadingIconContainer.props,
    buttonTheme[variant].allSizes.allStates.leadingIconContainer.getProps(
      props,
    ),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].leadingIconContainer.props,
    buttonTheme[variant].allSizes[
      interactivityType
      // tslint:disable-next-line
    ].leadingIconContainer.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.leadingIconContainer.props,
    buttonTheme[variant][size].allStates.leadingIconContainer.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].leadingIconContainer.props,
    buttonTheme[variant][size][interactivityType].leadingIconContainer.getProps(
      props,
    ),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
