import React from "react";
import PropTypes from "prop-types";

const getRandomColor = () => {
  const colors =[
    "#8dd3c7",
    "#ffffb3",
    "#bebada",
    "#fb8072",
    "#80b1d3",
    "#fdb462",
    "#b3de69",
    "#fccde5",
    "#d9d9d9",
    "#bc80bd",
    "#ccebc5",
    "#ffed6f",
  ]
  const randomColor = Math.floor(Math.random() * 12);
  console.log(randomColor)
  return colors[randomColor];
}

const style = () => {
  return {
    fontWeight: 900,
    textShadow: "2px 2px darkblue",
    color: getRandomColor(),
  }
}

const Message = ({message, author}) => (
  <p>
    <strong style={style()}>{author}:</strong> {message}
  </p>
);

Message.PropTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Message;
