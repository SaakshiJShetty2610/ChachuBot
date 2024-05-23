// App.js
import React from "react";
import Chatbot from "./Chatbot";
import ChatbotActionProvider from "./hooks/ChatbotActionProvider";
import config from "./configs/config";
import messageParser from "./messageParser";

const createChatBotMessageFunc = (text) => ({ text, type: "bot" });
const setStateFunc = (newState) => console.log("Setting state:", newState);
const setChatbotMessageFunc = (message) => console.log("Setting chatbot message:", message);

function App() {
  const actionProvider = new ChatbotActionProvider(
    createChatBotMessageFunc,
    setStateFunc,
    setChatbotMessageFunc,
    messageParser,
    config
  );

  return (
    <div>
      <Chatbot 
        actionProvider={actionProvider} 
        config={config} 
        messageParser={messageParser} 
      />
    </div>
  );
}

export default App;
