import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>the game screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default StartGameScreen;
