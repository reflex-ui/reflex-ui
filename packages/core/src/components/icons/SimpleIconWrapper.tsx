import * as React from 'react';
import { TextProps } from 'react-native';

import { cloneElement } from '../../utils';
import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';
import { getIconContainerProps, getIconProps } from './theming';

const extractTextProps = (props: IconWrapperProps): TextProps => {
  const {
    children,
    colorTheme,
    componentsTheme,
    getContainerProps,
    noContainer,
    paletteTheme,
    size,
    ...textProps
  } = props;

  return textProps;
};

const handleIconChildren = (props: IconWrapperProps): React.ReactNode => {
  const children = props.children as React.ReactElement<
    OptionalIconWrapperProps
  >;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const iconProps = {
    ...getIconProps(props),
    ...extractTextProps(props),
  };

  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
    : undefined;

  return styledIcon;
};

export const SimpleIconWrapper: React.SFC<IconWrapperProps> = (
  props: IconWrapperProps,
): React.ReactElement<{}> | null => {
  let children: React.ReactNode;
  if (props.children) children = handleIconChildren(props);
  if (props.noContainer) return <React.Fragment>{children}</React.Fragment>;

  const iconTheme = props.componentsTheme.icon;
  const { Container } = iconTheme.subComponents;
  const containerProps = getIconContainerProps(props);

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
};
