import React from "react";
import "./button.css";

type IProps = {
  buttonName: string | null;
  buttonLink?: string;
  onClick?: () => void;
};

const Button: React.FC<IProps> = ({ buttonName, buttonLink, onClick }) => {
  return (
    <div className="cod__iconic-btn">
      <div className="cod__iconic-btn-container">
        <a href={buttonLink} onClick={onClick}>
          {buttonName}
        </a>
      </div>
    </div>
  );
};

export default Button;
