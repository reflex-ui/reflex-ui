import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonTrailingIconContainerProps: ViewPropsGetter<
  ButtonProps
> = (props: ButtonProps): ViewProps => {
  const buttonTheme = props.componentsTheme.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).trailingIconContainer || {}
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.trailingIconContainer.props,
    buttonTheme.allVariants.allSizes.allStates.trailingIconContainer.getProps(
      props,
    ),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].trailingIconContainer
      .props,
    // tslint:disable-next-line
    buttonTheme.allVariants.allSizes[
      interactivityType
      // tslint:disable-next-line
    ].trailingIconContainer.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.trailingIconContainer.props,
    buttonTheme.allVariants[size].allStates.trailingIconContainer.getProps(
      props,
    ),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].trailingIconContainer
      .props,
    buttonTheme.allVariants[size][
      interactivityType
      // tslint:disable-next-line
    ].trailingIconContainer.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.trailingIconContainer.props,
    buttonTheme[variant].allSizes.allStates.trailingIconContainer.getProps(
      props,
    ),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].trailingIconContainer
      .props,
    buttonTheme[variant].allSizes[
      interactivityType
      // tslint:disable-next-line
    ].trailingIconContainer.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.trailingIconContainer.props,
    buttonTheme[variant][size].allStates.trailingIconContainer.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].trailingIconContainer.props,
    buttonTheme[variant][size][
      interactivityType
      // tslint:disable-next-line
    ].trailingIconContainer.getProps(props),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
