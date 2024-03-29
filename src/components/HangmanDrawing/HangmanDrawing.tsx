import React from "react";
import useStyles from "./HangmanDrawing.styles";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  const classes = useStyles();
  const HEAD = <div className={classes.head} />;
  const BODY = <div className={classes.body} />;
  const RIGHT_ARM = <div className={classes.rightArm} />;
  const LEFT_ARM = <div className={classes.leftArm} />;
  const RIGHT_LEG = <div className={classes.rightLeg} />;
  const LEFT_LEG = <div className={classes.leftLeg} />;
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
  return (
    <div className={classes.container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={classes.hangmanColumnTopHalf} />
      <div className={classes.hangmanColumnTop} />
      <div className={classes.hangmanColumn} />
      <div className={classes.hangmanColumnBottom} />
    </div>
  );
};

export default HangmanDrawing;
