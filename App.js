import {
  StatusBar
} from 'expo-status-bar';

import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  PlayScreen
} from './src/playScreen';

export default function App() {

  const [play, setPlay] = React.useState(false);

  return (
    <View style={styles.container}>

      { play

        ? <PlayScreen setPlay={setPlay} />

        : <React.Fragment>

            <Text
              style={[
                styles.text
              ]}
            >
              Rock Paper Scissors
            </Text>

            <Text
              style={[
                styles.text,
                styles.emojis
              ]}
            >
              ✊🏾 ✋🏾 ✌🏾
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setPlay(true)}
            >
              <Text
                style={styles.buttonText}
              >
                Play
              </Text>
            </TouchableOpacity>

            <StatusBar style="auto" />

          </React.Fragment>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15,
    fontSize: 30
  },
  emojis: {
    fontSize: 50
  },
  button: {
    height: 40,
    width: 200,
    marginTop: 20,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#296bbf'
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF'
  }
});
