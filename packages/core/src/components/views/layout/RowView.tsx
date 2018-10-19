import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

export interface SimpleViewProps {
  container: ViewStyle;
}

export interface ContainerStyle {
  container: ViewStyle;
}

const styles: ContainerStyle = StyleSheet.create<ContainerStyle>({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const RowView: React.SFC<ViewProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);
