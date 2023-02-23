function ButtonComponent({ onClick, children, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponent;
