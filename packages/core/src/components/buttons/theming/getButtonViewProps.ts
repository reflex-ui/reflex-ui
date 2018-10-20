import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { SpecialButtonProps } from '../SpecialButtonProps';

export const getButtonViewProps: ViewPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): ViewProps => {
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  const { size, variant } = props;
  const userProps = props.getViewProps ? props.getViewProps(props) : {};

  const viewProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.view.props,
    buttonTheme.allVariants.allSizes.allStates.view.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].view.props,
    buttonTheme.allVariants.allSizes[interactivityType].view.getProps(props),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.view.props,
    buttonTheme.allVariants[size].allStates.view.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].view.props,
    buttonTheme.allVariants[size][interactivityType].view.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.view.props,
    buttonTheme[variant].allSizes.allStates.view.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].view.props,
    buttonTheme[variant].allSizes[interactivityType].view.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.view.props,
    buttonTheme[variant][size].allStates.view.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].view.props,
    buttonTheme[variant][size][interactivityType].view.getProps(props),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
