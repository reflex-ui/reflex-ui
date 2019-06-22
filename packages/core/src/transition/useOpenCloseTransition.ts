/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, useEffect, useState } from 'react';

import { OpenCloseTransitionProps } from './OpenCloseTransitionProps';

export const useOpenCloseTransition = <
  Props extends OpenCloseTransitionProps<Props>
>(
  props: Props,
): OpenCloseTransitionProps<Props> => {
  const hasAnyCallback = useCallback(
    () =>
      props.componentDidClose !== undefined ||
      props.componentDidOpen !== undefined ||
      props.componentWillClose !== undefined ||
      props.componentWillOpen !== undefined,
    [
      props.componentDidClose,
      props.componentDidOpen,
      props.componentWillClose,
      props.componentWillOpen,
    ],
  );

  /*
   * We define a local shouldCallOpenCloseCallbacks variable that uses
   * props.shouldCallOpenCloseCallbacks if that's !== undefined,
   * or automatically set it to true if isOpenCloseTransitionAnimated === true
   * (we need to call callbacks if it's animated, in order to set
   * isOpening and isClosing), or we set it to the return of hasAnyCallback(),
   * which is true if end users are expecting callbacks to be called.
   */
  const [
    shouldCallOpenCloseCallbacks,
    setShouldCallOpenCloseCallbacks,
  ] = useState(() => {
    if (props.shouldCallOpenCloseCallbacks !== undefined) {
      return props.shouldCallOpenCloseCallbacks;
    }
    return props.isOpenCloseTransitionAnimated
      ? props.isOpenCloseTransitionAnimated
      : hasAnyCallback();
  });
  if (
    props.shouldCallOpenCloseCallbacks !== undefined &&
    props.shouldCallOpenCloseCallbacks !== shouldCallOpenCloseCallbacks
  ) {
    setShouldCallOpenCloseCallbacks(props.shouldCallOpenCloseCallbacks);
  }
  /**/

  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  const componentWillOpen = useCallback(
    (componentProps: Props) => {
      setIsOpening(true);
      if (props.componentWillOpen !== undefined) {
        props.componentWillOpen(componentProps);
      }
    },
    [props],
  );

  const componentDidOpen = useCallback(
    (componentProps: Props) => {
      console.log(
        'useOpenCloseTransition().componentDidOpen() - has props.componentDidOpen: ',
        props.componentDidOpen !== undefined,
      );
      setIsOpening(false);
      if (props.componentDidOpen !== undefined) {
        props.componentDidOpen(componentProps);
      }
    },
    [props],
  );

  const componentWillClose = useCallback(
    (componentProps: Props) => {
      setIsClosing(true);
      if (props.componentWillClose !== undefined) {
        props.componentWillClose(componentProps);
      }
    },
    [props],
  );

  const componentDidClose = useCallback(
    (componentProps: Props) => {
      console.log(
        'useOpenCloseTransition().componentDidClose() - has props.componentDidClose: ',
        props.componentDidClose !== undefined,
      );
      setIsClosing(false);
      if (props.componentDidClose !== undefined) {
        props.componentDidClose(componentProps);
      }
    },
    [props],
  );

  /*
   * We want componentWillOpen() and componentDidOpen() to be called
   * after componentDidMount() (and its hooks version),
   * so we put that logic into useEffect().
   */
  useEffect(() => {
    if (
      shouldCallOpenCloseCallbacks &&
      props.isOpen &&
      !props.isOpening &&
      !prevIsOpen
    ) {
      componentWillOpen(props);
      if (!props.isOpenCloseTransitionAnimated) componentDidOpen(props);
    } else if (
      shouldCallOpenCloseCallbacks &&
      !props.isOpen &&
      !props.isClosing &&
      prevIsOpen
    ) {
      componentWillClose(props);
      if (!props.isOpenCloseTransitionAnimated) componentDidClose(props);
    }

    if (props.isOpen !== undefined && props.isOpen !== prevIsOpen) {
      setPrevIsOpen(props.isOpen);
    }
  }, [
    shouldCallOpenCloseCallbacks,
    prevIsOpen,
    props.isClosing,
    props.isOpen,
    props.isOpening,
  ]);
  /**/

  return {
    componentDidClose,
    componentDidOpen,
    componentWillClose,
    componentWillOpen,
    isClosing,
    isOpen: prevIsOpen,
    isOpening,
    shouldCallOpenCloseCallbacks,
  };
};
