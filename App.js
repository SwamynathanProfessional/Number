import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOver from './screen/GameOver';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const startGamehandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numofRounds => {
    setGuessRounds(numofRounds);
  };
  let content = <StartGameScreen onStartGame={startGamehandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOver />;
  }
  return (
    <View style={styles.scree}>
      <Header title={'Guess a Number now'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  scree: {
    flex: 1,
  },
});
