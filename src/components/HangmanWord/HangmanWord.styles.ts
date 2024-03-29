import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => {
    return {
      container: {
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "monospace",
      },
      letterBorder: {
        borderBottom: ".5rem solid black",
      },
      letterRed: {
        color: "red",
      },
      letterBlack: {
        color: "black",
      },
      hidden: {
        visibility: "hidden",
      },
      visible: {},
    };
  },
  { name: "HangmanWord" }
);

export default useStyles;
