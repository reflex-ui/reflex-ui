/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { cloneElement } from '../../utils';
import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { useDefaultRfxSvgProps } from './useDefaultRfxSvgProps';

export const extractSvgPropsFromRfxSvgProps = (
  props: RfxSvgProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    getPatchTheme,
    interactionState,
    invertColor,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
    paletteTheme,
    size,
    skipContainer,
    theme,
    ...svgProps
  } = props;

  return svgProps;
};

export const handleRfxSvgChildren = (props: RfxSvgProps): RfxSvgProps => {
  if (props.children === undefined || props.children === null) return props;
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;

  if (typeof children !== 'object') {
    throw new Error('Rfx: SVG children must be a valid React element.');
  }

  const svgPropsFromTheme = getPropsAndStyleFromTheme(props, props.theme.svg);
  const svgProps = extractSvgPropsFromRfxSvgProps(props);
  const mergedProps = merge({}, svgPropsFromTheme, svgProps);

  const styledSvg = children
    ? cloneElement({ element: children, props: mergedProps })
    : undefined;

  return {
    ...props,
    children: styledSvg,
  };
};

export const renderRfxSvgView = (props: RfxSvgProps) => {
  const { children, skipContainer, theme } = props;

  if (skipContainer) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const Container = (theme.container && theme.container.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.container);

  if (Container === View) {
    return <Container {...viewProps}>{children}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children}
    </Container>
  );
};

let RfxSvg: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultRfxSvgProps(props);
  if (props.children === undefined || props.children === null) return null;
  newProps = propsPipe<RfxSvgProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
    handleRfxSvgChildren,
  ])(newProps);

  return renderRfxSvgView(newProps);
};

RfxSvg = processComponent<RfxSvgPropsOptional>(RfxSvg, {
  name: 'Svg',
});

export { RfxSvg };
