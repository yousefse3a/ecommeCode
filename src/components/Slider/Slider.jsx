import React, { useState } from "react";
import {
  Arrow,
  Container,
  Desc,
  ImgContainer,
  ShopBtn,
  SiderItem,
  SliderImg,
  SliderInfo,
  Title,
  Warper,
} from "./style";
import { sliderItems } from "../../Data";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@mui/icons-material";
export default function Slider() {
  const [sliderIndex, setsliderIndex] = useState(0);
  function handleClick(type) {
    if (type === "left") {
      setsliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setsliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
    console.log(sliderIndex);
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Warper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => {
          return (
            <SiderItem bg={item.bg} key={item.id}>
              <ImgContainer>
                <SliderImg src={item.img} />
              </ImgContainer>
              <SliderInfo>
                <Title> {item.title}</Title>
                <Desc>{item.desc}</Desc>
                <ShopBtn>Shop Now</ShopBtn>
              </SliderInfo>
            </SiderItem>
          );
        })}
      </Warper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
