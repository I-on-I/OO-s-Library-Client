import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Book from "../components/Book";
import AddBook from "../components/AddBook";
import { BookCover } from "book-cover-3d";
interface Review {
  page: string;
  create_date: string;
  content: string;
}

interface Book {
  id: number;
  title: string;
  img: string;
  author: string;
  hash?: string[];
  percent: number;
  reviews: Review[];
}

const books: Book[] = [
  {
    id: 0,
    title: "영어 필사 100일의 기적",
    img: "https://image.aladin.co.kr/product/28258/73/cover500/k212835380_1.jpg",
    author: "김승현",
    hash: ["언어", "영어", "100일의 기적"],
    percent: 65,
    reviews: [
      {
        page: "37",
        create_date: "2024.03.18",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만 참겠습니다.",
      },
      {
        page: "100",
        create_date: "2023.05.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는.90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이`,
      },
    ],
  },
  {
    id: 1,
    title: "퓨처셀프",
    img: "https://image.aladin.co.kr/product/32354/81/cover200/k342935366_1.jpg",
    author: "규찬리",
    percent: 30,
    reviews: [
      {
        page: "14",
        create_date: "2024.03.12",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.",
      },
      {
        page: "100",
        create_date: "2023.06.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.`,
      },
    ],
  },
  {
    id: 3,
    title: "퓨처셀프",
    img: "https://image.aladin.co.kr/product/32354/81/cover200/k342935366_1.jpg",
    author: "규찬리",
    percent: 30,
    reviews: [
      {
        page: "14",
        create_date: "2024.03.12",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.",
      },
      {
        page: "100",
        create_date: "2023.06.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.`,
      },
    ],
  },
  {
    id: 4,
    title: "퓨처셀프",
    img: "https://image.aladin.co.kr/product/32354/81/cover200/k342935366_1.jpg",
    author: "규찬리",
    percent: 30,
    reviews: [
      {
        page: "14",
        create_date: "2024.03.12",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.",
      },
      {
        page: "100",
        create_date: "2023.06.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.`,
      },
    ],
  },
];
const ServiceMoveSection = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const ServiceBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 17px;
  color: black;
  padding: 12px;
  cursor: pointer;
`;
const BookContentWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const BookContent = styled.div`
  display: flex;
  height: 400px;
  border-radius: 12px;
  margin: 20px 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06), 2px 2px 10px rgba(0, 0, 0, 0.4);
`;

const BookInfo = styled.div`
  width: 50%;
  margin-right: 20px;
`;
const BookTitle = styled.div`
  margin-top: 40px;

  font-size: 30px;
  font-weight: 600;
`;
const BookInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const BookAuthor = styled.span`
  color: #8b8b8b;
  width: 30%;
  font-family: Inter;
  margin-right: 15px;
  margin-top: 10px;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReviewSection = styled.div`
  height: 240px;
  overflow: hidden;
`;
const ReviewContent = styled.div`
  margin-bottom: 15px;
`;

interface ReviewContentTextProps {
  expanded: boolean;
}

const ReviewContentText = styled.div`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const ToggleLikeMessage = styled.div`
  color: #2b2a2a;
  font-size: 12px;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: normal;
  margin-top: 9px;
`;
const GraphProgress = styled.div`
  display: flex;

  width: 70%;
  height: 23px;
`;
const SuccessRate = styled.div<{ percentage: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #caecac;
`;
const RemainRate = styled.div<{ percentage: number }>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => 100 - props.percentage}%;
  height: 100%;
  background-color: #7a7ae3;
`;
function MyLibrary() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addBook, addBookIsOpen] = useState(false);
  const [reviewIsOpen, setReviewOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openReview = () => {
    setReviewOpen(true);
  };
  const closeReview = () => {
    setReviewOpen(false);
  };

  const addBookOpenModal = () => {
    addBookIsOpen(true);
  };

  const addBookCloseModal = () => {
    addBookIsOpen(false);
  };

  return (
    <>
      <div>
        <div style={{ borderBottom: "1px solid #dddddd" }}>
          <ServiceMoveSection>
            <Link to="/teamlibrary">
              <ServiceBtn> 팀서재 이동</ServiceBtn>
            </Link>
            <ServiceBtn onClick={addBookOpenModal}>책 추가</ServiceBtn>
          </ServiceMoveSection>
        </div>
        <BookContentWrapper>
          {books.map((book, bookIndex) => (
            <BookContent key={bookIndex}>
              <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <BookInfoSection>
                  <BookAuthor>{book.author}</BookAuthor>{" "}
                  <GraphProgress>
                    <SuccessRate percentage={book.percent}>
                      {book.percent}%
                    </SuccessRate>
                    <RemainRate percentage={book.percent}>
                      {100 - book.percent}%
                    </RemainRate>
                  </GraphProgress>
                </BookInfoSection>

                <div
                  style={{
                    fontWeight: "600",
                    fontStyle: "normal",
                    marginBottom: "12px",
                  }}
                >
                  전체 리뷰
                </div>
                <ReviewSection>
                  {" "}
                  {book.reviews.map((review, reviewIndex) => (
                    <ReviewContent key={reviewIndex}>
                      <div
                        style={{
                          borderTop: " 1px solid #C3C3C3",
                          paddingTop: "7px",
                          color: "#868282",
                          marginBottom: "15px",
                        }}
                      >
                        {review.page}p | {review.create_date} | 수정
                      </div>

                      <ReviewContentText onClick={openReview}>
                        {review.content.slice(0, 70)}...
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
                          }}
                          isOpen={reviewIsOpen}
                          onRequestClose={closeReview}
                        >
                          {review.content}
                          <button onClick={closeReview}>닫기</button>
                        </Modal>
                      </ReviewContentText>

                      <ToggleLikeMessage>
                        {<div>👍 0 ✉️ 답글 0</div>}
                      </ToggleLikeMessage>
                    </ReviewContent>
                  ))}
                </ReviewSection>
              </BookInfo>

              <BookCover>
                {" "}
                <img
                  onClick={openModal}
                  src={book.img}
                  style={{
                    boxShadow: "8px 5px 10px 3px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                  }}
                />
              </BookCover>

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
                }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                <Book bookInfo={book.img} author={book.author}></Book>
                <button onClick={closeModal}>닫기</button>
              </Modal>

              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                isOpen={addBook}
                onRequestClose={addBookCloseModal}
              >
                <AddBook />
                <button onClick={addBookCloseModal}>닫기</button>
              </Modal>
            </BookContent>
          ))}
        </BookContentWrapper>
      </div>
    </>
  );
}

export default MyLibrary;
