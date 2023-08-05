import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.p`
  font-family: "Nanum Pen Script";
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 50%;
  animation: scrollAnimation 1s infinite;
  &:focus {
    outline: none;
  }
  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ReasonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 70%;
`;

const ReasonImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 20px;
`;

const ReasonText = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
`;

const Main = () => {
  const images = [
    "Banner1.jpg",
    "Banner2.jpg",
    "Banner3.jpg",
    "Banner4.jpg",
    "Banner5.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const reasons = [
    { img: "full1.jpg", text: "너가 좋은 첫 번째 이유, <br/> 잘 생겨서," },
    {
      img: "v1.jpg",
      text: "너가 좋은 두 번째 이유, <br/> 너의 모든 행동이 너무 예뻐서,",
    },
    {
      img: "teacher.jpg",
      text: "너가 좋은 세 번째 이유, <br/> 언제나 주어진 일에 최선을 다해서,",
    },
    {
      img: "hallym.jpg",
      text: "너가 좋은 네 번째 이유, <br/> 너의 웃는 얼굴이 항상 설레서,",
    },
    {
      img: "hackaton.jpg",
      text: "너가 좋은 다섯 번째 이유, <br/> 나에겐 표현이 항상 솔직해서",
    },
  ];

  return (
    <BannerContainer>
      <Title>😼 All About Deuni 😼</Title>
      <ImageContainer>
        <SlideButton onClick={prevSlide} style={{ left: "10px" }}>
          &#10094;
        </SlideButton>
        <Image src={`/images/${images[current]}`} alt="" />
        <SlideButton onClick={nextSlide} style={{ right: "10px" }}>
          &#10095;
        </SlideButton>
      </ImageContainer>
      <ScrollButton>&#8595;</ScrollButton>
      <ReasonContainer>
        {reasons.map((reason, index) => (
          <ReasonItem key={index}>
            {index % 2 === 0 ? (
              <>
                <ReasonImage src={`/images/${reason.img}`} alt="" />
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
              </>
            ) : (
              <>
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
                <ReasonImage src={`/images/${reason.img}`} alt="" />
              </>
            )}
          </ReasonItem>
        ))}
      </ReasonContainer>
      <Title>너의 24번째 생일을 진심으로 축하해 🐶</Title>
    </BannerContainer>
  );
};

export default Main;
