import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({ name, setIsClick, setValue, clickFunc }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        clickFunc(name);
      }}
      onMouseOver={(e) => {
        e.target.className = "over";
      }}
      onMouseLeave={(e) => {
        e.target.className = "";
      }}
    >
      {name}
    </div>
  );
};

export default Select;
