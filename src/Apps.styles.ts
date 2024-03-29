import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => {
    const breakpoints = {
      sm: "@media (max-width: 1700px)",
    };
    return {
      App: {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      },
      hangman: {},
      results: {
        width: "100%",
        height: "20px",
        fontSize: "2rem",
        textAlign: "center",
      },
      keyboard: {
        alignSelf: "stretch",
      },
    };
  },
  { name: "Keyboard" }
);

export default useStyles;
