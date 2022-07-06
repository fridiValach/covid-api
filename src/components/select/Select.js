import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({ name, setIsClick, setValue, clickFunc }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        clickFunc(name);
      }}
    >
      {name}
    </div>
  );
};

export default Select;
