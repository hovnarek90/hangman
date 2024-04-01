import React from "react";
import useStyles from "./HangmanDrawing.styles";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  const classes = useStyles();

  const BODY_PARTS = [
    <div className={classes.head} />,
    <div className={classes.body} />,
    <div className={classes.rightArm} />,
    <div className={classes.leftArm} />,
    <div className={classes.rightLeg} />,
    <div className={classes.leftLeg} />
  ];

  return (
    <div className={classes.container}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((bodyPart, index) => (
        <div key={index} className={classes.hangmanComponent}>
          {bodyPart}
        </div>
      ))}
      <div className={classes.hangmanColumnTopHalf} />
      <div className={classes.hangmanColumnTop} />
      <div className={classes.hangmanColumn} />
      <div className={classes.hangmanColumnBottom} />
    </div>
  );
};

export default HangmanDrawing;
