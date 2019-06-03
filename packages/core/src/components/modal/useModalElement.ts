/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RefObject } from 'react';

import { useDOMElement } from '../../utils/useDOMElement';

export interface UseModalElementInput {
  readonly containerId?: string;
  readonly modalId: string;
  readonly modalRootId?: string;
  readonly ref?: RefObject<HTMLElement>;
}

export const useModalElement = ({
  containerId = 'root',
  modalId,
  modalRootId = 'reflex-ui-modal-root',
  ref,
}: UseModalElementInput): HTMLElement => {
  // ensure #reflex-ui-modal-root element
  useDOMElement(modalRootId, containerId);
  // create modal element
  return useDOMElement(modalId, modalRootId, ref);
};
