import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleButtonClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleButtonClick }) => {
  return (
    <button className={s.btn} type="button" onClick={handleButtonClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
