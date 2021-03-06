import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props) => {
  let input;
  const { dispatch } = props;

  return (
    <section id="new-message">
    <p>Welcome to the chat!</p>
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(input.value, "Me")
            input.value = ""
          }
        }}
        type="text"
        ref={(node) => {
					input = node
        }}
      />
    </section>
  )
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default AddMessage;
