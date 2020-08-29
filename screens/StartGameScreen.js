import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confired, setConfired] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = (inputText) => {
    console.log(inputText);
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfired(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(selectedNumber);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfired(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  let confirmedOutput = '';

  if (confired) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      //   onPress={() => {
      //     keyboard.dismiss();
      //   }}
      onPress={() => {}}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {/* {confirmedOutput} commenting this as it is throwing an error */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '300px',
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
