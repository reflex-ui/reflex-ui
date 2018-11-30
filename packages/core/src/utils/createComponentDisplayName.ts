/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const REFLEX_COMPONENT_PREFIX: string = 'Rfx';

export const createComponentDisplayName = (
  // tslint:disable-next-line:no-any we don't care which type is this here.
  target: string | React.ComponentType<any>,
): string => {
  if (typeof target === 'string') return `${REFLEX_COMPONENT_PREFIX}${target}`;
  if (target.displayName) return target.displayName;
  if (target.name) return `${REFLEX_COMPONENT_PREFIX}${target.name}`;
  return `${REFLEX_COMPONENT_PREFIX}UnnamedComponent`;
};
