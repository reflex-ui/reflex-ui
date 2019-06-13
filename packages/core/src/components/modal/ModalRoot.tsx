/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { Modal } from 'react-native';

import { processComponent } from '../processComponent';
import { ModalProps } from './ModalProps';

let ModalRoot: React.ComponentType<ModalProps> = forwardRef(
  (props: ModalProps, ref: Ref<Modal>) => {
    return (
      <Modal ref={ref} transparent>
        {props.children}
      </Modal>
    );
  },
);

ModalRoot = processComponent<ModalProps>(ModalRoot, {
  name: 'ModalRoot',
});

export { ModalRoot };
