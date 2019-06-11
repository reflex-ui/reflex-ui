/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref } from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../../errors';
import { useOnLayout } from '../../../responsiveness/useOnLayout';
import { useOpenCloseTransition } from '../../../transition';
import { useComponentsTheme } from '../../ComponentsTheme';
import { Modal } from '../../modal/Modal';
import { ModalPropsOptional } from '../../modal/ModalProps';
import { processComponent } from '../../processComponent';
import { processComponentProps } from '../../processComponentProps';
import { Surface } from '../../surface/Surface';
import { SurfacePropsOptional } from '../../surface/SurfaceProps';
import {
  ModalSideSheetProps,
  ModalSideSheetPropsOptional,
} from './ModalSideSheetProps';
import { ModalSideSheetTheme } from './ModalSideSheetTheme';
import { ModalSideSheetVariant } from './ModalSideSheetVariant';
import { useDefaultModalSideSheetProps } from './useDefaultModalSideSheetProps';

export const extractModalPropsFromModalSideSheetProps = (
  props: ModalSideSheetProps,
): ModalPropsOptional => {
  const { displayBackdrop, isOpen, onBackdropPress } = props;

  let modalProps = {
    displayBackdrop,
    isOpen,
    onBackdropPress,
  } as ModalPropsOptional;
  const modalTheme = props.theme.modal && props.theme.modal(props);

  if (modalTheme !== undefined) {
    modalProps = {
      ...modalProps,
      getPatchTheme: () => modalTheme,
    };
  }

  return modalProps;
};

export const extractSurfacePropsFromModalSideSheetProps = (
  props: ModalSideSheetProps,
): SurfacePropsOptional => {
  const {
    children,
    displayBackdrop,
    getPatchTheme,
    onBackdropPress,
    theme,
    variant,
    ...otherProps
  } = props;

  let surfaceProps = otherProps as SurfacePropsOptional;
  const surfaceTheme = props.theme.surface && props.theme.surface(props);

  if (surfaceTheme !== undefined) {
    surfaceProps = {
      ...surfaceProps,
      getPatchTheme: () => surfaceTheme,
    };
  }

  return surfaceProps;
};

const useTheme = (
  theme?: ModalSideSheetTheme,
  variant: ModalSideSheetVariant = ModalSideSheetVariant.Start,
): ModalSideSheetTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.modalSideSheet === undefined ||
    componentsTheme.modalSideSheet === null
  ) {
    throw new MissingComponentThemeError('<ModalSideSheet>');
  }

  return componentsTheme.modalSideSheet[variant];
};

let ModalSideSheet: React.ComponentType<
  ModalSideSheetPropsOptional
> = forwardRef((props: ModalSideSheetPropsOptional, ref: Ref<View>) => {
  let newProps = useDefaultModalSideSheetProps(
    props,
    useTheme(props.theme, props.variant),
  );
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

  return (
    <Modal {...extractModalPropsFromModalSideSheetProps(newProps)}>
      <Surface
        {...extractSurfacePropsFromModalSideSheetProps(newProps)}
        ref={ref}
      >
        {newProps.children}
      </Surface>
    </Modal>
  );
});

ModalSideSheet = processComponent<ModalSideSheetPropsOptional>(ModalSideSheet, {
  name: 'ModalSideSheet',
});

export { ModalSideSheet };
