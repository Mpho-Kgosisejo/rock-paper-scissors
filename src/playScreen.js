
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const rockImagePath = require('./signs/rock.png');
const paperImagePath = require('./signs/paper.png');
const scissorsImagePath = require('./signs/scissors.png');

export const PlayScreen = ({
  setPlay
}) => {

  const timeout = 3;
  const colors = [ '#1dd1a1', '#ff6b6b', '#54a0ff', '#feca57' ];
  const images = [rockImagePath, paperImagePath, scissorsImagePath];

  const [counter, setCounter] = React.useState(timeout);

  const randomImage = () => {

    const randomNum = Math.floor( Math.random() * images.length);

    return images[randomNum];
  };

  React.useEffect(() => {

    if (counter <= 0) {
      return;
    }

    let timer = setTimeout(() => {

      setCounter(prev => prev - 1);
    }, 500);

    return () => {

      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <View style={[
      styles.container, {
        backgroundColor: colors[counter]
      }
    ]}>

      { (counter <= 0)

        ? (
            <View style={styles.content}>

              <Image
                style={styles.image}
                source={randomImage()}
              />

              <View>

                <TouchableOpacity
                  onPress={() => setCounter(timeout)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>
                    Play again!
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setPlay(false)}
                  style={[
                    styles.button,
                    styles.buttonInverted,
                  ]}
                >
                  <Text style={[
                    styles.buttonText,
                    styles.buttonInvertedText,
                  ]}>
                    I give up
                  </Text>
                </TouchableOpacity>

              </View>

            </View>
          )

        : <Text style={styles.text}>
            { counter }
          </Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginVertical: 100,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 200,
    fontWeight: '100'
  },
  button: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 3,
    marginVertical: 10,
    alignItems: 'center',
    borderColor: '#296bbf',
    justifyContent: 'center',
    backgroundColor: '#296bbf'
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF'
  },
  buttonInverted: {
    backgroundColor: 'transparent'
  },
  buttonInvertedText: {
    color: '#296bbf'
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    resizeMode: 'contain'
  }
});