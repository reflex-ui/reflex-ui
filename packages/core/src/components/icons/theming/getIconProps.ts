import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { IconWrapperProps } from '../IconWrapperProps';

export const getIconProps: TextPropsGetter<IconWrapperProps> = (
  props: IconWrapperProps,
): TextProps => {
  const iconTheme = props.componentsTheme.icon;
  const { size } = props;

  const textProps = merge(
    {},
    /* allSizes */
    iconTheme.allSizes.icon.props,
    iconTheme.allSizes.icon.getProps(props),
    /* size */
    iconTheme[size].icon.props,
    iconTheme[size].icon.getProps(props),
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
