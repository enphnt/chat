import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import MessagesList from "./components/MessagesList";
import AddMessage from "./components/AddMessage";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Sidebar /> */}
        <section id="main">
          {/* <MessagesList id="messages-list"/> */}
          <AddMessage id="new-message"/>
        </section>
      </div>
    );
  }
}

export default App;
