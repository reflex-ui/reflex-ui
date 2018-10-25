import * as React from 'react';
import { TextProps } from 'react-native';

import { IconWrapperProps } from './IconWrapperProps';
import { getIconContainerProps, getIconProps } from './theming';

const extractTextProps = (props: IconWrapperProps): TextProps => {
  const {
    children,
    colorTheme,
    getContainerProps,
    noContainer,
    size,
    theme,
    ...textProps
  } = props;

  return textProps;
};

const handleIconChildren = (props: IconWrapperProps): React.ReactNode => {
  const { children } = props;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const iconProps = {
    ...getIconProps(props),
    ...extractTextProps(props),
  };

  let styledIcon;
  if (props.children) {
    styledIcon = React.cloneElement(
      props.children as React.ReactElement<{}>,
      iconProps,
    );
  }

  return styledIcon;
};

export const SimpleIconWrapper: React.SFC<IconWrapperProps> = (
  props: IconWrapperProps,
): React.ReactElement<{}> | null => {
  let children: React.ReactNode;
  if (props.children) children = handleIconChildren(props);
  if (props.noContainer) return <React.Fragment>{children}</React.Fragment>;

  const iconTheme = props.theme.components.icon;
  const { Container } = iconTheme.subComponents;
  const containerProps = getIconContainerProps(props);

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
};
