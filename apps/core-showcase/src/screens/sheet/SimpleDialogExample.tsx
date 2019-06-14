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
  Headline6,
  ModalSheet,
  ModalSheetPropsOptional,
  ModalSheetVariant,
  Row,
  Size,
  usePalette,
} from '@reflex-ui/core';
import React, { useCallback, useState } from 'react';

import { AccountList } from '../../ui/common/AccountList';

interface DialogProps extends ModalSheetPropsOptional {
  readonly onItemPress?: () => void;
}

const Dialog: React.FC<DialogProps> = (props): JSX.Element => {
  return (
    <ModalSheet variant={ModalSheetVariant.Dialog} {...props}>
      <Headline6 paddingHorizontal={Size.XL} paddingVertical={Size.L}>
        Set backup account
      </Headline6>
      <AccountList onItemPress={props.onItemPress} />
    </ModalSheet>
  );
};

export const SimpleDialogExample: React.FC<{}> = (): JSX.Element => {
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
          Simple Dialog
        </Button>
      </Row>
      <Dialog
        isOpen={isShowingDialog}
        onBackdropPress={closeDialog}
        onItemPress={closeDialog}
      />
    </Column>
  );
};
