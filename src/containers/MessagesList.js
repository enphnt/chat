import { connect } from "react-redux";
import MessagesListPresentationalComponent from "../components/MessagesList";

export const AddMessage = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesListPresentationalComponent);
