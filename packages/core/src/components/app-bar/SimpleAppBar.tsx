/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View } from 'react-native';

import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { AppBarProps } from './AppBarProps';

export const renderCenterArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 2) {
    return undefined;
  }

  const Container = (theme.centerArea && theme.centerArea.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.centerArea);

  if (Container === View) {
    return <Container {...viewProps}>{children[1]}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children[1]}
    </Container>
  );
};

export const renderLeadingArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children) return children;

  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container = (theme.leadingArea && theme.leadingArea.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.leadingArea);

  if (Container === View) {
    return <Container {...viewProps}>{leadingChildren}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 3) {
    return undefined;
  }

  const Container =
    (theme.trailingArea && theme.trailingArea.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.trailingArea);

  if (Container === View) {
    return <Container {...viewProps}>{children[2]}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children[2]}
    </Container>
  );
};

export const SimpleAppBar = reflexComponent<AppBarProps>({
  name: 'SimpleAppBar',
})((props: AppBarProps) => {
  validateNoStyleProps(props);
  const newProps = propsPipe<AppBarProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  if (Array.isArray(newProps.children) && newProps.children.length > 3) {
    throw new Error(
      [
        'Rfx: SimpleAppBar.children cannot take more than 3 top-level nodes. ',
        'You probably forgot to wrap some components into e.g. a <Row>.',
      ].join(''),
    );
  }

  const Container = (theme.container && theme.container.component) || View;
  const viewProps = {
    ...getPropsAndStyleFromTheme(newProps, theme.container),
    onLayout: newProps.onLayout,
  };

  if (Container === View) {
    return (
      <Container {...viewProps}>
        {renderLeadingArea(newProps)}
        {renderCenterArea(newProps)}
        {renderTrailingArea(newProps)}
      </Container>
    );
  }

  return (
    <Container complexComponentProps={newProps} {...viewProps}>
      {renderLeadingArea(newProps)}
      {renderCenterArea(newProps)}
      {renderTrailingArea(newProps)}
    </Container>
  );
});
