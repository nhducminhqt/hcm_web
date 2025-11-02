import "./AIUsage.css";

function AIUsage() {
  return (
    <div className="ai-usage">
      <div className="ai-header">
        <h1>🤖 AI Usage - Minh Bạch AI</h1>
        <p>Sử dụng trí tuệ nhân tạo có trách nhiệm</p>
      </div>

      <div className="ai-container">
        <section className="ai-intro">
          <h2>✍️ Minh bạch việc sử dụng AI trong phát triển Website</h2>
          <div className="author">Bảo Ngọc</div>

          <p className="intro-text">
            Trong quá trình phát triển website này, nhóm đã sử dụng AI một cách{" "}
            <strong>minh bạch và có trách nhiệm</strong> để hỗ trợ nghiên cứu,
            phát triển và trình bày nội dung học thuật.
          </p>

          <div className="ai-tools-showcase">
            <div className="tool-card">
              <div className="tool-logo">📓</div>
              <h3>NotebookLLM</h3>
              <p className="tool-provider">Google</p>
              <p className="tool-purpose">Tóm tắt tài liệu</p>
            </div>
            <div className="tool-card">
              <div className="tool-logo">🔍</div>
              <h3>Grok</h3>
              <p className="tool-provider">xAI</p>
              <p className="tool-purpose">Tìm kiếm & Phân tích</p>
            </div>
            <div className="tool-card">
              <div className="tool-logo">💬</div>
              <h3>ChatGPT</h3>
              <p className="tool-provider">OpenAI</p>
              <p className="tool-purpose">Code & Nội dung</p>
            </div>
            <div className="tool-card">
              <div className="tool-logo">🎨</div>
              <h3>Claude</h3>
              <p className="tool-provider">Anthropic</p>
              <p className="tool-purpose">Giao diện Web</p>
            </div>
          </div>
        </section>

        <section className="ai-fields">
          <h2>🎯 Các lĩnh vực sử dụng AI</h2>

          <div className="fields-grid">
            <div className="field-card">
              <div className="field-icon">🏗️</div>
              <h3>Gợi ý Cấu trúc Website</h3>
              <p>
                AI giúp đề xuất khung tổng thể với 5 trang chính và các yếu tố
                tương tác như timeline, biểu đồ Chart.js, và modal popup. Nhóm
                chỉnh sửa để phù hợp với nội dung học thuật và đảm bảo tính
                responsive.
              </p>
              <div className="contribution">
                <strong>Đóng góp:</strong> Cấu trúc HTML, CSS Grid layout,
                JavaScript tương tác
              </div>
            </div>

            <div className="field-card">
              <div className="field-icon">💻</div>
              <h3>Hỗ trợ Viết Code</h3>
              <p>
                AI cung cấp code mẫu cho HTML/CSS/JS, đặc biệt là phần tương tác
                như biểu đồ thay đổi cơ cấu giai cấp và bảng so sánh quốc tế.
                Nhóm sử dụng để học hỏi và tối ưu hóa.
              </p>
              <div className="contribution">
                <strong>Đóng góp:</strong> Chart.js implementation, Modal
                systems, Responsive design
              </div>
            </div>

            <div className="field-card">
              <div className="field-icon">📖</div>
              <h3>Tổng hợp Nội dung</h3>
              <p>
                AI hỗ trợ tổng hợp kiến thức từ lý thuyết Marx-Lenin, văn kiện
                Đảng CSVN và thực tiễn Việt Nam. Nhóm bổ sung dẫn chứng từ nguồn
                chính thống để đảm bảo tính chính xác.
              </p>
              <div className="contribution">
                <strong>Đóng góp:</strong> Cấu trúc logic, phân tích vai trò
                Đảng
              </div>
            </div>

            <div className="field-card">
              <div className="field-icon">🔗</div>
              <h3>Hỗ trợ Tìm kiếm Nguồn</h3>
              <p>
                AI gợi ý nguồn đáng tin cậy và cách tìm kiếm hiệu quả. Nhóm sử
                dụng để thu thập dữ liệu thống kê, sau đó kiểm chứng thủ công để
                đảm bảo độ chính xác.
              </p>
              <div className="contribution">
                <strong>Đóng góp:</strong> Gợi ý search operators, nguồn chính
                thống (GSO, Đảng)
              </div>
            </div>
          </div>
        </section>

        <section className="ai-prompts">
          <h2>📝 Các Prompt chính đã sử dụng</h2>

          <div className="prompts-container">
            <div className="prompt-group">
              <h3>🔍 Với Grok (xAI)</h3>
              <div className="prompt-item">
                <div className="prompt-number">1</div>
                <div className="prompt-content">
                  <p>
                    "Hướng dẫn chi tiết cách thực hiện website tương tác về
                    Chiến thắng Điện Biên Phủ: cấu trúc HTML, code JS cho
                    timeline lịch sử, và minh bạch AI."
                  </p>
                </div>
              </div>
              <div className="prompt-item">
                <div className="prompt-number">2</div>
                <div className="prompt-content">
                  <p>
                    "Phân tích vai trò lãnh đạo của Đảng trong chiến dịch Điện
                    Biên Phủ. Làm rõ các quyết định chiến lược và ý nghĩa lịch
                    sử."
                  </p>
                </div>
              </div>
            </div>

            <div className="prompt-group">
              <h3>💬 Với ChatGPT (OpenAI)</h3>
              <div className="prompt-item">
                <div className="prompt-number">1</div>
                <div className="prompt-content">
                  <p>
                    "Gợi ý code HTML/CSS/JS cho website hiển thị nội dung lịch
                    sử Điện Biên Phủ, với interactive quiz và timeline."
                  </p>
                </div>
              </div>
              <div className="prompt-item">
                <div className="prompt-number">2</div>
                <div className="prompt-content">
                  <p>
                    "Dàn ý chi tiết về Điện Biên Phủ trong lòng Tổ quốc hôm nay,
                    kết nối với tinh thần thời đại 4.0."
                  </p>
                </div>
              </div>
            </div>

            <div className="prompt-group">
              <h3>🎨 Với Claude (Anthropic)</h3>
              <div className="prompt-item">
                <div className="prompt-number">1</div>
                <div className="prompt-content">
                  <p>
                    "Gợi ý thiết kế giao diện website responsive về Chiến thắng
                    Điện Biên Phủ: Trang chủ, lý thuyết, thực tiễn, quiz và
                    footer minh bạch AI."
                  </p>
                </div>
              </div>
              <div className="prompt-item">
                <div className="prompt-number">2</div>
                <div className="prompt-content">
                  <p>
                    "Tạo React components với routing cho website giáo dục lịch
                    sử, đảm bảo accessibility và performance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ai-principles">
          <h2>⚖️ Nguyên tắc sử dụng AI có trách nhiệm</h2>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">✅</div>
              <h3>Minh bạch</h3>
              <p>
                Công khai rõ ràng việc sử dụng AI trong từng bước phát triển.
                Không che giấu hay làm mơ hồ vai trò của AI trong quá trình tạo
                nội dung.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">🔍</div>
              <h3>Kiểm chứng</h3>
              <p>
                Tất cả thông tin từ AI đều được kiểm tra và xác minh từ nguồn
                chính thống như văn kiện Đảng, tài liệu lịch sử và các nguồn học
                thuật đáng tin cậy.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">📚</div>
              <h3>Học thuật</h3>
              <p>
                Sử dụng AI như công cụ hỗ trợ, không thay thế tư duy phản biện
                và nghiên cứu độc lập. AI là phương tiện, không phải mục đích.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h3>Chính xác</h3>
              <p>
                Ưu tiên độ chính xác và trích dẫn đúng nguồn hơn là tốc độ hoàn
                thành. Mọi thông tin đều phải có cơ sở lịch sử và khoa học vững
                chắc.
              </p>
            </div>
          </div>
        </section>

        <section className="ai-disclaimer">
          <h2>⚠️ Lưu ý quan trọng</h2>
          <div className="disclaimer-content">
            <div className="disclaimer-box">
              <p>
                <strong>Nội dung học thuật:</strong> Tất cả các thông tin lịch
                sử, dữ liệu và phân tích trong website này đã được kiểm chứng
                với tài liệu chính thống. AI chỉ đóng vai trò hỗ trợ tổ chức và
                trình bày thông tin.
              </p>
            </div>
            <div className="disclaimer-box">
              <p>
                <strong>Trách nhiệm nội dung:</strong> Nhóm tác giả chịu trách
                nhiệm hoàn toàn về tính chính xác của nội dung. AI không thay
                thế trách nhiệm học thuật và đạo đức nghiên cứu.
              </p>
            </div>
            <div className="disclaimer-box">
              <p>
                <strong>Mục đích giáo dục:</strong> Website này được phát triển
                nhằm mục đích giáo dục và tôn vinh giá trị lịch sử. Việc sử dụng
                AI minh bạch góp phần vào việc giáo dục về công nghệ có trách
                nhiệm.
              </p>
            </div>
          </div>
        </section>

        <section className="ai-conclusion">
          <div className="conclusion-box">
            <h3>🌟 Kết luận</h3>
            <p>
              Việc sử dụng AI trong phát triển website này là một ví dụ về cách
              công nghệ có thể hỗ trợ học thuật một cách có trách nhiệm. Bằng
              cách minh bạch, kiểm chứng và giữ vững nguyên tắc học thuật, chúng
              ta có thể tận dụng sức mạnh của AI để tạo ra những sản phẩm giáo
              dục chất lượng cao, đồng thời duy trì tính chính xác và đạo đức
              nghiên cứu.
            </p>
            <p className="final-message">
              <strong>Tinh thần Điện Biên Phủ</strong> không chỉ là về chiến
              thắng quân sự, mà còn về tinh thần sáng tạo, học hỏi và ứng dụng
              công nghệ mới để xây dựng đất nước. Việc sử dụng AI có trách nhiệm
              là một phần của tinh thần đó trong thời đại 4.0.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIUsage;
