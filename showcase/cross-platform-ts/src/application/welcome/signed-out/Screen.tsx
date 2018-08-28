import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  LabelButton,
  LabelButtonVariant,
  RowView,
  Size,
} from 'react-platform-material-design';

const Screen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <RowView>
      <LabelButton onPress={() => null} size={Size.XSMALL}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XSMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XSMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.SMALL}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.SMALL}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.SMALL}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null}>Sign In</LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.LARGE}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.LARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.LARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton onPress={() => null} size={Size.XLARGE}>
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XLARGE}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign In
      </LabelButton>
      <LabelButton
        onPress={() => alert('onPress')}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED_RAISED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <View>
      <LabelButton
        fullWidth
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign Out
      </LabelButton>
    </View>
    <RowView>
      <LabelButton
        fullWidth
        onPress={() => alert('onPress')}
        size={Size.XLARGE}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign Out
      </LabelButton>
    </RowView>
  </ScrollView>
);

export default Screen;
