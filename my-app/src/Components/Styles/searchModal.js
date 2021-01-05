import { makeStyles } from "@material-ui/core/styles";
import { dark_color, light_color, blue } from "../Styles";

export const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: (props) => ({
      backgroundColor:
        props.theme === "dark" ? `${dark_color}` : `${light_color}`,
      outline: "none",
      height: "170px",
      width: "420px",
      position: "relative",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: props.theme === "dark" ? `${light_color}` : "black",
    }),
    location: {
      position: "absolute",
      top: "10px",
      left: "5px",
    },
    input_location: (props) => ({
      width: "100%",
      height: "50px",
      outline: "none",
      border: "none",
      paddingLeft: "30px",
      background: "transparent",
      borderBottom: `1px solid ${
        props.theme === "dark" ? `${light_color}` : `${dark_color}`
      }`,
    }),
    checkbox_search_container: {
      flex: 1,
      padding: "15px 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    submit_btn: {
      height: "40px",
      margin: "0 15px",
      borderRadius: "5px",
      outline: "none",
      border: "none",
      backgroundColor: `${blue}`,
      color: `${light_color}`,
      "&:hover": {
        backgroundColor: `transparent`,
        border: `1px solid ${blue}`,
        color: `${blue}`,
      },
    },
  };
});
