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
import { ModalProps } from './ModalProps';
import { useModalElement } from './useModalElement';

let ModalRoot: React.ComponentType<ModalProps> = forwardRef(
  (props: ModalProps, ref: Ref<View>) => {
    const [modalContainerId] = useState(() => `my-modal-${Math.random()}`);
    // Needs to investigate how to fix this, adding support to Refs
    // in a cross-platform way.
    // @ts-ignore Conversion of type 'Ref<View>' to type
    // 'RefObject<HTMLElement>' may be a mistake because neither type
    // sufficiently overlaps with the other. If this was intentional,
    // convert the expression to 'unknown' first.
    const htmlElementRef = ref as RefObject<HTMLElement>;

    let modalContainerStyle;
    if (
      props.theme.container &&
      props.theme.container.webInlineStyle !== undefined
    ) {
      modalContainerStyle = props.theme.container.webInlineStyle;
    }

    let rootContainerStyle;
    if (props.theme.root && props.theme.root.webInlineStyle !== undefined) {
      rootContainerStyle = props.theme.root.webInlineStyle;
    }

    return createPortal(
      props.children,
      useModalElement({
        modalContainerId,
        modalContainerStyle,
        ref: htmlElementRef,
        rootContainerStyle,
      }),
    );
  },
);

ModalRoot = processComponent(ModalRoot, {
  name: 'ModalRoot',
});

export { ModalRoot };
