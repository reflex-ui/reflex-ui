/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Caption,
  ComponentThemeGetter,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  PaletteThemeContext,
  Paragraph1,
  Paragraph2,
  RfxTextProps,
  RfxTextTheme,
  Size,
  Subtitle1,
  Subtitle2,
  Surface,
} from '@reflex-ui/core';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

const getCaptionPatchTheme: ComponentThemeGetter<
  RfxTextProps,
  RfxTextTheme
> = () => ({
  getStyle: () => ({
    color: 'red',
    fontSize: 20,
  }),
});

const RfxTextScreen: React.SFC = (): JSX.Element => {
  const paletteTheme = useContext(PaletteThemeContext);

  return (
    <ScrollView>
      <Surface margin={Size.M} padding={Size.M}>
        <Headline1>Hello Headline 1</Headline1>
        <Headline2>Hello Headline 2</Headline2>
        <Headline3>Hello Headline 3</Headline3>
        <Headline4 marginVertical={Size.XXS}>Hello Headline 4</Headline4>
        <Headline5 marginVertical={Size.XXS}>Hello Headline 5</Headline5>
        <Headline6 marginVertical={Size.XS}>Hello Headline 6</Headline6>
        <Subtitle1 marginVertical={Size.XS}>Hello Subtitle 1</Subtitle1>
        <Subtitle2 marginVertical={Size.XS}>Hello Subtitle 2</Subtitle2>
        <Paragraph1 marginVertical={Size.XS}>
          Hello Paragraph1. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph1>
        <Paragraph2 marginVertical={Size.XS}>
          Hello Paragraph2 lorem ipsum dolor sit amet.
        </Paragraph2>
        <Caption marginVertical={Size.XS} selectable>
          Caption lorem ipsum.
        </Caption>
        <Overline marginVertical={Size.XS}>Hello Overline</Overline>
        <Caption
          getPatchTheme={getCaptionPatchTheme}
          marginVertical={Size.XS}
          selectable
        >
          This is a {'<Caption>'} with custom styles via getPatchTheme() prop.
        </Caption>
        <Paragraph1 marginVertical={Size.XS}>
          You can nest your text components. For example, this is a{' '}
          {'<Paragraph1>'},
          <Paragraph2>
            {' '}
            this is a {'<Paragraph2>'} inside that {'<Paragraph1>'},
          </Paragraph2>
          <Caption>
            {' '}
            and this is a {'<Caption>'} also inside that same {'<Paragraph1>'}.
          </Caption>
        </Paragraph1>
      </Surface>
      <Surface
        colorArrangement={paletteTheme.primary.normal}
        margin={Size.M}
        padding={Size.M}
      >
        <Paragraph1 marginVertical={Size.XS}>
          This is a {'<Paragraph1>'} inside a{' '}
          {'<Surface colorArrangement={paletteTheme.primary.normal}>'}.
        </Paragraph1>
      </Surface>
      <Surface
        colorArrangement={paletteTheme.primary.dark}
        margin={Size.M}
        padding={Size.M}
      >
        <Paragraph1 marginVertical={Size.XS}>
          This is a {'<Paragraph1>'} inside a{' '}
          {'<Surface colorArrangement={paletteTheme.primary.dark}>'}.
        </Paragraph1>
      </Surface>
    </ScrollView>
  );
};

RfxTextScreen.displayName = 'RfxTextScreen';

export { RfxTextScreen };
