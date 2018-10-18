import { connect } from "react-redux";
import MessagesListPresentationalComponent from "../components/MessagesList";

export const MessagesList = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesListPresentationalComponent);
