import React from "react";
import { Modal } from "../../App";

interface ImageCardProps {
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  handleOpenModal: (image: Modal) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  handleOpenModal,
  urls,
  alt_description,
}) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal({ url: urls.regular, alt_description })}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
