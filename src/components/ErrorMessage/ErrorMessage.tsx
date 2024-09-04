import React from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  title: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title }) => {
  return <div className={s.title}>{title}</div>;
};

export default ErrorMessage;
