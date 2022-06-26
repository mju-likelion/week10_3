import "../src/Main.css";

const Main = () => {
  return (
    <div className="MainWrapper">
      <div className="TitleBox">
        <p>멋쟁이 사자처럼(명지대)</p>
      </div>
      <div className="TeamBox">
        <button type="button" className="buttonStyle">
          대표
        </button>
        <button type="button" className="buttonStyle">
          운영팀
        </button>
        <button type="button" className="buttonStyle">
          교육팀
        </button>
        <button type="button" className="buttonStyle">
          홍보팀
        </button>
        <button type="button" className="buttonStyle">
          개발팀
        </button>
      </div>
      <p className="pStyle">안녕하세요 3조입니다!💖</p>
      <p className="pStyle2">어느 팀을 구경하시겠습니까?</p>
    </div>
  );
};

export default Main;
