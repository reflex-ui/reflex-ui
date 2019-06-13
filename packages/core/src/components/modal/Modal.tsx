/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref, useCallback } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import {
  filterOutOpenCloseTransitionProps,
  useOpenCloseTransition,
} from '../../transition';
import { Backdrop } from '../backdrop/Backdrop';
import { BackdropPropsOptional } from '../backdrop/BackdropProps';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { ModalProps, ModalPropsOptional } from './ModalProps';
import { ModalRoot } from './ModalRoot';
import { ModalTheme } from './ModalTheme';
import { useDefaultModalProps } from './useDefaultModalProps';

export const extractBackdropPropsFromModalProps = (
  props: ModalProps,
): BackdropPropsOptional => {
  const {
    children,
    getPatchTheme,
    onBackdropPress,
    theme,
    ...otherProps
  } = filterOutOpenCloseTransitionProps(props);

  let backdropProps = otherProps as BackdropPropsOptional;
  backdropProps = {
    ...backdropProps,
    onPress: onBackdropPress,
  };

  const backdropTheme = props.theme.backdrop && props.theme.backdrop(props);

  if (backdropTheme !== undefined) {
    backdropProps = {
      ...backdropProps,
      getPatchTheme: () => backdropTheme,
    };
  }

  return backdropProps;
};

const useTheme = (theme?: ModalTheme): ModalTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.modal === undefined || componentsTheme.modal === null) {
    throw new MissingComponentThemeError('<Modal>');
  }

  return componentsTheme.modal;
};

let Modal: React.ComponentType<ModalPropsOptional> = forwardRef(
  (props: ModalPropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultModalProps(props, useTheme(props.theme));
    newProps = { ...newProps, ...useOnLayout(newProps) };
    /*
     * We put useOpenCloseTransition() after processComponentProps()
     * because we want props provided via ComponentTheme.getProps()
     * to be passed to useOpenCloseTransition(), specially
     * isOpenCloseTransitionAnimated, which gives themes full control
     * over how components should behave.
     */
    newProps = processComponentProps(newProps);
    newProps = { ...newProps, ...useOpenCloseTransition(newProps) };
    /**/

    const componentDidOpen = useCallback(() => {
      if (newProps.componentDidOpen !== undefined) {
        newProps.componentDidOpen(newProps);
      }
    }, [newProps]);

    const componentDidClose = useCallback(() => {
      if (newProps.componentDidClose !== undefined) {
        newProps.componentDidClose(newProps);
      }
    }, [newProps]);

    if (!newProps.isOpen && !newProps.isClosing) return null;

    return (
      <ModalRoot {...newProps}>
        {newProps.displayBackdrop && (
          <Backdrop
            isOpen={newProps.isOpen}
            isOpenCloseTransitionAnimated={
              newProps.isOpenCloseTransitionAnimated
            }
            componentDidClose={componentDidClose}
            componentDidOpen={componentDidOpen}
            onPress={newProps.onBackdropPress}
            ref={ref}
            {...extractBackdropPropsFromModalProps(newProps)}
          />
        )}
        {newProps.children}
      </ModalRoot>
    );
  },
);

Modal = processComponent<ModalPropsOptional>(Modal, {
  name: 'Modal',
});

export { Modal };
