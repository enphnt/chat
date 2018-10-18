import React from "react";
import PropTypes from "prop-types";

const Message = ({message, author}) => (
  <p>
    <i>{author}:</i> {message}
  </p>
);


Message.PropTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Message;
