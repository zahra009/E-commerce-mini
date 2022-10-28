const products = ({ product }) => {
  return (
    <div className="Product">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>
        <b>&#8358;{product.price}</b>
      </p>
    </div>
  );
};

export default products;
