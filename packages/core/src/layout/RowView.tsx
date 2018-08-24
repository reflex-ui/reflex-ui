import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

export interface ISimpleViewProps {
  container: ViewStyle;
}

export interface IContainerStyle {
  container: ViewStyle;
}

const styles: IContainerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const RowView: React.SFC<ViewProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default RowView;
