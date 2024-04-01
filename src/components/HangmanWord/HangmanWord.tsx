import React from "react";
import useStyles from "./HangmanWord.styles";
import wordListWithDescription from "../../data/wordListWithDescription.json";
// import words from "../../data/wordList.json";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

interface WordList {
  [key: string]: string;
}

const words: WordList = wordListWithDescription;

const HangmanWord: React.FC<HangmanWordProps> = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.description}>{words[wordToGuess]}</div>
      <div>
        {wordToGuess.split("").map((letter, i) => (
          <span key={i} className={classes.letterBorder}>
            <span
              className={`${
                !guessedLetters.includes(letter) && reveal
                  ? classes.letterRed
                  : classes.letterBlack
              } ${
                guessedLetters.includes(letter) || reveal
                  ? classes.visible
                  : classes.hidden
              }`}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HangmanWord;
