import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonFabIconContainerProps: ViewPropsGetter<ButtonProps> = (
  props: ButtonProps,
): ViewProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  const { size, variant } = props;
  const userProps = props.getFabIconContainerProps
    ? props.getFabIconContainerProps(props)
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.fabIconContainer.props,
    buttonTheme.allVariants.allSizes.allStates.fabIconContainer.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].fabIconContainer.props,
    // tslint:disable-next-line
    buttonTheme.allVariants.allSizes[
      interactivityType
      // tslint:disable-next-line
    ].fabIconContainer.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.fabIconContainer.props,
    buttonTheme.allVariants[size].allStates.fabIconContainer.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].fabIconContainer.props,
    buttonTheme.allVariants[size][interactivityType].fabIconContainer.getProps(
      props,
    ),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.fabIconContainer.props,
    buttonTheme[variant].allSizes.allStates.fabIconContainer.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].fabIconContainer.props,
    buttonTheme[variant].allSizes[interactivityType].fabIconContainer.getProps(
      props,
    ),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.fabIconContainer.props,
    buttonTheme[variant][size].allStates.fabIconContainer.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].fabIconContainer.props,
    buttonTheme[variant][size][interactivityType].fabIconContainer.getProps(
      props,
    ),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
