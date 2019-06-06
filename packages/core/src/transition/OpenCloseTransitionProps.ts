/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface OpenCloseTransitionProps<ComponentProps> {
  readonly isOpenCloseTransitionAnimated?: boolean;
  readonly isClosing?: boolean;
  readonly isOpen?: boolean;
  readonly shouldCallOpenCloseCallbacks?: boolean;
  readonly isOpening?: boolean;
  readonly componentDidClose?: (props: ComponentProps) => void;
  readonly componentDidOpen?: (props: ComponentProps) => void;
  readonly componentWillClose?: (props: ComponentProps) => void;
  readonly componentWillOpen?: (props: ComponentProps) => void;
}
