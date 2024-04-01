import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => {
    return {
      container: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        fontSize: "6rem",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "monospace",
      },
      letterBorder: {
        width: "100px",
        marginLeft: "15px",
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
      description: {
        fontSize: "1rem",
      },
    };
  },
  { name: "HangmanWord" }
);

export default useStyles;
