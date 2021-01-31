import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Styles } from "./Styles";
import { loginCredential } from "../../utility/data";

const Login = props => {
  const { classes } = props;
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleValidation = () => {
    const { userName, password } = user;
    if (
      userName !== loginCredential.userName ||
      password !== loginCredential.password
    ) {
      alert("Invalid Username or password");
      return false;
    }
    return true;
  };

  const handleChange = name => event => {
    setUser({ ...user, [name]: event.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    const res = handleValidation();
    if (res) props.history.push("/dashboard");
    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.container}>
        <h1 className={classes.title}>Hello there!</h1>
        <p className={classes.subTitle}>Sign in to your account</p>
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
          <div>
            <TextField
              id="outlined-name"
              label="Username"
              value={user.userName}
              type="email"
              fullWidth
              onChange={handleChange("userName")}
              margin="normal"
              variant="outlined"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-password"
              label="Password"
              value={user.password}
              type="password"
              fullWidth
              onChange={handleChange("password")}
              margin="normal"
              variant="outlined"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={user.userName === "" || user.password === ""}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default withStyles(Styles)(Login);
