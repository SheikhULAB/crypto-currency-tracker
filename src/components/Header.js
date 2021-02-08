import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1 className="text-center text-warning mt-3 mb-4">
        <span className="coinStar" onClick={handleClick}>
          CoinStar
        </span>
      </h1>
    </div>
  );
};

export default Header;
