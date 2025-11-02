import "./Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Home() {
  const [introRef, introVisible] = useScrollReveal({ triggerOnce: false });
  const [statsRef, statsVisible] = useScrollReveal({ triggerOnce: false });
  const [significanceRef, significanceVisible] = useScrollReveal({
    triggerOnce: false,
  });
  const [quoteRef, quoteVisible] = useScrollReveal({ triggerOnce: false });
  const [ctaRef, ctaVisible] = useScrollReveal({ triggerOnce: false });

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Chiến Thắng Điện Biên Phủ
          </h1>
          <p className="hero-date">7 Tháng 5, 1954</p>
          <p className="hero-subtitle">
            "Lừng lẫy năm châu, chấn động địa cầu"
          </p>
          <p className="hero-author">- Tố Hữu</p>
        </div>
      </section>

      <section
        ref={introRef}
        className={`intro-section scroll-reveal ${
          introVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="intro-card">
            <h2>🏆 Chiến Thắng Vĩ Đại</h2>
            <p className="intro-text">
              Gần 70 năm trôi qua, chiến thắng Điện Biên Phủ (7/5/1954) vẫn vang
              vọng như bản hùng ca bất diệt trong lịch sử dân tộc. Đây là thắng
              lợi của ý chí kiên cường, trí tuệ sáng tạo và sức mạnh đại đoàn
              kết toàn dân tộc dưới sự lãnh đạo sáng suốt của Đảng Cộng sản Việt
              Nam và Chủ tịch Hồ Chí Minh.
            </p>
            <div className="intro-image">
              <img src="/dbp1.jpg" alt="Chiến dịch Điện Biên Phủ" />
            </div>
          </div>
          <div
            ref={statsRef}
            className={`stats-grid scroll-reveal ${
              statsVisible ? "revealed" : ""
            }`}
          >
            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src="/clock.png"
                  alt="Ngày đêm chiến đấu"
                  className="stat-img"
                />
              </div>
              <div className="stat-number">56</div>
              <div className="stat-label">Ngày đêm chiến đấu</div>
              <div className="stat-detail">13/3 - 7/5/1954</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src="/battle.png"
                  alt="Quân Pháp bị tiêu diệt"
                  className="stat-img"
                />
              </div>
              <div className="stat-number">16,000+</div>
              <div className="stat-label">Quân Pháp bị tiêu diệt</div>
              <div className="stat-detail">Kể cả De Castries</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src="/earth.png"
                  alt="Ý nghĩa lịch sử"
                  className="stat-img"
                />
              </div>
              <div className="stat-number">∞</div>
              <div className="stat-label">Ý nghĩa lịch sử</div>
              <div className="stat-detail">Thế giới ngưỡng mộ</div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={significanceRef}
        className={`significance-section scroll-reveal ${
          significanceVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <h2 className="section-title">🌟 Ý Nghĩa Lịch Sử</h2>

          <div className="significance-grid">
            <div className="significance-card">
              <div className="card-header">
                <img src="/vn.png" alt="VN" className="flag-icon" />
                <h3>Đối với Việt Nam</h3>
              </div>
              <ul>
                <li>Kết thúc 9 năm kháng chiến chống Pháp</li>
                <li>Giành lại độc lập dân tộc, thống nhất đất nước</li>
                <li>Khẳng định vai trò lãnh đạo của Đảng</li>
                <li>Mở ra kỷ nguyên xây dựng CNXH ở miền Bắc</li>
              </ul>
            </div>

            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">🌏</span>
                <h3>Đối với Thế giới</h3>
              </div>
              <ul>
                <li>Lần đầu dân tộc thuộc địa đánh bại đế quốc</li>
                <li>Cổ vũ phong trào giải phóng dân tộc toàn cầu</li>
                <li>Phá tan thần thoại "vô địch" của phương Tây</li>
                <li>Góp phần vào hòa bình khu vực Đông Dương</li>
              </ul>
            </div>

            <div className="significance-card highlight">
              <div className="card-header">
                <span className="card-icon">💪</span>
                <h3>Bài học vàng</h3>
              </div>
              <ul>
                <li>Sức mạnh đại đoàn kết toàn dân tộc</li>
                <li>Vai trò lãnh đạo của Đảng là quyết định</li>
                <li>Chiến tranh nhân dân là bất khả chiến bại</li>
                <li>"Không có gì quý hơn độc lập, tự do"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={quoteRef}
        className={`quote-section scroll-reveal ${
          quoteVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="quote-card">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Chiến thắng Điện Biên Phủ là chiến thắng của đường lối kháng chiến
              toàn dân, toàn diện, trường kỳ, dựa vào sức mình là chính của
              Đảng, là chiến thắng của chủ nghĩa anh hùng cách mạng, của ý chí
              quyết chiến, quyết thắng của toàn Đảng, toàn dân và toàn quân ta.
            </p>
            <p className="quote-author">— Tổng Bí thư Nguyễn Phú Trọng</p>
            <div className="intro-image">
              <img src="/dbp2.jpg" alt="Chiến dịch Điện Biên Phủ" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`cta-section scroll-reveal ${ctaVisible ? "revealed" : ""}`}
      >
        <div className="container">
          <div className="cta-grid">
            <a href="/theory" className="cta-card">
              <span className="cta-icon">📚</span>
              <h3>Lý thuyết</h3>
              <p>Tìm hiểu chi tiết về chiến dịch</p>
            </a>
            <a href="/practice" className="cta-card">
              <img src="/vn.png" alt="VN" className="flag-icon" />
              <h3>Thực tiễn VN</h3>
              <p>Điện Biên Phủ ngày nay</p>
            </a>
            <a href="/quiz" className="cta-card">
              <span className="cta-icon">🎲</span>
              <h3>Quiz</h3>
              <p>Kiểm tra kiến thức của bạn</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
