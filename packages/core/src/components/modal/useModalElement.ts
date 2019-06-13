/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RefObject } from 'react';

import { useDOMElement } from '../../utils/useDOMElement';

export interface UseModalElementInput {
  readonly appContainerId?: string;
  readonly modalContainerId: string;
  readonly modalContainerStyle?: string;
  readonly modalRootId?: string;
  readonly ref?: RefObject<HTMLElement>;
  readonly rootContainerStyle?: string;
}

export const useModalElement = ({
  appContainerId = 'root',
  modalContainerId,
  modalContainerStyle,
  modalRootId = 'reflex-ui-modal-root',
  ref,
  rootContainerStyle,
}: UseModalElementInput): HTMLElement => {
  // ensure #reflex-ui-modal-root element
  const rootContainer = useDOMElement(modalRootId, appContainerId);
  if (rootContainerStyle) {
    rootContainer.setAttribute('style', rootContainerStyle);
  }
  // create modal element
  const modalContainer = useDOMElement(modalContainerId, modalRootId, ref);
  if (modalContainerStyle) {
    modalContainer.setAttribute('style', modalContainerStyle);
  }
  return modalContainer;
};
