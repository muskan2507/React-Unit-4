import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, auto);
  width: 60%;
  margin: auto;
  margin-top: 12px;
`;

export const Select = styled.select``;

export const Flex = styled.div`
  padding: 10px;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  padding: 10px;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 355px;
  overflow: hidden;
  border-radius: 9px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  font-size: 18px;
  color: #181818;
  font-weight: bold;
  margin: 4px 0;
`;
export const Detail = styled.p`
  font-size: 14px;
  color: #181818;
  margin: 4px 0;
`;
