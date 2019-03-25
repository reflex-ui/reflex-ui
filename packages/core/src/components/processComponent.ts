/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createComponentDisplayName, getComponentDisplayName } from '../utils/';

export interface ReflexComponentConfig {
  name?: string;
  // tslint:disable-next-line:no-any we don't care which type is this here.
  wrapped?: React.ComponentType<any>;
}

export const processComponent = <Props extends {}>(
  Component: React.ComponentType<Props>,
  config?: ReflexComponentConfig,
): React.ComponentType<Props> => {
  const target = config && config.name ? config.name : Component;
  let name: string = createComponentDisplayName(target);

  if (config && config.wrapped) {
    name = `${name}(${getComponentDisplayName(config.wrapped)})`;
  }

  Component.displayName = name;

  return Component;
};
