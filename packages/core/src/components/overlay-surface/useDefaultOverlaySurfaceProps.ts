/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { OverlaySurfacePropsBase } from './OverlaySurfaceProps';

export const useDefaultOverlaySurfaceProps = <
  Props extends OverlaySurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const contained = props.contained === true ? true : false;

  return {
    ...useDefaultSurfaceProps(props, theme),
    contained,
  };
};
