import * as React from 'react';
import {
  StyleSheet,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  getSubProps,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../theming';
import { cloneElement } from '../../utils';
import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';
import { IconWrapperSubProps } from './IconWrapperSubProps';
import { TextIconProps } from './TextIconProps';
/*
const extractTextProps = (props: IconWrapperProps): TextProps => {
  const {
    children,
    colorTheme,
    componentsTheme,
    // tslint:disable-next-line:no-shadowed-variable
    getSubProps,
    noContainer,
    paletteTheme,
    size,
    ...textProps
  } = props;

  return textProps;
};
*/
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
    // ...extractTextProps(props),
    // color: '#ff0000',
  };

  const styledIcon = children
    ? cloneElement({ element: children, props: iconProps })
    : undefined;

  console.log('SimpleIconWrapper() - props: ', props);
  /*
  console.log(
    'SimpleIconWrapper() - extractTextProps(props): ',
    extractTextProps(props),
  );
  */
  console.log('SimpleIconWrapper() - children: ', children);
  /*
  console.log(
    'SimpleIconWrapper() - children.props.style: ',
    StyleSheet.flatten(children.props.style),
  );
  */
  console.log('SimpleIconWrapper() - userSubProps: ', userSubProps);
  if (userSubProps.icon) {
    console.log(
      'SimpleIconWrapper() - userSubProps.icon.style: ',
      StyleSheet.flatten(userSubProps.icon.style),
    );
  }
  console.log('SimpleIconWrapper() - iconProps: ', iconProps);
  console.log(
    'SimpleIconWrapper() - iconProps.style: ',
    StyleSheet.flatten(iconProps.style),
  );
  console.log('SimpleIconWrapper() - styledIcon: ', styledIcon);
  /*
  if (styledIcon) {
    console.log(
      'SimpleIconWrapper() - styledIcon.props.style: ',
      StyleSheet.flatten(styledIcon.props.style),
    );
  }
  */

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
  const { Container } = iconTheme.subComponents;

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
