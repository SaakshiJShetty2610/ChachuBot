/// hooks/ChatbotActionProvider.js
class ChatbotActionProvider {
  constructor(
    createChatBotMessageFunc,
    setStateFunc,
    setChatbotMessageFunc,
    messageParser,
    config
  ) {
    this.createChatBotMessageFunc = createChatBotMessageFunc;
    this.setStateFunc = setStateFunc;
    this.setChatbotMessageFunc = setChatbotMessageFunc;
    this.messageParser = messageParser;
    this.config = config;
  }

  handleBotResponse(userMessage, callback) {
    try {
      // Parse the user's message
      const parsedMessage = this.messageParser(userMessage);

      // Determine the bot's response based on the parsed message
      let botMessageText = "";
      if (parsedMessage.toLowerCase().includes("hello")) {
        botMessageText = "Hi from Chachubot! How can I help you today?";
      } else if (parsedMessage.toLowerCase().includes("hi")) {
        botMessageText =
          "Hello there! This is Chachubot. How can I assist you?";
      } else if (parsedMessage.toLowerCase().includes("no")) {
        botMessageText =
          "Alright! Feel free to reach out whenever you need assistance. Have a great day!";
      } else if (parsedMessage.toLowerCase().includes("help")) {
        botMessageText = "I'm here to help. What do you need assistance with?";
      } else if (parsedMessage.toLowerCase().includes("bye")) {
        botMessageText = "Goodbye! Have a great day!";
      } else {
        botMessageText = "How can I assist you further?";
      }

      // Create the bot's message
      const botMessage = this.createChatBotMessageFunc(botMessageText);

      // Invoke the callback with the bot's message
      callback(botMessage);
    } catch (error) {
      console.error("Error handling bot response:", error);
    }
  }
}

export default ChatbotActionProvider;
