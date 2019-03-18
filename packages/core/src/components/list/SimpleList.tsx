/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';

import { extractPropsFromTheme } from '../extractPropsFromTheme';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultView } from '../view';
import { ListProps } from './ListProps';

export const SimpleList = reflexComponent<ListProps>({
  name: 'SimpleList',
})((props: ListProps) => {
  let children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

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
