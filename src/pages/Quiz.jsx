import { useState } from "react";
import "./Quiz.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizRef, quizVisible] = useScrollReveal({ triggerOnce: false });

  const questions = [
    {
      question: " Ai là người chỉ huy Chiến dịch Điện Biên Phủ?",
      options: [
        "Đại tướng Võ Nguyên Giáp",
        "Tướng Nguyễn Chí Thanh",
        "Đại tướng Hoàng Văn Thái",
        "Tướng Văn Tiến Dũng",
      ],
      correctAnswer: 0,
      explanation:
        "Đại tướng Võ Nguyên Giáp – Tổng Tư lệnh Quân đội Nhân dân Việt Nam, Bí thư Đảng ủy Chiến dịch. Ông là người trực tiếp ra quyết định lịch sử chuyển phương châm 'đánh nhanh, giải quyết nhanh' sang 'đánh chắc, tiến chắc', góp phần đưa chiến dịch đến thắng lợi hoàn toàn.",
    },
    {
      question: " Chiến dịch Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm?",
      options: ["45 ngày đêm", "56 ngày đêm", "60 ngày đêm", "70 ngày đêm"],
      correctAnswer: 1,
      explanation:
        "56 ngày đêm (từ 13-3-1954 đến 7-5-1954). Trong suốt 56 ngày ấy, quân và dân ta chiến đấu anh dũng, vượt qua muôn vàn khó khăn để làm nên chiến thắng vang dội 'lừng lẫy năm châu, chấn động địa cầu'.",
    },
    {
      question: " 'Lừng lẫy năm châu, chấn động địa cầu' là câu thơ của ai?",
      options: ["Xuân Diệu", "Tố Hữu", "Chế Lan Viên", "Huy Cận"],
      correctAnswer: 1,
      explanation:
        "Tố Hữu, trong bài thơ 'Hoan hô chiến sĩ Điện Biên' (1954). Câu thơ thể hiện niềm tự hào, xúc động và tinh thần bất khuất của dân tộc Việt Nam sau chiến thắng vĩ đại.",
    },
    {
      question: " Phương châm chiến lược của Đại tướng Võ Nguyên Giáp là gì?",
      options: [
        "Đánh nhanh, giải quyết nhanh",
        "Đánh chắc, tiến chắc",
        "Đánh lâu dài, đánh kiên cường",
        "Tiến nhanh, đánh mạnh",
      ],
      correctAnswer: 1,
      explanation:
        "Phương châm 'Đánh chắc, tiến chắc' được thay đổi từ 'đánh nhanh, giải quyết nhanh' thể hiện tư duy quân sự sáng tạo, linh hoạt, đảm bảo thắng lợi tuyệt đối cho quân ta.",
    },
    {
      question: " Chiến thắng Điện Biên Phủ kết thúc chiến tranh nào?",
      options: [
        "Chiến tranh thế giới thứ hai",
        "Chiến tranh Đông Dương lần thứ nhất",
        "Chiến tranh Việt Nam",
        "Chiến tranh biên giới",
      ],
      correctAnswer: 1,
      explanation:
        "Chiến thắng Điện Biên Phủ đã kết thúc Chiến tranh Đông Dương lần thứ nhất (1946-1954), buộc thực dân Pháp phải ký Hiệp định Genève công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
    },
    {
      question: " Tô Vĩnh Diện đã hy sinh như thế nào?",
      options: [
        "Trong trận chiến cuối cùng",
        "Dùng thân mình chèn vào càng pháo để cứu pháo",
        "Đỡ đạn cho đồng đội",
        "Lao vào cứ điểm địch",
      ],
      correctAnswer: 1,
      explanation:
        "Tô Vĩnh Diện đã dùng thân mình chèn vào càng pháo để ngăn khẩu pháo nặng hơn 2 tấn tuột xuống vực. Khẩu pháo được cứu nhưng anh bị bánh pháo đè trọng thương và hy sinh ở tuổi 30. Anh được truy tặng danh hiệu Anh hùng Lực lượng Vũ trang nhân dân.",
    },
    {
      question: " Khẩu hiệu của hậu phương trong chiến dịch là gì?",
      options: [
        "Không có gì quý hơn độc lập, tự do",
        "Tất cả cho tiền tuyến, tất cả để chiến thắng",
        "Quyết tử cho Tổ quốc quyết sinh",
        "Đoàn kết, đoàn kết, đại đoàn kết",
      ],
      correctAnswer: 1,
      explanation:
        "Khẩu hiệu 'Tất cả cho tiền tuyến, tất cả để chiến thắng' đã huy động hàng chục nghìn dân công hỏa tuyến vận chuyển hàng chục nghìn tấn lương thực, vũ khí lên mặt trận, thể hiện sức mạnh đoàn kết toàn dân.",
    },
    {
      question: " Đồi A1 có ý nghĩa gì trong chiến dịch?",
      options: [
        "Nơi đặt hầm chỉ huy của ta",
        "Địa điểm quyết chiến cuối cùng",
        "Nơi đóng quân chủ lực",
        "Kho vũ khí lớn nhất",
      ],
      correctAnswer: 1,
      explanation:
        "Đồi A1 là địa điểm quyết chiến cuối cùng. Ngày 7/5/1954, quân ta chiếm được Đồi A1 và bắt sống De Castries, đánh dấu chiến thắng hoàn toàn của chiến dịch Điện Biên Phủ.",
    },
    {
      question:
        " Đảng đã họp Bộ Chính trị quyết định mở chiến dịch vào tháng nào?",
      options: [
        "Tháng 5/1953",
        "Tháng 7/1953",
        "Tháng 9/1953",
        "Tháng 11/1953",
      ],
      correctAnswer: 2,
      explanation:
        "Tháng 9/1953, Bộ Chính trị họp dưới sự chủ trì của Chủ tịch Hồ Chí Minh, quyết định mở chiến dịch Điện Biên Phủ với phương châm kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính.",
    },
    {
      question: "Ý nghĩa lớn nhất của chiến thắng Điện Biên Phủ là gì?",
      options: [
        "Chứng minh sức mạnh quân sự Việt Nam",
        "Lần đầu dân tộc thuộc địa đánh bại đế quốc",
        "Thu được nhiều vũ khí hiện đại",
        "Mở rộng lãnh thổ",
      ],
      correctAnswer: 1,
      explanation:
        "Chiến thắng Điện Biên Phủ là lần đầu tiên trong lịch sử một dân tộc thuộc địa đánh bại một đế quốc thực dân lớn, cổ vũ phong trào giải phóng dân tộc trên toàn thế giới, 'lừng lẫy năm châu, chấn động địa cầu'.",
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="quiz">
      {/* Hero section giống Home */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Kiểm Tra Kiến Thức
          </h1>
          <p className="hero-subtitle">Tìm hiểu về Chiến thắng Điện Biên Phủ</p>
          <p className="hero-date">Thử thách tri thức của bạn!</p>
        </div>
      </section>

      <div
        ref={quizRef}
        className={`quiz-container scroll-reveal ${
          quizVisible ? "revealed" : ""
        }`}
      >
        {showScore ? (
          <div className="score-section">
            <h2>🎉 Hoàn thành!</h2>
            <div className="score-display">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <p className="score-message">
              {score === questions.length &&
                "🏆 Xuất sắc! Bạn là chuyên gia về Điện Biên Phủ!"}
              {score >= questions.length * 0.8 &&
                score < questions.length &&
                "⭐ Rất tốt! Bạn có kiến thức vững về lịch sử!"}
              {score >= questions.length * 0.6 &&
                score < questions.length * 0.8 &&
                "👍 Khá tốt! Hãy tìm hiểu thêm nhé!"}
              {score < questions.length * 0.6 &&
                "📚 Hãy đọc lại phần lý thuyết để hiểu rõ hơn!"}
            </p>
            <div className="score-actions">
              <button onClick={restartQuiz} className="btn-restart">
                🔄 Làm lại
              </button>
              <a href="/theory" className="btn-learn">
                📚 Học thêm
              </a>
            </div>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-header">
              <div className="question-count">
                <span className="current">{currentQuestion + 1}</span>
                <span className="total">/{questions.length}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="question-text">
              {questions[currentQuestion].question}
            </div>

            <div className="options-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`option-button ${
                    selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  } ${
                    showExplanation &&
                    index === questions[currentQuestion].correctAnswer
                      ? "correct"
                      : ""
                  }`}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showExplanation &&
                    index === questions[currentQuestion].correctAnswer && (
                      <span className="checkmark">✓</span>
                    )}
                  {selectedAnswer === index &&
                    index !== questions[currentQuestion].correctAnswer && (
                      <span className="crossmark">✗</span>
                    )}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation-section">
                <h3>💡 Giải thích:</h3>
                <p>{questions[currentQuestion].explanation}</p>
                <button onClick={handleNextQuestion} className="btn-next">
                  {currentQuestion === questions.length - 1
                    ? "🏁 Xem kết quả"
                    : "➡️ Câu tiếp theo"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
