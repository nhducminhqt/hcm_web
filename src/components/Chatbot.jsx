import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI về Chiến thắng Điện Biên Phủ. Bạn có câu hỏi gì về lịch sử này không?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Thay YOUR_GEMINI_API_KEY bằng API key thực của bạn
      const API_KEY = "YOUR_GEMINI_API_KEY";
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

      // Context về Điện Biên Phủ
      const context = `Bạn là chuyên gia về lịch sử Chiến thắng Điện Biên Phủ (1954). 
      Hãy trả lời ngắn gọn, chính xác về chiến dịch này. 
      Nếu không biết, hãy nói rõ và gợi ý người dùng xem thêm ở các trang Theory hoặc Practice.
      
      Câu hỏi: ${userMessage}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: context,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: botResponse,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Xin lỗi, tôi gặp lỗi khi xử lý câu hỏi. Bạn có thể thử lại hoặc xem thông tin chi tiết ở các trang Lý thuyết và Thực tiễn VN.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Chiến dịch Điện Biên Phủ diễn ra trong bao lâu?",
    "Ai là người chỉ huy chiến dịch?",
    "Tô Vĩnh Diện là ai?",
    "Ý nghĩa của chiến thắng là gì?",
  ];

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button
        className={`chat-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat với AI"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-content">
              <span className="chat-icon">🤖</span>
              <div>
                <h3>Trợ lý AI</h3>
                <p>Điện Biên Phủ 1954</p>
              </div>
            </div>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="suggested-questions">
              <p className="suggestions-title">💡 Câu hỏi gợi ý:</p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-button"
                  onClick={() => {
                    setInput(question);
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Hỏi về Điện Biên Phủ..."
              rows="1"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Gửi tin nhắn"
            >
              {isLoading ? "⏳" : "📤"}
            </button>
          </div>

          <div className="chat-footer">
            <small>Powered by Google Gemini AI</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
