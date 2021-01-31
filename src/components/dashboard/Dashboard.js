import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchUsers } from "../../actions";

const Dashboard = props => {
  const { classes } = props;

  useEffect(() => {
    const fetchUsersData = () => {
      props.fetchUsers();
    };
    fetchUsersData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>age(years)</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.length !== 0 &&
              props.users.map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNo}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(withStyles(Styles)(Dashboard));
