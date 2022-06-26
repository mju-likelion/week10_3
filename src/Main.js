import "../src/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="MainWrapper">
      <div className="TitleBox">
        <p>멋쟁이 사자처럼(명지대)</p>
      </div>
      <div className="TeamBox">
        <Link to="/President">
          <button type="button" className="buttonStyle">
            대표
          </button>
        </Link>
        <Link to="/Manage">
          <button type="button" className="buttonStyle">
            운영팀
          </button>
        </Link>
        <Link to="/Education">
          <button type="button" className="buttonStyle">
            교육팀
          </button>
        </Link>
        <Link to="/Promotion">
          <button type="button" className="buttonStyle">
            홍보팀
          </button>
        </Link>
        <Link to="/Development">
          <button type="button" className="buttonStyle">
            개발팀
          </button>
        </Link>
      </div>
      <p className="pStyle">안녕하세요 3조입니다!💖</p>
      <p className="pStyle2">어느 팀을 구경하시겠습니까?</p>
    </div>
  );
};

export default Main;
