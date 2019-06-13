/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { Modal, ModalProps } from 'react-native';

import { processComponent } from '../processComponent';

let ModalRoot: React.ComponentType<ModalProps> = forwardRef(
  // @ts-ignore
  (props: ModalProps, ref: Ref<Modal>) => {
    return <Modal ref={ref} transparent />;
  },
);

ModalRoot = processComponent<ModalProps>(ModalRoot, {
  name: 'ModalRoot',
});

export { ModalRoot };
