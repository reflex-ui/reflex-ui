/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Column,
  List,
  ListItem,
  Paragraph1,
  Size,
  SurfacePropsOptional,
  Touchable,
} from '@reflex-ui/core';
import {
  AdjustIcon,
  BrushIcon,
  ColorizeIcon,
  CommentIcon,
  CropIcon,
  DeleteIcon,
  EditIcon,
  FlipIcon,
  LinkIcon,
  RotateLeftIcon,
  RotateRightIcon,
  SaveIcon,
  ShareIcon,
} from '@reflex-ui/icons-md';
import React, { Fragment } from 'react';

export interface FileMenuProps extends SurfacePropsOptional {
  readonly displayExtraItems?: boolean;
  readonly onClosePress?: () => void;
}

const FileMenu: React.SFC<FileMenuProps> = ({
  displayExtraItems,
  onClosePress,
  ...surfaceProps
}: FileMenuProps): JSX.Element => (
  <List {...surfaceProps}>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <ShareIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Share</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <LinkIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Get link</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <EditIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Edit name</Paragraph1>
      </ListItem>
    </Touchable>
    <Touchable onPress={onClosePress}>
      <ListItem size={Size.M}>
        <Column marginHorizontal={Size.S}>
          <DeleteIcon />
        </Column>
        <Paragraph1 marginHorizontal={Size.S}>Delete collection</Paragraph1>
      </ListItem>
    </Touchable>
    {displayExtraItems && (
      <Fragment>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <CommentIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Comment</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <SaveIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Download</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <CropIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Crop</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <FlipIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Flip</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <RotateLeftIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Rotate left</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <RotateRightIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Rotate right</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <AdjustIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Adjust</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <BrushIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Brush</Paragraph1>
          </ListItem>
        </Touchable>
        <Touchable onPress={onClosePress}>
          <ListItem size={Size.M}>
            <Column marginHorizontal={Size.S}>
              <ColorizeIcon />
            </Column>
            <Paragraph1 marginHorizontal={Size.S}>Colorize</Paragraph1>
          </ListItem>
        </Touchable>
      </Fragment>
    )}
  </List>
);

FileMenu.displayName = 'FileMenu';

export { FileMenu };
