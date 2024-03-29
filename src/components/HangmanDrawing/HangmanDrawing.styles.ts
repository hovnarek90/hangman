import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => {
    const breakpoints = {
      sm: "@media (max-width: 1700px)",
    };
    return {
      container: {
        position: "relative",
        background: "pink",
      },

      head: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
      },
      body: {
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px",
      },
      rightArm: {
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      },
      leftArm: {
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      },
      leftLeg: {
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      },
      rightLeg: {
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      },

      hangmanColumnTopHalf: {
        height: "50px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: 0,
        right: 0,
      },
      hangmanColumnTop: {
        height: "10px",
        width: "150px",
        background: "black",
        marginLeft: "120px",
      },

      hangmanColumn: {
        height: "380px",
        width: "10px",
        background: "black",
        marginLeft: "120px",
      },
      hangmanColumnBottom: {
        height: "10px",
        width: "250px",
        background: "black",
      },
    };
  },
  { name: "HangmanDrawing" }
);

export default useStyles;
