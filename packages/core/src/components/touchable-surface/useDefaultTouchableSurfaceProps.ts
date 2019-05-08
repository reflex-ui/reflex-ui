/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';

import { useInteractionState } from '../../interaction/InteractionState';
import { InteractionType } from '../../interaction/InteractionType';
import { useDefaultSurfaceProps } from '../surface/useDefaultSurfaceProps';
import { TouchableSurfacePropsBase } from './TouchableSurfaceProps';

export const useDefaultTouchableSurfaceProps = <
  Props extends TouchableSurfacePropsBase<Props, Theme>,
  Theme
>(
  props: Partial<Props>,
  theme: Theme,
): Props => {
  const [defaultInteractionState] = useState({ type: InteractionType.Enabled });
  const interactionStateCtxValue = useInteractionState();
  let interactionState =
    interactionStateCtxValue && interactionStateCtxValue.interactionState;

  if (props.interactionState) {
    interactionState = props.interactionState;
  } else if (
    interactionState === undefined ||
    interactionState.type !== InteractionType.Disabled
  ) {
    interactionState = defaultInteractionState;
  }

  const activated =
    props.activated === true ||
    interactionState.type === InteractionType.Activated;
  const disabled =
    props.disabled === true ||
    interactionState.type === InteractionType.Disabled;

  const touchableSurfaceProps: TouchableSurfacePropsBase<Props, Theme> = {
    ...useDefaultSurfaceProps(props, theme),
    activated,
    disabled,
    interactionState,
  };

  /*
   * This error is really strange. If the above do not throws any errors,
   * then the below shouldn't either. Besides, the lack of information on
   * why it's not assignable makes really hard to understand why that'd wrong.
   */
  // @ts-ignore Type 'TouchableSurfacePropsBase<Props, Theme>'
  // is not assignable to type 'Props'.ts(2322)
  return touchableSurfaceProps;
};
