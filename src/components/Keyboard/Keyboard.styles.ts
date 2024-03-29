import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => {
    return {
      container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      },
      button: {
        width: "100%",
        border: "3px solid black",
        background: "none",
        aspectRatio: "1/1",
        fontSize: "2.5rem",
        textTransform: "uppercase",
        padding: "0.5rem",
        fontWeight: "bold",
        cursor: "pointer",
        color: "black",
        "&:hover:not(:disabled), &:focus:not(:disabled)": {
          backgroundColor: "hsl(200, 100%, 75%)",
        },
      },
      active: {
        backgroundColor: "hsl(200, 100%, 75%)",
        color: "white",
      },
      inactive: {
        opacity: "0.3",
      },
    };
  },
  { name: "Keyboard" }
);

export default useStyles;
