/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  cloneElement,
  forwardRef,
  ReactElement,
  Ref,
  useCallback,
  useMemo,
} from 'react';
import { View } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import {
  extractOpenCloseTransitionProps,
  filterOutOpenCloseTransitionProps,
  useOpenCloseTransition,
} from '../../transition';
// import { cloneElement } from '../../utils/cloneElement';
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

const useCloneChildren = (props: ModalProps) => {
  const { children } = props;

  /*
  let childrenComponentDidClose: (childrenProps: unknown) => void | undefined;
  let childrenComponentDidOpen: (childrenProps: unknown) => void | undefined;

  if (
    children !== undefined ||
    children !== null ||
    typeof children !== 'string' ||
    typeof children !== 'number' ||
    typeof children !== 'boolean' ||
    typeof children !== 'function'
  ) {
    childrenComponentDidClose = (children as ReactElement).props
      .componentDidClose;
    childrenComponentDidOpen = (children as ReactElement).props
      .componentDidOpen;
  }


  const componentDidOpen = useCallback(
    (childrenProps: unknown) => {
      console.log(
        'Modal().useCloneChildren().componentDidOpen() - childrenProps: ',
        childrenProps,
      );
      if (childrenComponentDidOpen !== undefined) {
        childrenComponentDidOpen(childrenProps);
      }
      if (props.componentDidOpen !== undefined) {
        props.componentDidOpen(props);
      }
    },
    // It's initialized above, and if we try to assign to undefined we get:
    // Unnecessary initialization to 'undefined'.
    // tslint(no-unnecessary-initializer)
    // @ts-ignore Variable 'childrenComponentDidOpen' is used
    // before being assigned.ts(2454)
    [props, childrenComponentDidOpen],
  );

  const componentDidClose = useCallback(
    (childrenProps: unknown) => {
      console.log(
        'Modal().useCloneChildren().componentDidClose() - childrenProps: ',
        childrenProps,
      );
      if (childrenComponentDidClose !== undefined) {
        childrenComponentDidClose(childrenProps);
      }
      if (props.componentDidClose !== undefined) {
        props.componentDidClose(props);
      }
    },
    // It's initialized above, and if we try to assign to undefined we get:
    // Unnecessary initialization to 'undefined'.
    // tslint(no-unnecessary-initializer)
    // @ts-ignore Variable 'childrenComponentDidClose' is used
    // before being assigned.ts(2454)
    [props, childrenComponentDidClose],
  );
  */

  const componentDidOpen = useCallback(() => {
    console.log('Modal().useCloneChildren().componentDidOpen()');
    if (props.componentDidOpen !== undefined) {
      props.componentDidOpen(props);
    }
  }, [props]);

  const componentDidClose = useCallback(() => {
    console.log('Modal().useCloneChildren().componentDidClose()');
    if (props.componentDidClose !== undefined) {
      props.componentDidClose(props);
    }
  }, [props]);

  const openCloseProps = {
    ...extractOpenCloseTransitionProps(props),
    componentDidClose,
    componentDidOpen,
  };

  return useMemo(() => {
    if (
      children === undefined ||
      children === null ||
      typeof children === 'string' ||
      typeof children === 'number' ||
      typeof children === 'boolean' ||
      typeof children === 'function'
    ) {
      return children;
    }

    return cloneElement(children as ReactElement, {
      ...openCloseProps,
    });
  }, [props]);
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

    /*
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

    newProps = { ...newProps, componentDidClose, componentDidOpen };
    */

    const children = useCloneChildren(newProps);
    if (!newProps.isOpen && !newProps.isClosing) return null;

    return (
      <ModalRoot {...newProps}>
        {newProps.displayBackdrop && (
          <Backdrop
            isOpen={newProps.isOpen}
            isOpenCloseTransitionAnimated={
              newProps.isOpenCloseTransitionAnimated
            }
            // componentDidClose={componentDidClose}
            // componentDidOpen={componentDidOpen}
            onPress={newProps.onBackdropPress}
            ref={ref}
            {...extractBackdropPropsFromModalProps(newProps)}
          />
        )}
        {children}
      </ModalRoot>
    );
  },
);

Modal = processComponent<ModalPropsOptional>(Modal, {
  name: 'Modal',
});

export { Modal };
