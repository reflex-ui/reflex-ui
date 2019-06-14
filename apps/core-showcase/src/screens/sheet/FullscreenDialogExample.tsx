/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  Button,
  ButtonVariant,
  Column,
  ModalSheet,
  ModalSheetPropsOptional,
  ModalSheetVariant,
  Paragraph1,
  Row,
  Screen,
  Size,
  usePalette,
} from '@reflex-ui/core';
import { CloseIcon } from '@reflex-ui/icons-md';
import React, { useCallback, useState } from 'react';

interface DialogProps extends ModalSheetPropsOptional {
  readonly onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = (props): JSX.Element => {
  return (
    <ModalSheet variant={ModalSheetVariant.FullscreenDialog} {...props}>
      <Screen>
        <AppBar>
          <Button onPress={props.onClose} variant={ButtonVariant.Icon}>
            <CloseIcon />
          </Button>
          <AppBarTitle numberOfLines={1}>New event</AppBarTitle>
          <Button onPress={props.onClose}>Save</Button>
        </AppBar>
        <Column margin={Size.L}>
          <Paragraph1>
            We should add some basic form here to better illustrate a common use
            case for ModalSheetVariant.FullscreenDialog.
          </Paragraph1>
        </Column>
      </Screen>
    </ModalSheet>
  );
};

export const FullscreenDialogExample: React.FC<{}> = (): JSX.Element => {
  const { palette } = usePalette();

  const [isShowingDialog, setIsShowingDialog] = useState(false);

  const openDialog = useCallback(() => {
    setIsShowingDialog(true);
  }, [isShowingDialog]);

  const closeDialog = useCallback(() => {
    setIsShowingDialog(false);
  }, [isShowingDialog]);

  return (
    <Column>
      <Row paletteColor={palette.primary}>
        <Button
          invertColor
          onPress={openDialog}
          variant={ButtonVariant.Outlined}
        >
          Fullscreen Dialog
        </Button>
      </Row>
      <Dialog isOpen={isShowingDialog} onClose={closeDialog} />
    </Column>
  );
};
