import * as React from 'react';
import { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

import {
  getSubProps,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../theming';
import { cloneElement } from '../../utils';
import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';
import { IconWrapperSubProps } from './IconWrapperSubProps';
import { TextIconProps } from './TextIconProps';

const handleIconChildren = (
  props: IconWrapperProps,
  userSubProps: IconWrapperSubProps,
): React.ReactNode => {
  const children = props.children as React.ReactElement<
    OptionalIconWrapperProps
  >;
  if (!children) return undefined;

  if (typeof children !== 'object') {
    throw new Error('Icon children must be a valid React element.');
  }

  const iconProps: TextIconProps = {
    ...getSubProps<IconWrapperProps, TextIconProps, TextStyle>({
      componentProps: props,
      themes: [
        props.componentsTheme.icon.icon as SizedSubcomponentTheme<
          PrimitiveTheme<IconWrapperProps, TextProps>
        >,
      ],
      userProps: userSubProps.icon,
    }),
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
  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};
  if (props.children) children = handleIconChildren(props, userSubProps);
  if (props.noContainer) return <React.Fragment>{children}</React.Fragment>;

  const iconTheme = props.componentsTheme.icon;
  const { Container } = iconTheme.subcomponents;

  const containerProps = getSubProps<IconWrapperProps, ViewProps, ViewStyle>({
    componentProps: props,
    themes: [
      props.componentsTheme.icon.container as SizedSubcomponentTheme<
        PrimitiveTheme<IconWrapperProps, ViewProps>
      >,
    ],
    userProps: userSubProps.container,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {children}
    </Container>
  );
};
