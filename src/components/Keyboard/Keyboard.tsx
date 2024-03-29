import React from "react";
import useStyles from "./Keyboard.styles";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};
const Keyboard: React.FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}) => {
  const classes = useStyles();
  {
  }
  return (
    <div className={classes.container}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`${classes.button} ${isActive ? classes.active : ""} ${
              isInactive ? classes.inactive : ""
            } `}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
