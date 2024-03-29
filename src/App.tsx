import React, { useCallback, useEffect, useState } from "react";

import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import Keyboard from "./components/Keyboard/Keyboard";
import words from "./data/wordList.json";
import useStyles from "./Apps.styles";
import HangmanWord from "./components/HangmanWord/HangmanWord";

function App() {
  const classes = useStyles();
  const [wordToGuess, setWordToGuess] = useState(() => {
    // return "test";
    return words[Math.floor(Math.random() * words.length)];
  });
  // console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  });
  return (
    <div className={classes.App}>
      <div className={classes.results}>
        {isWinner && "Winner! - press enter to try again"}
        {isLoser && "Nice Try - press enter to try again"}
        {!isWinner && !isLoser && `${incorrectLetters.length}/6`}
      </div>
      <div className={classes.hangman}>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </div>
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div className={classes.keyboard}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
