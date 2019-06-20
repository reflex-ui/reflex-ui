/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonVariant,
  Column,
  CoplanarSheet,
  CoplanarSheetPropsOptional,
  Headline6,
  Paragraph1,
  Size,
  SpaceBetween,
} from '@reflex-ui/core';
import { CloseIcon } from '@reflex-ui/icons-md';
import React from 'react';
import { ScrollView } from 'react-native';

const loremCopy = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt ut labore et dolore magna',
  'aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit',
  'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
  'occaecat cupidatat non proident, sunt in culpa qui officia',
  'deserunt mollit anim id est laborum.',
].join(' ');

export interface MyTopBottomSheetProps extends CoplanarSheetPropsOptional {
  readonly isShowingScrollingContent: boolean;
  readonly onClose: () => void;
}

export const MyTopBottomSheet = ({
  isShowingScrollingContent,
  onClose,
  ...coplanarSheetProps
}: MyTopBottomSheetProps) => {
  const sheetContent = (
    <SpaceBetween>
      {isShowingScrollingContent && <Headline6>Lorem ipsum dolor</Headline6>}
      {!isShowingScrollingContent && (
        <Paragraph1>Lorem ipsum dolor sit amet.</Paragraph1>
      )}
      <Button onPress={onClose} variant={ButtonVariant.Icon}>
        <CloseIcon />
      </Button>
    </SpaceBetween>
  );
  const scrollingSheetContent = (
    <ScrollView>
      {sheetContent}
      <Column>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <Paragraph1 key={item} marginVertical={Size.S}>
            {loremCopy}
          </Paragraph1>
        ))}
      </Column>
    </ScrollView>
  );

  return (
    <CoplanarSheet {...coplanarSheetProps}>
      {isShowingScrollingContent && scrollingSheetContent}
      {!isShowingScrollingContent && sheetContent}
    </CoplanarSheet>
  );
};
