import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { ButtonProps } from '../ButtonProps';

export const getButtonRightIconContainerProps: ViewPropsGetter<ButtonProps> = (
  props: ButtonProps,
): ViewProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState.type;

  const { size, variant } = props;
  const userProps = props.getSubProps
    ? props.getSubProps(props).rightIconContainer || {}
    : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.rightIconContainer.props,
    buttonTheme.allVariants.allSizes.allStates.rightIconContainer.getProps(
      props,
    ),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].rightIconContainer
      .props,
    // tslint:disable-next-line
    buttonTheme.allVariants.allSizes[
      interactivityType
      // tslint:disable-next-line
    ].rightIconContainer.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.rightIconContainer.props,
    buttonTheme.allVariants[size].allStates.rightIconContainer.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].rightIconContainer.props,
    buttonTheme.allVariants[size][
      interactivityType
      // tslint:disable-next-line
    ].rightIconContainer.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.rightIconContainer.props,
    buttonTheme[variant].allSizes.allStates.rightIconContainer.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].rightIconContainer.props,
    buttonTheme[variant].allSizes[
      interactivityType
      // tslint:disable-next-line
    ].rightIconContainer.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.rightIconContainer.props,
    buttonTheme[variant][size].allStates.rightIconContainer.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].rightIconContainer.props,
    buttonTheme[variant][size][interactivityType].rightIconContainer.getProps(
      props,
    ),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
