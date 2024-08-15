import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
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
