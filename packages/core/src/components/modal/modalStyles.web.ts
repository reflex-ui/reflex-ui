/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const modalStyles = () => {
  const styleString = `
  #reflex-ui-modal-root {
    z-index: 999;
  }

  #reflex-ui-modal-root > div {
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(styleString));
  document.head.appendChild(style);
};
