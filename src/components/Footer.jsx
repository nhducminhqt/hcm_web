import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎓 Tạp chí VNR - Tháng 10/2025</h3>
            <p>Học viện Chính trị Quốc gia Hồ Chí Minh</p>
            <p className="footer-quote">
              "Lừng lẫy năm châu, chấn động địa cầu" - Tố Hữu
            </p>
          </div>

          <div className="footer-section">
            <h4>🤝 Nhóm thực hiện</h4>
            <ul>
              <li>📝 Bảo Ngọc - Lời tòa soạn & AI Usage</li>
              <li>📚 Dũng - Dấu chân người lính & Quiz</li>
              <li>🌟 Gia Huy - Thực tiễn & Bài học</li>
            </ul>
          </div>

          <div className="footer-section ai-transparency">
            <h4>🤖 Minh bạch AI</h4>
            <p>Website này được phát triển có sự hỗ trợ của:</p>
            <div className="ai-tools">
              <span className="ai-badge">ChatGPT</span>
              <span className="ai-badge">Claude</span>
              <span className="ai-badge">Grok</span>
              <span className="ai-badge">NotebookLLM</span>
            </div>
            <p className="ai-note">
              ✅ Tất cả nội dung đã được kiểm chứng từ nguồn chính thống
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Chiến thắng Điện Biên Phủ - Kỷ niệm 71 năm (1954-2025)</p>
          <p>
            <a
              href="https://socialism-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspired by Socialism Website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
