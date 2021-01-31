import { combineReducers } from "redux";
import DashboardReducer from './dashboardReducer';


export default combineReducers({
  users: DashboardReducer,
});
