import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const PageCoverContent = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
`;

const PageCover = React.forwardRef((props, ref) => {
  return (
    <PageCoverContent
      ref={ref}
      data-density="hard"
      backgroundImg={props.backgroundImg}
    >
      <div>
        <h2>{props.children}</h2>
      </div>
    </PageCoverContent>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function Book(props) {
  const bookContent = [
    "", // 페이지 번호와 배열 인덱스를 맞추기 위해 비어있는 문자열 추가
    "Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.",
    "He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that...",
    "Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested...",
  ];

  const handleStart = () => {
    const utterance = new SpeechSynthesisUtterance(bookContent[1]);
    speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
    }
  };

  const handleResume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  };

  const handleReadPageContent = (pageNumber) => {
    const content = bookContent[pageNumber];

    if (content) {
      const utterance = new SpeechSynthesisUtterance(content);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <body>
      <div style={{ marginTop: "40px" }}>
        {" "}
        <div className="bookSection">
          <HTMLFlipBook
            width={400}
            height={600}
            minWidth={315}
            maxWidth={1000}
            minHeight={420}
            maxHeight={1350}
            showCover={true}
            flippingTime={1000}
            style={{
              margin: "0 auto",
              cursor: "pointer",
            }}
            maxShadowOpacity={0.5}
            className="album-web"
          >
            <PageCover backgroundImg={props.bookInfo}></PageCover>
            <PageCover>{props.author}</PageCover>

            <Page number="1">
              <hr></hr>
              <p contentEditable="true">
                <button onClick={handleStart}>문장 읽기 시작</button>
                <button onClick={handlePause}>멈추기</button>
                <button onClick={handleResume}>다시 시작</button>
              </p>
            </Page>
            <Page number="2">
              <hr></hr>
              <p>{bookContent[2]}</p>
              <button onClick={() => handleReadPageContent(2)}>
                문장 읽기 시작
              </button>
            </Page>
            <Page number="3">
              <hr></hr>
              <p>{bookContent[3]}</p>
              <button onClick={() => handleReadPageContent(3)}>
                문장 읽기 시작
              </button>
            </Page>
            <Page number="4">
              <hr></hr>
            </Page>
            <PageCover></PageCover>
            <PageCover>끄읕</PageCover>
          </HTMLFlipBook>
          <br></br>
          <br></br>
        </div>
      </div>
    </body>
  );
}

export default Book;
