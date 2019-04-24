/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

// tslint:disable-next-line:max-line-length
import { InteractionStateContext } from '../../interaction/InteractionStateContext';
import { InteractionType } from '../../interaction/InteractionType';
import { useDefaultRfxViewProps } from '../view/useDefaultRfxViewProps';
import { SurfacePropsBase } from './SurfaceProps';

export const useDefaultSurfaceProps = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const interactionStateFromContext = useContext(InteractionStateContext);

  const interactionState = props.interactionState ||
    interactionStateFromContext || {
      type: InteractionType.Enabled,
    };

  const activated =
    props.activated === true ||
    interactionState.type === InteractionType.Activated;
  const disabled =
    props.disabled === true ||
    interactionState.type === InteractionType.Disabled;

  const contained = props.contained === false ? false : true;

  return {
    ...useDefaultRfxViewProps(props, theme),
    activated,
    contained,
    disabled,
    interactionState,
  };
};
