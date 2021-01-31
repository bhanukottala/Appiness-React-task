import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
const Login = lazy(() => import("../components/login/Login"));
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));

const Routes = () => {
  return (
    <Suspense
      fallback={
        <div style={styles.loader}>
          <div style={styles.loaderContainer}>
            <LinearProgress color="primary" />
          </div>
        </div>
      }
    >
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;

const styles = {
  loader: {
    width: "100%",
    backgroundColor: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loaderContainer: {
    width: 100,
    height: 20,
  },
};
