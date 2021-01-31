import { users } from "../utility/data";
import { FETCH_USERS } from "../types";

export const fetchUsers = () => dispatch => {
  dispatch({
    type: FETCH_USERS,
    payload: users,
  });
};
