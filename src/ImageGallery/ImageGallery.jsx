import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(({ id, alt_description, urls }) => (
        <li key={id} className={s.item}>
          <img src={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
