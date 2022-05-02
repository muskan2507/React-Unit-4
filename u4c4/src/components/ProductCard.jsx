import { Detail, Flex, Img, ImgBox, Title } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        <ImgBox>
          <Img src={item.image} />
        </ImgBox>
        <Title>{item.title}</Title>
        <Detail>{item.brand}</Detail>
        <Detail>{item.category}</Detail>
        <Detail>Rs. {item.price}</Detail>
      </Flex>
    </>
  );
};
