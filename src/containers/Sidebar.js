import { connect } from "react-redux";
import SidebarPresentationalComponent from "../components/Sidebar";

export const Sidebar = connect(
  state => ({
    users: state.users
  }),
  {}
)(SidebarPresentationalComponent);
