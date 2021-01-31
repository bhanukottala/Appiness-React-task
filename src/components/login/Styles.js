import { white, titleLightGrey} from "../../utility/colors";
import {primaryFont} from '../../utility/fonts';

export const Styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "42em",
    margin: "0 auto",
    padding: '2em 1.6em',
  },

  button: {
    marginTop: 40,
  },

  title: {
    fontFamily: primaryFont,
    fontSize: '3.2em',
    color: titleLightGrey,
    fontWeight: '500',
    marginBottom: 5,
  },

  subTitle: {
    fontFamily: primaryFont,
    fontSize: '1.6em',
    color: titleLightGrey,
    fontWeight: '400',
    marginBottom: 20,
  }
});
