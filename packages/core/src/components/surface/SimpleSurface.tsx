/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { extractPropsFromTheme } from '../extractPropsFromTheme';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultView } from '../view';
import { SurfaceProps } from './SurfaceProps';

export const SimpleSurface = reflexComponent<SurfaceProps>({
  name: 'SimpleSurface',
})((props: SurfaceProps) => {
  const children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  let newProps = props;
  let mergedTheme = props.theme;

  if (
    props.getPatchTheme ||
    props.theme.getProps ||
    typeof props.children === 'function'
  ) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      children,
      theme: mergedTheme,
    };
  }

  const Container =
    (mergedTheme.container && mergedTheme.container.component) || DefaultView;

  const containerProps = extractPropsFromTheme(newProps, mergedTheme.container);

  return (
    <Container
      complexComponentProps={newProps}
      onLayout={newProps.onLayout}
      {...containerProps}
    >
      {children}
    </Container>
  );
});
