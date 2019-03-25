/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View } from 'react-native';

import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';
import { useDefaultAppBarProps } from './useDefaultAppBarProps';

export const renderAppBarCenterArea = (props: AppBarProps): React.ReactNode => {
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

export const renderAppBarLeadingArea = (
  props: AppBarProps,
): React.ReactNode => {
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

export const renderAppBarTrailingArea = (
  props: AppBarProps,
): React.ReactNode => {
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

export const renderAppBarContainer = (props: AppBarProps): JSX.Element => {
  const { theme } = props;
  const Container = (theme.container && theme.container.component) || View;
  const viewProps = {
    ...getPropsAndStyleFromTheme(props, theme.container),
    onLayout: props.onLayout,
  };

  if (Container === View) {
    return (
      <Container {...viewProps}>
        {renderAppBarLeadingArea(props)}
        {renderAppBarCenterArea(props)}
        {renderAppBarTrailingArea(props)}
      </Container>
    );
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {renderAppBarLeadingArea(props)}
      {renderAppBarCenterArea(props)}
      {renderAppBarTrailingArea(props)}
    </Container>
  );
};

let AppBar: React.ComponentType<AppBarPropsOptional> = (
  props: AppBarPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultAppBarProps(props);
  newProps = propsPipe<AppBarProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(newProps);
  newProps = {
    ...newProps,
    ...useOnLayout(newProps),
  };

  if (Array.isArray(newProps.children) && newProps.children.length > 3) {
    throw new Error(
      [
        'Rfx: SimpleAppBar.children cannot take more than 3 top-level nodes. ',
        'You probably forgot to wrap some components into e.g. a <Row>.',
      ].join(''),
    );
  }

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderAppBarContainer(newProps)}
    </ColorThemeContext.Provider>
  );
};

AppBar = processComponent<AppBarPropsOptional>(AppBar, {
  name: 'AppBar',
});

export { AppBar };
