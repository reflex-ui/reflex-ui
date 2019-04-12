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
// tslint:disable-next-line:max-line-length
import { useDefaultSurfacePropsBase } from '../surface/useDefaultSurfacePropsBase';
import {
  TouchableSurfacePropsBase,
  TouchableSurfacePropsBaseOptional,
} from './TouchableSurfaceProps';

export const useDefaultTouchableSurfacePropsBase = (
  props: TouchableSurfacePropsBaseOptional,
): TouchableSurfacePropsBase => {
  const interactionStateFromContext = useContext(InteractionStateContext);

  let interactionState;
  if (props.interactionState) {
    interactionState = props.interactionState;
  } else if (
    interactionStateFromContext &&
    interactionStateFromContext.type === InteractionType.Disabled
  ) {
    interactionState = interactionStateFromContext;
  } else {
    interactionState = {
      type: InteractionType.Enabled,
    };
  }

  const activated =
    props.activated === true ||
    interactionState.type === InteractionType.Activated;
  const disabled =
    props.disabled === true ||
    interactionState.type === InteractionType.Disabled;

  return {
    ...useDefaultSurfacePropsBase(props),
    activated,
    disabled,
    interactionState,
  };
};
