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
import { ModalSheetProps, ModalSheetPropsOptional } from './ModalSheetProps';
import { ModalSheetTheme } from './ModalSheetTheme';
import { ModalSheetVariant } from './ModalSheetVariant';
import { useDefaultModalSheetProps } from './useDefaultModalSheetProps';

export const extractModalPropsFromModalSheetProps = (
  props: ModalSheetProps,
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

export const extractSurfacePropsFromModalSheetProps = (
  props: ModalSheetProps,
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
  theme?: ModalSheetTheme,
  variant: ModalSheetVariant = ModalSheetVariant.Start,
): ModalSheetTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.modalSheet === undefined ||
    componentsTheme.modalSheet === null
  ) {
    throw new MissingComponentThemeError('<ModalSheet>');
  }

  return componentsTheme.modalSheet[variant];
};

let ModalSheet: React.ComponentType<ModalSheetPropsOptional> = forwardRef(
  (props: ModalSheetPropsOptional, ref: Ref<View>) => {
    let newProps = useDefaultModalSheetProps(
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
      <Modal {...extractModalPropsFromModalSheetProps(newProps)}>
        <Surface
          {...extractSurfacePropsFromModalSheetProps(newProps)}
          ref={ref}
        >
          {newProps.children}
        </Surface>
      </Modal>
    );
  },
);

ModalSheet = processComponent<ModalSheetPropsOptional>(ModalSheet, {
  name: 'ModalSheet',
});

export { ModalSheet };
