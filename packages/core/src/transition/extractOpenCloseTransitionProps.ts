/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OpenCloseTransitionProps } from './OpenCloseTransitionProps';

export const extractOpenCloseTransitionProps = <ComponentProps>(
  props: OpenCloseTransitionProps<ComponentProps>,
): OpenCloseTransitionProps<ComponentProps> => {
  const {
    componentDidClose,
    componentDidOpen,
    componentWillClose,
    componentWillOpen,
    isClosing,
    isOpen,
    isOpenCloseTransitionAnimated,
    isOpening,
    shouldCallOpenCloseCallbacks,
  } = props;

  return {
    ...((componentDidClose && { componentDidClose }) || {}),
    ...((componentDidOpen && { componentDidOpen }) || {}),
    ...((componentWillClose && { componentWillClose }) || {}),
    ...((componentWillOpen && { componentWillOpen }) || {}),
    ...((isClosing && { isClosing }) || {}),
    ...((isOpen && { isOpen }) || {}),
    ...((isOpenCloseTransitionAnimated && { isOpenCloseTransitionAnimated }) ||
      {}),
    ...((isOpening && { isOpening }) || {}),
    ...((shouldCallOpenCloseCallbacks && { shouldCallOpenCloseCallbacks }) ||
      {}),
  };
};
