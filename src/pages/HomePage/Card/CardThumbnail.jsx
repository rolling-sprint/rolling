function CardThumbnail({ src, alt, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

export default CardThumbnail;
