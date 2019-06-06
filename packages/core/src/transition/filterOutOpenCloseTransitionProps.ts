/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OpenCloseTransitionProps } from './OpenCloseTransitionProps';

export const filterOutOpenCloseTransitionProps = <
  Props extends OpenCloseTransitionProps<Props>
>(
  props: Props,
): Pick<Props, Exclude<keyof Props, keyof OpenCloseTransitionProps<Props>>> => {
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
    ...otherProps
  } = props;

  return otherProps;
};
