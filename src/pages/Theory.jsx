import { useState } from "react";
import "./Theory.css";

function Theory() {
  const [activeSection, setActiveSection] = useState("editorial");

  return (
    <div className="theory">
      <div className="theory-header">
        <h1>📚 Lý Thuyết - Chiến Thắng Điện Biên Phủ</h1>
        <p>Tạp chí VNR - Số tháng 10/2025</p>
      </div>

      <div className="theory-nav">
        <button
          className={activeSection === "editorial" ? "active" : ""}
          onClick={() => setActiveSection("editorial")}
        >
          📝 Lời tòa soạn
        </button>
        <button
          className={activeSection === "history" ? "active" : ""}
          onClick={() => setActiveSection("history")}
        >
          🕰️ Góc nhìn lịch sử
        </button>
        <button
          className={activeSection === "soldier" ? "active" : ""}
          onClick={() => setActiveSection("soldier")}
        >
          🪖 Dấu chân người lính
        </button>
        <button
          className={activeSection === "party" ? "active" : ""}
          onClick={() => setActiveSection("party")}
        >
          🔥 Sức mạnh của Đảng
        </button>
      </div>

      <div className="theory-content">
        {activeSection === "editorial" && (
          <section className="content-section editorial-section">
            <h2>📝 Lời Tòa Soạn</h2>
            <div className="author">Bảo Ngọc</div>

            <div className="content-body">
              <p className="lead-paragraph">
                Gần 70 năm trôi qua, chiến thắng Điện Biên Phủ (7/5/1954) vẫn
                vang vọng như bản hùng ca bất diệt trong lịch sử dân tộc. Tạp
                chí VNR số tháng 10/2025 xin được dành trọn số này để tái hiện
                lại tinh thần chiến đấu quật cường của quân dân ta, dưới sự lãnh
                đạo sáng suốt của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí
                Minh.
              </p>

              <p>
                Qua những bài viết, câu chuyện và góc nhìn lịch sử, chúng tôi
                mong muốn truyền tải đến độc giả – đặc biệt là thế hệ sinh viên
                – niềm tự hào và trách nhiệm tiếp nối truyền thống vẻ vang của
                dân tộc.
              </p>

              <div className="quote-box">
                <p>
                  "Chiến thắng Điện Biên Phủ không chỉ là thắng lợi quân sự, mà
                  còn là thắng lợi về chính trị, ngoại giao - một minh chứng rõ
                  ràng về sức mạnh vô địch của chủ nghĩa yêu nước và ý chí độc
                  lập dân tộc."
                </p>
              </div>

              <p>Trong số báo này, chúng tôi sẽ cùng nhau:</p>
              <ul className="magazine-outline">
                <li>Nhìn lại 56 ngày đêm lịch sử của chiến dịch</li>
                <li>
                  Lắng nghe những câu chuyện cảm động về người lính Việt Nam
                </li>
                <li>
                  Phân tích vai trò lãnh đạo của Đảng - nguồn gốc của chiến
                  thắng
                </li>
                <li>Khám phá Điện Biên Phủ trong lòng Tổ quốc hôm nay</li>
                <li>Rút ra những bài học quý báu cho thế hệ trẻ</li>
              </ul>

              <p className="closing">
                Hãy cùng chúng tôi trở về với trang sử vàng của dân tộc, để từ
                đó vững bước trên con đường xây dựng đất nước giàu mạnh, văn
                minh và hạnh phúc!
              </p>
            </div>
          </section>
        )}

        {activeSection === "history" && (
          <section className="content-section history-section">
            <h2>🕰️ Chiến Dịch Điện Biên Phủ – 56 Ngày Đêm Làm Nên Lịch Sử</h2>
            <div className="author">Bảo Ngọc</div>

            <div className="content-body">
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3>🎯 Bối Cảnh Lịch Sử</h3>
                    <p>
                      Sau thất bại ở chiến dịch Biên Giới (1950) và Tây Bắc
                      (1952), thực dân Pháp triển khai Kế hoạch Navarre nhằm tập
                      trung lực lượng đánh chiếm Điện Biên Phủ, biến nơi đây
                      thành "pháo đài bất khả xâm phạm" để kiểm soát Tây Bắc và
                      chuẩn bị phản công lớn.
                    </p>
                    <div className="highlight-box">
                      <strong>🎖️ Âm mưu của Pháp:</strong> Tập trung 16 tiểu
                      đoàn tinh nhuệ, xây dựng 49 cứ điểm kiên cố, có hỏa lực
                      mạnh và được Mỹ viện trợ.
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3>🚩 Chủ Trương Của Đảng</h3>
                    <p>
                      Tháng 9/1953, Bộ Chính trị họp dưới sự chủ trì của Chủ
                      tịch Hồ Chí Minh, quyết định mở chiến dịch Điện Biên Phủ
                      với phương châm:
                    </p>
                    <div className="strategy-box">
                      <div className="strategy-item">
                        <span className="icon">⚔️</span>
                        <strong>Tập trung lực lượng:</strong> Tạo ưu thế tuyệt
                        đối
                      </div>
                      <div className="strategy-item">
                        <span className="icon">🎯</span>
                        <strong>Đánh chắc, tiến chắc:</strong> Phương châm của
                        Đại tướng Võ Nguyên Giáp
                      </div>
                      <div className="strategy-item">
                        <span className="icon">💪</span>
                        <strong>Toàn dân kháng chiến:</strong> Hậu phương vững
                        mạnh
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3>⚡ Diễn Biến Chiến Dịch</h3>
                    <div className="phases">
                      <div className="phase-card">
                        <h4>Giai đoạn 1 (13-17/3/1954)</h4>
                        <p>
                          <strong>Tiêu diệt cụm cứ điểm phía Bắc:</strong> Him
                          Lam, Độc Lập, Hồng Cúm. Ta kiểm soát được nhiều điểm
                          cao quan trọng.
                        </p>
                      </div>
                      <div className="phase-card">
                        <h4>Giai đoạn 2 (30/3-26/4/1954)</h4>
                        <p>
                          <strong>Rút ngắn vòng vây:</strong> Tiến công cụm
                          trung tâm, phá hủy sân bay, cắt đứt tiếp tế bằng đường
                          không. Địch lâm vào thế bị động hoàn toàn.
                        </p>
                      </div>
                      <div className="phase-card highlight">
                        <h4>Giai đoạn 3 (1-7/5/1954)</h4>
                        <p>
                          <strong>Tổng tiến công và thắng lợi:</strong> Đánh
                          chiếm Mường Thanh, Hồng Cúm, A1. Ngày 7/5, chiếm Đồi
                          A1 và bắt sống Đờ Cát, toàn bộ tập đoàn cứ điểm Điện
                          Biên Phủ sụp đổ!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">✓</div>
                  <div className="timeline-content">
                    <h3>🏆 Kết Quả Vĩ Đại</h3>
                    <div className="results-grid">
                      <div className="result-card">
                        <span className="result-icon">⚔️</span>
                        <strong>16,200</strong>
                        <p>Quân địch bị tiêu diệt và bắt sống</p>
                      </div>
                      <div className="result-card">
                        <span className="result-icon">🎖️</span>
                        <strong>100%</strong>
                        <p>Tiêu diệt toàn bộ tập đoàn Điện Biên Phủ</p>
                      </div>
                      <div className="result-card">
                        <span className="result-icon">🏳️</span>
                        <strong>Kết thúc</strong>
                        <p>Chiến tranh Đông Dương lần thứ nhất</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quote-box special">
                <div className="quote-mark">"</div>
                <p>
                  <strong>"Đánh chắc, tiến chắc"</strong> - Phương châm chiến
                  lược của Đại tướng Võ Nguyên Giáp đã thể hiện tư duy quân sự
                  sáng tạo, linh hoạt, đảm bảo thắng lợi tuyệt đối cho quân ta.
                </p>
              </div>

              <div className="poem-box">
                <h4>📜 Thơ Tố Hữu - "Hoan hô chiến sĩ Điện Biên"</h4>
                <p className="poem-text">
                  "Điện Biên chiến thắng anh hùng
                  <br />
                  Quân Pháp nằm xuống, cờ ta thẳng đứng
                  <br />
                  Lừng lẫy năm châu, chấn động địa cầu
                  <br />
                  Giang sơn Việt Nam bao đời chói sáng!"
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "soldier" && (
          <section className="content-section soldier-section">
            <h2>🪖 Dấu Chân Người Lính - Tô Vĩnh Diện</h2>
            <div className="author">Dũng</div>

            <div className="content-body">
              <div className="hero-profile">
                <div className="profile-header">
                  <span className="profile-icon">🎖️</span>
                  <div>
                    <h3>Anh Hùng Lực Lượng Vũ Trang Nhân Dân</h3>
                    <p className="profile-name">TÔ VĨNH DIỆN (1924 - 1954)</p>
                  </div>
                </div>
              </div>

              <div className="story-content">
                <h3>🌟 Cuộc Đời Ngắn Ngủi, Công Lao Lớn Lao</h3>
                <p>
                  Tô Vĩnh Diện sinh năm 1924 tại xã Nông Trường, huyện Nông
                  Cống, tỉnh Thanh Hóa. Từ tuổi thanh niên, anh đã tham gia vào
                  lực lượng dân quân, rồi xung phong đi bộ đội vào năm 1949.
                </p>

                <h3>🚗 Hành Trình Lên Điện Biên</h3>
                <p>
                  Đến đầu năm 1954, đơn vị pháo cao xạ của anh được lệnh cùng cả
                  bộ đội kéo khẩu pháo 37mm (số hiệu 510681) vượt qua rừng núi,
                  dốc cao, vượt hàng nghìn cây số từ hậu phương lên trận địa tại
                  lòng chảo Mường Thanh nhằm chuẩn bị cho chiến dịch Điện Biên
                  Phủ.
                </p>

                <div className="critical-moment">
                  <h3>⚡ Khoảnh Khắc Anh Hùng</h3>
                  <div className="moment-box">
                    <p>
                      Trên chặng đường đó, có một đêm mưa, đường trơn, dốc "Dốc
                      Chuối" rất nguy hiểm. Dây tời kéo khẩu pháo bị đứt, pháo
                      lao tuột xuống dốc.
                    </p>
                    <div className="hero-action">
                      <p className="hero-shout">
                        💬 <strong>"Thà hy sinh quyết bảo vệ pháo!"</strong>
                      </p>
                      <p>
                        Trong khoảnh khắc hiểm nguy, Diện đã hét lên câu nói ấy,
                        rồi không chút do dự, anh bỏ vị trí lái pháo và lao tới,{" "}
                        <strong>dùng thân mình chèn vào càng pháo</strong> để
                        ngăn khẩu pháo nặng hơn 2 tấn tuột xuống vực.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sacrifice-box">
                  <h3>😢 Hy Sinh Vì Tổ Quốc</h3>
                  <p>
                    Cảnh tượng ấy khiến đồng đội nghẹn ngào — khẩu pháo được
                    cứu, nhưng Diện đã bị bánh pháo đè trọng thương.
                  </p>
                  <p className="last-words">
                    Trước lúc mất, anh còn hỏi rất tỉnh:{" "}
                    <strong>"Pháo có việc gì không anh em?"</strong>
                    rồi yên nghỉ ở tuổi 30.
                  </p>
                </div>

                <div className="recognition-box">
                  <h3>🏅 Ghi Nhận Công Lao</h3>
                  <p>Sau chiến dịch, công lao của anh được ghi nhận:</p>
                  <ul className="honors-list">
                    <li>
                      <span className="honor-icon">🎖️</span>
                      Truy tặng Huân chương Chiến công hạng Nhất
                    </li>
                    <li>
                      <span className="honor-icon">⭐</span>
                      Danh hiệu Anh hùng Lực lượng Vũ trang nhân dân
                    </li>
                  </ul>
                </div>

                <div className="legacy-box">
                  <h3>💭 Di Sản Tinh Thần</h3>
                  <p>
                    Câu chuyện của Tô Vĩnh Diện là biểu tượng của tinh thần "lấy
                    thân mình che chắn vũ khí" - một trong những hành động anh
                    hùng cao cả nhất của người lính Việt Nam. Khẩu pháo mà anh
                    bảo vệ bằng mạng sống đã tiếp tục góp phần vào chiến thắng
                    vĩ đại tại Điện Biên Phủ.
                  </p>
                  <p className="lesson">
                    <strong>Bài học:</strong> Tinh thần "thà hy sinh chứ không
                    để mất pháo" thể hiện lòng yêu nước, trách nhiệm và ý chí
                    quyết tâm của người chiến sĩ Việt Nam - sẵn sàng hi sinh vì
                    sự nghiệp chung của dân tộc.
                  </p>
                </div>

                <div className="sources">
                  <h4>📚 Nguồn tham khảo:</h4>
                  <ul>
                    <li>
                      <a
                        href="https://hcmyu.hpu2.edu.vn/to-vinh-dien---nguoi-anh-hung-lay-than-cuu-phao.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Học viện Chính trị Quốc gia Hồ Chí Minh - Phân viện Hải
                        Phòng
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nvsk.vnanet.vn/to-vinh-dien-nguoi-anh-hung-lay-than-minh-chen-banh-phao-1-144730.vna"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Thông tấn xã Việt Nam
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "party" && (
          <section className="content-section party-section">
            <h2>🔥 Sức Mạnh Của Đảng – Nguồn Gốc Của Chiến Thắng</h2>
            <div className="author">Dũng</div>

            <div className="content-body">
              <div className="intro-highlight">
                <p className="lead-text">
                  Chiến thắng Điện Biên Phủ năm 1954 là một mốc son chói lọi
                  trong lịch sử dân tộc,{" "}
                  <strong>"lừng lẫy năm châu, chấn động địa cầu"</strong>. Đằng
                  sau chiến thắng vĩ đại ấy là sự lãnh đạo sáng suốt của Đảng
                  Cộng sản Việt Nam – nhân tố quyết định dẫn dắt toàn dân tộc đi
                  tới thắng lợi cuối cùng.
                </p>
              </div>

              <div className="leadership-sections">
                <div className="leadership-card">
                  <div className="card-icon-large">🎯</div>
                  <h3>1. Đường Lối Chiến Lược Đúng Đắn</h3>
                  <p>
                    Trước tình hình địch ráo riết triển khai Kế hoạch Navarre,
                    Đảng đã họp Bộ Chính trị (9-1953) dưới sự chủ trì của Chủ
                    tịch Hồ Chí Minh để xác định đường lối kháng chiến đúng đắn:
                  </p>
                  <div className="policy-box">
                    <ul className="policy-list">
                      <li>
                        <span className="bullet">▸</span>
                        <strong>Toàn dân:</strong> Huy động sức mạnh của cả dân
                        tộc
                      </li>
                      <li>
                        <span className="bullet">▸</span>
                        <strong>Toàn diện:</strong> Kết hợp đấu tranh chính trị,
                        quân sự, ngoại giao
                      </li>
                      <li>
                        <span className="bullet">▸</span>
                        <strong>Lâu dài:</strong> Chuẩn bị cho cuộc kháng chiến
                        trường kỳ
                      </li>
                      <li>
                        <span className="bullet">▸</span>
                        <strong>Dựa vào sức mình là chính:</strong> Tự lực cánh
                        sinh, không ỷ lại
                      </li>
                    </ul>
                  </div>
                  <p className="analysis">
                    Tư duy quân sự sắc sảo ấy đã phá vỡ kế hoạch của Pháp, buộc
                    chúng bị động và dồn vào thế phải chiến đấu tại Điện Biên
                    Phủ — nơi Đảng và Chủ tịch Hồ Chí Minh đã lựa chọn làm điểm
                    quyết chiến chiến lược.
                  </p>
                </div>

                <div className="leadership-card">
                  <div className="card-icon-large">🎖️</div>
                  <h3>2. Bản Lĩnh Và Trí Tuệ Lãnh Đạo</h3>
                  <p>
                    Trong quá trình chỉ đạo, Đảng thể hiện bản lĩnh, trí tuệ
                    vượt trội khi kịp thời thay đổi phương châm tác chiến:
                  </p>
                  <div className="strategy-change">
                    <div className="strategy-before">
                      <span className="label">Phương châm cũ</span>
                      <p>"Đánh nhanh, giải quyết nhanh"</p>
                    </div>
                    <div className="strategy-arrow">➜</div>
                    <div className="strategy-after">
                      <span className="label">Phương châm mới</span>
                      <p>
                        <strong>"Đánh chắc, tiến chắc"</strong>
                      </p>
                    </div>
                  </div>
                  <p className="decision-note">
                    Quyết định này theo đề xuất của Đại tướng Võ Nguyên Giáp thể
                    hiện rõ tầm nhìn chiến lược và nguyên tắc{" "}
                    <strong>"chắc thắng mới đánh"</strong>– một biểu hiện tiêu
                    biểu của sự lãnh đạo đúng đắn, kiên định và linh hoạt của
                    Đảng.
                  </p>
                </div>

                <div className="leadership-card">
                  <div className="card-icon-large">💪</div>
                  <h3>3. Công Tác Tư Tưởng Và Tổ Chức Hậu Phương</h3>
                  <p>
                    Bên cạnh đó, công tác tư tưởng, chính trị và tổ chức hậu
                    phương được phát huy tối đa. Dưới khẩu hiệu:
                  </p>
                  <div className="slogan-box">
                    <p className="slogan">
                      "Tất cả cho tiền tuyến, tất cả để chiến thắng"
                    </p>
                  </div>
                  <div className="mobilization-stats">
                    <div className="stat-item">
                      <span className="stat-icon">👥</span>
                      <strong>Hàng chục nghìn</strong>
                      <p>Dân công hỏa tuyến</p>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🚚</span>
                      <strong>Hàng chục nghìn tấn</strong>
                      <p>Lương thực, vũ khí, đạn dược</p>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🛤️</span>
                      <strong>Hàng nghìn km</strong>
                      <p>Đường mở, cầu xây</p>
                    </div>
                  </div>
                  <p className="conclusion">
                    Hậu phương lớn mạnh là điểm tựa vững chắc cho tiền tuyến,
                    thể hiện năng lực lãnh đạo toàn diện của Đảng – không chỉ
                    trên chiến trường, mà còn trong xây dựng tinh thần đoàn kết
                    và niềm tin chiến thắng của toàn dân.
                  </p>
                </div>
              </div>

              <div className="final-message">
                <h3>🌟 Kết Luận</h3>
                <p>
                  Nhờ đường lối chiến lược đúng đắn, công tác tư tưởng vững vàng
                  và tổ chức hậu phương chặt chẽ, Đảng đã huy động, tổ chức và
                  phát huy cao nhất sức mạnh đại đoàn kết toàn dân tộc.
                </p>
                <p className="highlight-conclusion">
                  Chính sức mạnh ấy –{" "}
                  <strong>
                    sức mạnh của Đảng, của niềm tin, của trí tuệ và bản lĩnh
                    Việt Nam
                  </strong>{" "}
                  – đã làm nên chiến thắng Điện Biên Phủ "lừng lẫy năm châu,
                  chấn động địa cầu", khẳng định vai trò lãnh đạo của Đảng là
                  nguồn gốc sâu xa và quyết định của mọi thắng lợi cách mạng
                  Việt Nam.
                </p>
              </div>

              <div className="vnr-connection">
                <h4>🎓 Liên hệ với môn VNR (Vai trò Đảng CSVN)</h4>
                <p>
                  Chiến thắng Điện Biên Phủ là minh chứng sống động về vai trò
                  lãnh đạo của Đảng Cộng sản Việt Nam - lực lượng duy nhất có đủ
                  tầm nhìn, trí tuệ và bản lĩnh để lãnh đạo cách mạng Việt Nam
                  đi từ thắng lợi này đến thắng lợi khác, thực hiện thành công
                  sự nghiệp giải phóng dân tộc và xây dựng chủ nghĩa xã hội.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Theory;
