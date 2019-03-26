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
import { extractViewProps } from '../../utils/props';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
// tslint:disable-next-line:max-line-length
import { handleSimpleComponentThemeProps } from '../handleSimpleComponentThemeProps';
// tslint:disable-next-line:max-line-length
import { handleSimpleComponentThemeStyle } from '../handleSimpleComponentThemeStyle';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

export const renderRfxViewContainer = (props: RfxViewProps): JSX.Element => {
  const { children, theme } = props;
  const Component = theme.component || View;
  const viewProps = extractViewProps(props);

  if (Component === View) {
    return <Component {...viewProps}>{children}</Component>;
  }

  return (
    <Component complexComponentProps={props} {...viewProps}>
      {children}
    </Component>
  );
};

let RfxView: React.ComponentType<RfxViewPropsOptional> = (
  props: RfxViewPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultRfxViewProps(props);
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleSimpleComponentThemeProps(newProps);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handleSimpleComponentThemeStyle(newProps);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      {renderRfxViewContainer(newProps)}
    </ColorThemeContext.Provider>
  );
};

RfxView = processComponent<RfxViewPropsOptional>(RfxView, {
  name: 'View',
});

export { RfxView };
