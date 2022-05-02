import { Flex } from "./Styled";

export const ProductCard = ({ title,id,image,brand,price }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <h4>{title}</h4>
        <img src={image}/>
         <p>{brand}</p>
         <p>Price:{price}</p>
      </Flex>
    </>
  );
};
