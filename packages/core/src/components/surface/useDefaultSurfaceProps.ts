/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';

import { useInteractionState } from '../../interaction/InteractionState';
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
  const [defaultInteractionState] = useState({ type: InteractionType.Enabled });
  const interactionStateCtxValue = useInteractionState();
  const interactionState =
    props.interactionState ||
    (interactionStateCtxValue && interactionStateCtxValue.interactionState) ||
    defaultInteractionState;

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
