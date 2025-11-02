import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⭐</span>
          <span className="logo-text">Điện Biên Phủ 1954</span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              🏠 Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/theory"
              className={location.pathname === "/theory" ? "active" : ""}
            >
              📚 Lý thuyết
            </Link>
          </li>
          <li>
            <Link
              to="/practice"
              className={location.pathname === "/practice" ? "active" : ""}
            >
              🇻🇳 Thực tiễn VN
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className={location.pathname === "/quiz" ? "active" : ""}
            >
              🎲 Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/ai-usage"
              className={location.pathname === "/ai-usage" ? "active" : ""}
            >
              🤖 AI Usage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
