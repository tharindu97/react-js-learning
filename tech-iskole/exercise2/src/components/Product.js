import ProductDescription from "./ProductDescription";

function Product({name, price}) {
  return (
    <div>
      <ProductDescription>
      <h2>{name}</h2>
      <h3>RS:- {price}</h3>
      </ProductDescription>
    </div>
  );
}

export default Product;