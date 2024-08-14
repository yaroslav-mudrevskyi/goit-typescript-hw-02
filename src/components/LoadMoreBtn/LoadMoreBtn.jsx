import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleButtonClick }) => {
  return (
    <button className={s.btn} type="button" onClick={handleButtonClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
