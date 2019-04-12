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
import { useDefaultRfxViewPropsBase } from '../view/useDefaultRfxViewPropsBase';
import { SurfacePropsBase, SurfacePropsBaseOptional } from './SurfaceProps';

export const useDefaultSurfacePropsBase = (
  props: SurfacePropsBaseOptional,
): SurfacePropsBase => {
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
    ...useDefaultRfxViewPropsBase(props),
    activated,
    contained,
    disabled,
    interactionState,
  };
};
