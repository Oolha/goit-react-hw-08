import "./Background.css";

const Background = ({ children }) => {
  return (
    <>
      <div className="square top-left"></div>
      <div className="square bottom-right"></div>
    </>
  );
};

export default Background;
