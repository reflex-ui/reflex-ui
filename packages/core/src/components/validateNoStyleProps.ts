/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:no-any
export const validateNoStyleProps = (props: any) => {
  if (props.style) {
    throw new Error(
      [
        "Rfx: It's not possible to pass style prop directly.",
        'You have to pass it as part of theme object.',
      ].join(' '),
    );
  }
};
