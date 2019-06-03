/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Original code from:
 * https://github.com/siddharthkp/use-timeout
 */

/*
 * This implementation is based on this post:
 * https://www.jayfreestone.com/writing/react-portals-with-hooks/
 * Thanks for sharing your great work!
 */

import { Ref, RefObject, useEffect, useRef } from 'react';

const createElement = (id: string): HTMLElement => {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  return element;
};

export const useDOMElement = (
  nodeId: string,
  containerNodeId: string,
  ref?: RefObject<HTMLElement>,
): HTMLElement => {
  let tempNodeElementRef: Ref<HTMLElement> = useRef(null);
  if (ref !== undefined && ref !== null) tempNodeElementRef = ref;
  const nodeElementRef: Ref<HTMLElement> = tempNodeElementRef;

  useEffect(() => {
    /*
    const retrieveContainerElement = () => {
      let element = document.querySelector(`#${containerId}`);
      if (element === undefined || element === null) {
        element = createElement(containerId);
        document.body.appendChild(element);
      }

      return element;
    };

    const containerElement = retrieveContainerElement();
    */

    const containerElement = document.querySelector(`#${containerNodeId}`);
    if (containerElement === undefined || containerElement === null) {
      throw new Error(
        [
          `ReflexUI#useDOMElement(): Cannot find element with containerNodeId:`,
          `${containerNodeId}`,
        ].join(' '),
      );
    }

    if (
      nodeElementRef.current !== undefined &&
      nodeElementRef.current !== null
    ) {
      containerElement.appendChild(nodeElementRef.current);
    }

    return () => {
      if (
        nodeElementRef.current === undefined ||
        nodeElementRef.current === null
      ) {
        return;
      }

      nodeElementRef.current.remove();
      if (containerElement.childNodes.length === -1) {
        containerElement.remove();
      }
    };
  }, []);

  const getRootElement = () => {
    if (!nodeElementRef.current) {
      // @ts-ignore Cannot assign to 'current' because it is a
      // read-only property.ts(2540)
      // That's weird since it's supposed to mutate.
      nodeElementRef.current = createElement(nodeId);
    }
    return nodeElementRef.current;
  };

  return getRootElement();
};
