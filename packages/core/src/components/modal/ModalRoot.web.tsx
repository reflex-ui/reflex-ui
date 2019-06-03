/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref, RefObject, useState } from 'react';
import { createPortal } from 'react-dom';
import { View } from 'react-native';

import { processComponent } from '../processComponent';
import { modalStyles } from './modalStyles.web';
import { useModalElement } from './useModalElement';

modalStyles();

let ModalRoot: React.ComponentType<{}> = forwardRef(
  <Props extends { children?: React.ReactNode }>(
    props: Props,
    ref: Ref<View>,
  ) => {
    const [modalId] = useState(() => `my-modal-${Math.random()}`);
    const htmlElementRef = ref as RefObject<HTMLElement>;

    return createPortal(
      props.children,
      useModalElement({
        modalId,
        ref: htmlElementRef,
      }),
    );
  },
);

ModalRoot = processComponent(ModalRoot, {
  name: 'ModalRoot',
});

export { ModalRoot };
