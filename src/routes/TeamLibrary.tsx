import styled from "styled-components";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import ReviewContent from "../components/ReviewContent";

interface BookProps {
  color: string;
}

const LibraryFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto; /* 세로 스크롤 */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  overflow: auto;
`;

const BookShelf = styled.div`
  margin-right: 42px;
  width: 535px;
  height: 320px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  background: #f2de96;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

const Book = styled.div<BookProps>`
  width: 50px;
  height: 280px;
  position: relative;
  margin-left: 2px;
  transform-style: preserve-3d;
  background-color: ${(props) => props.color}; /* 랜덤 색상 할당 */
  transform: translateZ(0) rotateY(0);
  transition: transform 1s;
  &:hover {
    z-index: 1;
    transform: rotateX(-25deg) rotateY(-10deg) rotateZ(-5deg) translateY(50px)
      translateX(-30px);
  }
`;

const Side = styled.div`
  position: absolute;
  border: 2px solid black;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  text-align: center;
  transform-origin: center left;
`;

const Spine = styled(Side)`
  position: relative;
  width: 50px;
  height: 280px;
  transform: rotateY(0deg) translateZ(0px);
`;

const SpineTitle = styled.div`
  margin: 2px;
  position: absolute;
  top: 5px;
  left: 0px;
  font-size: 15px;
  color: black;
  writing-mode: vertical-rl;
  text-orientation: sideways;
`;

const SpineAuthor = styled.div`
  position: absolute;
  color: black;
  bottom: 0px;
  left: 0%; /* no idea why 20% centers it */
  font-size: 10px;
`;

const Top = styled(Side)`
  width: 50px;
  height: 190px;
  top: -2px;
  background-image: linear-gradient(90deg, white 90%, gray 10%);
  background-size: 5px 5px;
  transform: rotateX(90deg) translateZ(95px) translateY(-95px);
`;

const Cover = styled(Side)`
  width: 190px;
  height: 280px;
  top: 0px;
  background-image: url("https://image.aladin.co.kr/product/32354/81/cover200/k342935366_1.jpg");
  background-size: contain;
  background-repeat: round;
  left: 50px;
  transform: rotateY(90deg) translateZ(0);
  transition: transform 1s;
`;
export default function TeamLibrary() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const colors: string[] = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3357",
    "#33FFFE",
    "#FE33FF",
    "#C4FF33",
    "#81c570",
    "#b29a49",
    "#31714f",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>

      <LibraryFrame>
        <BookShelf>
          <Book
            color={getRandomColor()}
            onClick={openModal}
            style={{ cursor: "pointer" }}
          >
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>b</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>a</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor></SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>
        </BookShelf>{" "}
        <BookShelf>
          {" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>
        </BookShelf>
        <BookShelf>
          {" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>
        </BookShelf>
        <BookShelf>
          {" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>
        </BookShelf>
        <BookShelf>
          {" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>{" "}
          <Book color={getRandomColor()}>
            <Spine>
              <SpineTitle>Dune</SpineTitle>
              <SpineAuthor>승현</SpineAuthor>
            </Spine>
            <Top></Top>
            <Cover></Cover>
          </Book>
        </BookShelf>
      </LibraryFrame>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the opacity of the shadow here
            zIndex: 1000,
          },
          content: {
            position: "absolute",
            width: "800px",
            height: "600px",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust to center modal exactly
            border: "1px solid #ccc",

            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ReviewContent />
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
}
