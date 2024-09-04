import React from "react";
import { Modal } from "../../App";
import { PhotoData } from "../../services/serviceAPI";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: PhotoData[];
  handleOpenModal: (image: Modal) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenModal,
}) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard handleOpenModal={handleOpenModal} {...image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
