import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = ({ actionProvider, config, messageParser }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      text: inputValue,
      type: "user",
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Use the action provider to handle the response
    actionProvider.handleBotResponse(inputValue, (botMessage) => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    });
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">ChachuboT🤖</h1>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.type === "user" ? "user-message" : "bot-message"}
          >
            {message.type === "user" ? "👤" : "🤖"}
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="message-input"
          placeholder={config.inputPlaceholder}
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
