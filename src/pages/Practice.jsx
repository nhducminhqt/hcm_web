import "./Practice.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Practice() {
  const [modernRef, modernVisible] = useScrollReveal({ triggerOnce: false });
  const [lessonsRef, lessonsVisible] = useScrollReveal({ triggerOnce: false });
  const [gratitudeRef, gratitudeVisible] = useScrollReveal({
    triggerOnce: false,
  });

  return (
    <div className="practice">
      {/* Hero section giống Home */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Thực Tiễn Việt Nam
            <img src="/vn.png" alt="VN" className="flag-icon-hero" />
          </h1>
          <p className="hero-subtitle">
            Điện Biên Phủ - Từ chiến hào xưa đến hiện tại
          </p>
          <p className="hero-date">"Lịch sử sống mãi trong lòng dân tộc"</p>
        </div>
      </section>

      <div className="practice-container">
        <section
          ref={modernRef}
          className={`modern-section scroll-reveal ${
            modernVisible ? "revealed" : ""
          }`}
        >
          <h2>❤️ Điện Biên Trong Lòng Tổ Quốc Hôm Nay</h2>
          <div className="intro-quote">
            <p>
              "Từ chiến hào xưa, một Điện Biên mới đang vươn mình giữa lòng Tổ
              quốc – biểu tượng của khát vọng vươn lên và niềm tin son sắt vào
              tương lai Việt Nam."
            </p>
          </div>

          <p className="section-intro">
            Sau hơn bảy mươi năm, Điện Biên Phủ không chỉ đơn thuần là một tên
            gọi trong lịch sử mà còn là biểu tượng sống mãi của lòng yêu nước,
            nghị lực tự cường và tinh thần đoàn kết dân tộc. Ngày nay, trên vùng
            đất anh dũng này, những tàn tích của chiến tranh đã trở thành di sản
            quý giá, nơi khơi dậy niềm tự hào và truyền dạy các giá trị truyền
            thống cho các thế hệ người Việt.
          </p>

          <div className="modern-aspects">
            <div className="aspect-card">
              <div className="aspect-icon">🏛️</div>
              <h3>Di tích và Bảo tàng – Nơi ký ức sống dậy</h3>
              <p>
                Trong thành phố Điện Biên Phủ,{" "}
                <strong>
                  Khu di tích lịch sử quốc gia đặc biệt Điện Biên Phủ
                </strong>{" "}
                đã được khôi phục và bảo tồn, trở thành một điểm đến văn hóa và
                lịch sử quan trọng.
              </p>
              <div className="landmarks">
                <div className="landmark-item">
                  <span className="landmark-icon">⛰️</span>
                  <strong>Đồi A1</strong>
                  <p>Địa điểm quyết chiến cuối cùng</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🏚️</span>
                  <strong>Hầm Đờ Cát</strong>
                  <p>Chỉ huy sở của De Castries</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🌉</span>
                  <strong>Cầu Mường Thanh</strong>
                  <p>Biểu tượng lịch sử</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🗿</span>
                  <strong>Tượng đài Chiến thắng</strong>
                  <p>Tôn vinh anh hùng</p>
                </div>
              </div>
              <p>
                <strong>Bảo tàng Chiến thắng Điện Biên Phủ</strong> – với hàng
                ngàn hiện vật, hình ảnh và mô hình tái hiện 56 ngày đêm "khoét
                núi, ngủ hầm, mưa dầm cơm vắt" – đã trở thành một địa chỉ quan
                trọng trong việc giáo dục truyền thống yêu nước cho học sinh và
                sinh viên.
              </p>
            </div>

            <div className="aspect-card">
              <div className="aspect-icon">🎉</div>
              <h3>Hoạt động kỷ niệm – Lan tỏa tinh thần 7/5</h3>
              <p>
                Mỗi khi kỷ niệm ngày Chiến thắng 7/5, Điện Biên được trang trí
                rực rỡ cờ hoa và tràn ngập trong không khí lễ hội. Các chương
                trình nghệ thuật, diễu hành, hội thảo, triển lãm hình ảnh và các
                hoạt động tri ân cựu chiến binh được tổ chức trang trọng, thể
                hiện lòng biết ơn sâu sắc đến thế hệ đi trước.
              </p>
              <div className="activities">
                <div className="activity-badge">🎭 Nghệ thuật</div>
                <div className="activity-badge">🚶 Diễu hành</div>
                <div className="activity-badge">🎤 Hội thảo</div>
                <div className="activity-badge">📸 Triển lãm</div>
                <div className="activity-badge">🎖️ Tri ân</div>
              </div>
              <p className="highlight-text">
                Đặc biệt, những chương trình như{" "}
                <strong>"Tuổi trẻ với Điện Biên"</strong>,
                <strong>"Hành trình về Điện Biên"</strong> thu hút rất nhiều
                đoàn viên và sinh viên tham gia, giúp thế hệ trẻ thấu hiểu sâu
                sắc về giá trị lịch sử và trách nhiệm gìn giữ truyền thống dân
                tộc.
              </p>
            </div>

            <div className="aspect-card highlight">
              <div className="aspect-icon">💻</div>
              <h3>
                Cảm nhận của giới trẻ – Tinh thần Điện Biên trong thời đại 4.0
              </h3>
              <p>
                Nhiều sinh viên khi đến Điện Biên đã bày tỏ cảm giác như đang
                được sống lại trong bầu không khí oanh liệt của dân tộc. Họ gọi
                đó là:
              </p>
              <div className="youth-quote">
                <p>
                  <strong>
                    "Tinh thần Điện Biên trong thời đại 4.0 – Từ chiến hào đến
                    giảng đường"
                  </strong>
                </p>
                <p className="quote-detail">
                  Tinh thần vượt qua khó khăn, sáng tạo và dám hành động
                </p>
              </div>
              <p>
                Ngày nay, "tinh thần Điện Biên" đã trở thành nguồn động lực cho
                thế hệ trẻ trong việc ứng dụng tri thức, công nghệ và sự đổi mới
                sáng tạo, góp phần xây dựng một đất nước thịnh vượng và hùng
                mạnh.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={lessonsRef}
          className={`lessons-section scroll-reveal ${
            lessonsVisible ? "revealed" : ""
          }`}
        >
          <h2>🌟 Bài Học Lịch Sử Và Giá Trị Thời Đại</h2>
          <p className="section-intro">
            Chiến thắng tại Điện Biên Phủ đại diện cho sức mạnh, trí tuệ và ý
            chí của người Việt Nam, đồng thời để lại nhiều bài học quý giá cho
            các thế hệ sau.
          </p>

          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-icon">🤝</div>
              <h3>Sự mạnh mẽ của sự đoàn kết dân tộc</h3>
              <p className="lesson-subtitle">Nền tảng cho mọi thành công</p>
              <p>
                Bài học quan trọng nhất từ chiến dịch Điện Biên Phủ là sức mạnh
                của sự đoàn kết toàn dân. Khi mọi người cùng chung sức, mọi trở
                ngại đều có thể được khắc phục.
              </p>
              <div className="lesson-quote">
                <p>
                  Tinh thần{" "}
                  <strong>"tất cả vì tiền tuyến, tất cả vì chiến thắng"</strong>
                  vẫn còn vang vọng cho đến nay – trong hành trình công nghiệp
                  hóa và hiện đại hóa đất nước.
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">❤️</div>
              <h3>Tình yêu đối với quê hương và ý chí độc lập</h3>
              <p className="lesson-subtitle">Giá trị vĩnh cửu</p>
              <p>
                Điện Biên Phủ chứng minh rằng lòng yêu nước mang lại sức mạnh vô
                tận. Qua hình ảnh của những người lính trẻ trong quá khứ, ta cảm
                nhận được ý chí kiên cường và niềm tin sâu sắc vào thành công.
              </p>
              <div className="modern-connection">
                <p>
                  <strong>Thời đại 4.0:</strong> Tinh thần này chuyển thành khát
                  vọng tri thức, sự sáng tạo và khả năng làm chủ công nghệ, giúp
                  Việt Nam tiến bước vững chắc trên con đường hội nhập.
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">🚩</div>
              <h3>Niềm tin vào sự lãnh đạo của Đảng</h3>
              <p className="lesson-subtitle">Kim chỉ nam cho mọi thành công</p>
              <p>
                Thực tế lịch sử đã minh chứng rằng Đảng Cộng sản Việt Nam là yếu
                tố quyết định cho mọi thành quả của cuộc cách mạng. Dưới sự lãnh
                đạo của Đảng và Bác Hồ, dân tộc ta đã biến những điều không thể
                thành hiện thực.
              </p>
              <div className="lesson-quote">
                <p>
                  Niềm tin này hôm nay tiếp tục dẫn lối cho việc xây dựng một
                  đất nước
                  <strong> giàu mạnh, văn minh và hạnh phúc</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="vnr-responsibility">
            <h3>
              🎓 Liên hệ: Sinh viên VNR và trách nhiệm bảo tồn tinh thần Điện
              Biên
            </h3>
            <p>
              Đối với sinh viên Học viện Chính trị Quốc gia Hồ Chí Minh (VNR) và
              giới trẻ nói chung, tinh thần Điện Biên Phủ chính là nguồn động
              lực tinh thần để rèn luyện, học hỏi và sáng tạo.
            </p>

            <div className="responsibilities">
              <div className="responsibility-item">
                <span className="resp-number">1</span>
                <div className="resp-content">
                  <strong>Duy trì lý tưởng cách mạng</strong>
                  <p>Trung thành với con đường mà Đảng đã vạch ra</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">2</span>
                <div className="resp-content">
                  <strong>Khuyến khích tinh thần tự học</strong>
                  <p>Chủ động và sáng tạo trong nghiên cứu khoa học</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">3</span>
                <div className="resp-content">
                  <strong>Thực hiện đoàn kết, trách nhiệm</strong>
                  <p>
                    Lòng nhân ái, đóng góp vào sự xây dựng đất nước thịnh vượng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="closing-message">
            <div className="closing-quote">
              <p>
                "Tinh thần Điện Biên không chỉ là ký ức hào hùng, mà là mạch
                nguồn sức mạnh để thế hệ hôm nay viết tiếp bản anh hùng ca mới –
                bản anh hùng ca của tri thức và khát vọng Việt Nam."
              </p>
            </div>
          </div>
        </section>

        <section
          ref={gratitudeRef}
          className={`gratitude-section scroll-reveal ${
            gratitudeVisible ? "revealed" : ""
          }`}
        >
          <h2>💝 Lời Cảm Ơn</h2>

          <div className="gratitude-content">
            <p>
              Với tâm lòng trân trọng, tôi xin gửi lời cảm ơn sâu sắc đến tất cả
              những ai đã bỏ thời gian để cùng theo dõi bài viết này.
            </p>

            <p>
              Trong hành trình khám phá về Chiến thắng Điện Biên Phủ – biểu
              tượng vững bền của lòng yêu nước và ý chí dân tộc Việt Nam – tôi
              càng thêm cảm thấy tự hào về một dân tộc anh hùng, về những thế hệ
              đi trước đã hiến dâng cuộc sống của họ cho sự độc lập và tự do của
              quê hương.
            </p>

            <div className="thanks-sections">
              <div className="thanks-item">
                <span className="thanks-icon">🎖️</span>
                <p>
                  <strong>Xin chân thành cảm ơn những người đi trước</strong> –
                  các anh hùng, liệt sĩ, và cựu chiến binh – những người đã viết
                  nên những trang sử vĩ đại "lừng lẫy năm châu, chấn động địa
                  cầu".
                </p>
              </div>
              <div className="thanks-item">
                <span className="thanks-icon">👨‍🏫</span>
                <p>
                  <strong>Xin cảm ơn các thầy cô, bạn bè, đồng nghiệp</strong>,
                  và độc giả đã chia sẻ và đóng góp ý kiến để cải thiện bài viết
                  này.
                </p>
              </div>
            </div>

            <p className="hope-message">
              Tôi hy vọng rằng, tinh thần Điện Biên – một biểu hiện của niềm
              tin, khát vọng và đổi mới – sẽ tiếp tục được duy trì trong trái
              tim của thế hệ trẻ hiện tại, để chúng ta có thể cùng nhau tiếp tục
              viết lên những chương sử huy hoàng của dân tộc Việt Nam.
            </p>

            <div className="final-quote">
              <p>
                "Lịch sử không ngủ yên trong quá khứ – nó sống trong từng nhịp
                đập của hiện tại, và dẫn lối cho tương lai."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Practice;
