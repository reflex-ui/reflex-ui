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
  JustifyContent,
  ModalSheet,
  ModalSheetPropsOptional,
  ModalSheetVariant,
  Paragraph1,
  Row,
  Size,
  usePalette,
} from '@reflex-ui/core';
import React, { useCallback, useState } from 'react';

const Dialog: React.FC<ModalSheetPropsOptional> = (props): JSX.Element => {
  const { palette } = usePalette();
  return (
    <ModalSheet variant={ModalSheetVariant.Dialog} {...props}>
      <Headline6 paddingHorizontal={Size.XL} paddingVertical={Size.L}>
        Use location service?
      </Headline6>
      <Paragraph1 paddingBottom={Size.L} paddingHorizontal={Size.XL}>
        Let us help apps determine location. This means sending anonymous
        location data to us, even when no apps are running.
      </Paragraph1>
      <Row
        justifyContent={JustifyContent.FlexEnd}
        paddingHorizontal={Size.M}
        paletteColor={palette.primary}
      >
        <Button invertColor onPress={props.onBackdropPress}>
          Disagree
        </Button>
        <Button invertColor marginEnd={0} onPress={props.onBackdropPress}>
          Agree
        </Button>
      </Row>
    </ModalSheet>
  );
};

export const AlertLongMsgExample: React.FC<{}> = (): JSX.Element => {
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
          Alert Dialog (long msg)
        </Button>
      </Row>
      <Dialog isOpen={isShowingDialog} onBackdropPress={closeDialog} />
    </Column>
  );
};
