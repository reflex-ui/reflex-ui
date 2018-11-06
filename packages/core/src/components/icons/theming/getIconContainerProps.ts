import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { createRegisteredViewStyle, ViewPropsGetter } from '../../views';
import { IconWrapperProps } from '../IconWrapperProps';

export const getIconContainerProps: ViewPropsGetter<IconWrapperProps> = (
  props: IconWrapperProps,
): ViewProps => {
  const iconTheme = props.componentsTheme.icon;
  const { size } = props;
  const userProps = props.getContainerProps
    ? props.getContainerProps(props)
    : {};

  const viewProps = merge(
    {},
    /* allSizes */
    iconTheme.allSizes.container.props,
    iconTheme.allSizes.container.getProps(props),
    /* size */
    iconTheme[size].container.props,
    iconTheme[size].container.getProps(props),
    /* user props */
    userProps,
  );

  const viewStyle: ViewStyle = viewProps.style as ViewStyle;
  viewProps.style = createRegisteredViewStyle(viewStyle || {}).style;

  return viewProps;
};
