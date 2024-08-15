const ImageCard = ({ handleOpenModal, urls, alt_description }) => {
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
