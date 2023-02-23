function ImageComponent({ src, alt, count, person }) {
  return (
    <div className={person}>
      <img src={src} alt={alt} />
      <span className="counter">{count}</span>
    </div>
  );
}

export default ImageComponent;
