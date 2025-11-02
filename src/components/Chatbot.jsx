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

  const knowledgeBase = {
    "điện biên phủ là gì":
      "Điện Biên Phủ là chiến thắng lịch sử vĩ đại của quân và dân Việt Nam trong cuộc kháng chiến chống thực dân Pháp, diễn ra từ 13/3 đến 7/5/1954. Đây là chiến thắng 'lừng lẫy năm châu, chấn động địa cầu', đánh dấu sự sụp đổ của chủ nghĩa thực dân cũ trên thế giới.",
    "chiến thắng điện biên phủ":
      "Chiến thắng Điện Biên Phủ (7/5/1954) là chiến thắng lịch sử vĩ đại, đánh dấu sự kết thúc 9 năm kháng chiến chống Pháp. Đây là lần đầu tiên một dân tộc thuộc địa đánh bại một đế quốc thực dân, mở ra kỷ nguyên độc lập cho các dân tộc bị áp bức.",
    "chiến dịch điện biên phủ":
      "Chiến dịch Điện Biên Phủ là chiến dịch quân sự lớn nhất trong cuộc kháng chiến chống Pháp, diễn ra từ 13/3 đến 7/5/1954, kéo dài 56 ngày đêm. Chiến dịch kết thúc bằng chiến thắng hoàn toàn của quân ta.",
    "khi nào":
      "Chiến dịch Điện Biên Phủ diễn ra từ ngày 13/3/1954 đến 7/5/1954, kéo dài 56 ngày đêm.",
    "bao lâu": "Chiến dịch kéo dài 56 ngày đêm, từ 13/3 đến 7/5/1954.",
    "thời gian":
      "Chiến dịch Điện Biên Phủ diễn ra từ 13/3/1954 đến 7/5/1954 (56 ngày đêm).",
    56: "Đúng vậy! Chiến dịch Điện Biên Phủ kéo dài 56 ngày đêm chiến đấu anh dũng.",
    tướng:
      "Tướng Võ Nguyên Giáp là Tổng Tư lệnh chiến dịch Điện Biên Phủ. Phía Pháp do Đại tá De Castries chỉ huy.",
    "võ nguyên giáp":
      "Đại tướng Võ Nguyên Giáp (1911-2013) là vị tướng tài ba, người chỉ huy chiến dịch Điện Biên Phủ thành công vang dội.",
    "de castries":
      "Đại tá Christian De Castries là tư lệnh Pháp tại Điện Biên Phủ, đã bị bắt sống khi thất bại.",
    "quân pháp":
      "Trong chiến dịch, hơn 16,000 quân Pháp bị tiêu diệt, bắt sống và đầu hàng, bao gồm cả tư lệnh De Castries.",
    "ý nghĩa":
      "Chiến thắng Điện Biên Phủ có ý nghĩa lịch sử to lớn: đánh bại chủ nghĩa thực dân, giải phóng miền Bắc, cổ vũ phong trào giải phóng dân tộc trên toàn thế giới.",
    "hồ chí minh":
      "Chủ tịch Hồ Chí Minh là lãnh tụ vĩ đại của dân tộc, người lãnh đạo cuộc kháng chiến chống Pháp và chiến dịch Điện Biên Phủ.",
    "bác hồ":
      "Bác Hồ (Hồ Chí Minh) là người sáng lập Đảng Cộng sản Việt Nam và lãnh đạo cuộc kháng chiến chống Pháp.",
    "bài học":
      "Chiến thắng để lại nhiều bài học quý báu: sức mạnh đại đoàn kết dân tộc, vai trò lãnh đạo của Đảng, chiến tranh nhân dân là bất khả chiến bại.",
    "ngày nay":
      "Điện Biên Phủ ngày nay là tỉnh miền núi phía Tây Bắc, nơi lưu giữ nhiều di tích lịch sử và phát triển du lịch.",
    "thăm quan":
      "Bạn có thể tham quan nghĩa trang liệt sĩ, đồi A1, hầm tướng De Castries, và bảo tàng Điện Biên Phủ khi đến đây.",
    "địa điểm":
      "Điện Biên Phủ nằm ở phía Tây Bắc Việt Nam, là thành phố của tỉnh Điện Biên.",
    "chiến thuật":
      'Quân đội ta sử dụng chiến thuật "đánh chắc, tiến chắc", bao vây và tiến công từng cứ điểm, kết hợp với hỏa lực pháo binh mạnh.',
    "pháo binh":
      "Pháo binh Việt Nam đã làm nên kỳ tích, kéo pháo lên núi cao và bắn chính xác, áp đảo hoàn toàn pháo Pháp.",
    "đồi a1":
      "Đồi A1 (hay Him Lam) là cứ điểm quan trọng nhất của Pháp, được quân ta đánh chiếm trong trận quyết chiến cuối cùng.",
    "tô vĩnh diện":
      "Tô Vĩnh Diện là chiến sĩ cắm cờ trên đồi A1, biểu tượng của chiến thắng Điện Biên Phủ ngày 7/5/1954.",
    "xin chào":
      "Xin chào bạn! 👋 Tôi là chatbot trợ lý AI về Chiến thắng Điện Biên Phủ 1954. Tôi được tạo ra để giúp bạn tìm hiểu về sự kiện lịch sử vĩ đại này. Bạn có câu hỏi gì không?",
    chào: "Chào bạn! 👋 Tôi là chatbot trợ lý AI về Chiến thắng Điện Biên Phủ. Rất vui được hỗ trợ bạn tìm hiểu về lịch sử này!",
    "chào bạn":
      "Chào bạn! 👋 Tôi là chatbot trợ lý AI chuyên về Chiến thắng Điện Biên Phủ 1954. Hãy hỏi tôi bất cứ điều gì về chiến dịch này nhé!",
    hi: "Hi bạn! 👋 Tôi là chatbot trợ lý AI về Điện Biên Phủ. Sẵn sàng giải đáp thắc mắc của bạn!",
    "hi bạn":
      "Hi! 👋 Tôi là chatbot trợ lý AI chuyên về Chiến thắng Điện Biên Phủ. Bạn muốn tìm hiểu về điều gì?",
    hello:
      "Hello! 👋 I'm an AI chatbot assistant about the Dien Bien Phu Victory (1954). Tôi có thể giúp bạn tìm hiểu về chiến thắng lịch sử này!",
    "bạn là ai":
      "Tôi là chatbot trợ lý AI được tạo ra để giúp bạn tìm hiểu về Chiến thắng Điện Biên Phủ - sự kiện lịch sử vĩ đại ngày 7/5/1954. Tôi có thể trả lời các câu hỏi về thời gian, tướng lĩnh, ý nghĩa, bài học và nhiều thông tin khác về chiến dịch này!",
    "ai là bạn":
      "Tôi là chatbot trợ lý AI về Điện Biên Phủ! Tôi được thiết kế để cung cấp thông tin về chiến dịch lịch sử vĩ đại này (13/3 - 7/5/1954). Hãy hỏi tôi nhé!",
    "bạn tên gì":
      "Tôi là chatbot trợ lý AI về Chiến thắng Điện Biên Phủ. Tôi không có tên riêng nhưng nhiệm vụ của tôi là giúp bạn khám phá về sự kiện lịch sử vĩ đại này!",
    "cảm ơn": "Rất vui được giúp bạn! Nếu có thêm câu hỏi, đừng ngại hỏi nhé.",
    thank: "You're welcome! Hãy tiếp tục khám phá lịch sử Điện Biên Phủ!",
    ai: "Tôi là chatbot trợ lý AI được tạo ra để giúp bạn tìm hiểu về Chiến thắng Điện Biên Phủ 1954 - chiến thắng 'lừng lẫy năm châu, chấn động địa cầu'!",
    giúp: "Tôi có thể trả lời các câu hỏi về: thời gian chiến dịch, tướng lĩnh, ý nghĩa lịch sử, bài học, địa điểm, và Điện Biên Phủ ngày nay.",
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate thinking delay
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let botResponse = null;
      let bestMatchLength = 0;

      // Find matching answer - prioritize longer, more specific matches
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerInput.includes(key) && key.length > bestMatchLength) {
          botResponse = value;
          bestMatchLength = key.length;
        }
      }

      // Default response if no match
      if (!botResponse) {
        botResponse = {
          text: "Xin lỗi, tôi chưa có thông tin về câu hỏi này. Bạn có thể xem thêm thông tin ở phần Lý thuyết.",
          hasLink: true,
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            typeof botResponse === "string" ? botResponse : botResponse.text,
          hasLink:
            typeof botResponse === "object" ? botResponse.hasLink : false,
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Chiến dịch diễn ra khi nào?",
    "Ai là người chỉ huy?",
    "Tô Vĩnh Diện là ai?",
    "Ý nghĩa của chiến thắng?",
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
                <div className="message-content">
                  {msg.content}
                  {msg.hasLink && (
                    <a href="/theory" className="message-link-button">
                      📚 Xem Lý thuyết
                    </a>
                  )}
                </div>
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
            <small>🤖 Trợ lý AI Điện Biên Phủ</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
