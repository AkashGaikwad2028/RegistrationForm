import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Ui/Color';
// import { Colors } from 'react-native/Libraries/NewAppScreen'
Colors;

export default function LinkTag({children, onPress}) {
  return (
    <View style={styles.spanContainer}>
      <Text style={styles.span} onPress={onPress}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  span: {
    color: Colors.primary500,
    // fontWeight:"bold",
    fontSize: 18,
  },
  spanContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
