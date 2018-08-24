import * as React from 'react';
import { Text, View } from 'react-native';
import {
  LabelButton,
  LabelButtonVariant,
  RowView,
} from 'react-platform-material-design';

const Screen: React.SFC = (): JSX.Element => (
  <View>
    <Text>WelcomeSignedOutScreen 1234567</Text>
    <RowView>
      <LabelButton onPress={() => alert('onPress')}>Sign In</LabelButton>
      <LabelButton
        fullWidth
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
      <LabelButton
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.OUTLINED}
      >
        Sign In
      </LabelButton>
    </RowView>
    <RowView>
      <LabelButton
        fullWidth
        onPress={() => alert('onPress')}
        variant={LabelButtonVariant.CONTAINED}
      >
        Sign Out
      </LabelButton>
    </RowView>
  </View>
);

export default Screen;
