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
  percent: string;
  reviews: Review[];
}

const books: Book[] = [
  {
    id: 0,
    title: "영어 필사 100일의 기적",
    img: "https://image.aladin.co.kr/product/28258/73/cover500/k212835380_1.jpg",
    author: "김승현",
    hash: ["언어", "영어", "100일의 기적"],
    percent: "65",
    reviews: [
      {
        page: "37",
        create_date: "2024.03.18",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다.오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만....",
      },
      {
        page: "100",
        create_date: "2023.05.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는....`,
      },
    ],
  },
  {
    id: 1,
    title: "퓨처셀프",
    img: "https://image.aladin.co.kr/product/32354/81/cover200/k342935366_1.jpg",
    author: "규찬리",
    percent: "30",
    reviews: [
      {
        page: "14",
        create_date: "2024.03.12",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만....",
      },
      {
        page: "100",
        create_date: "2023.06.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는....`,
      },
    ],
  },
];

const BookContent = styled.div`
  display: flex;
  position: relative;
  margin: 100px 90px;
  height: 417px;
`;

const BookInfo = styled.div`
  width: 300px;
  margin-right: 121px;
`;
const BookTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const BookInfoSection = styled.div`
  display: flex;
  align-items: center;
`;

const BookAuthor = styled.span`
  color: #8b8b8b;
  font-family: Inter;
  margin-right: 15px;
  margin-top: 10px;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReviewContent = styled.div`
  color: black;
  height: 150px;
`;

interface ReviewContentTextProps {
  expanded: boolean;
}

const ReviewContentText = styled.div<ReviewContentTextProps>`
  font-size: 12px;
  font-weight: 500;
  max-height: ${({ expanded }) => (expanded ? "none" : "50px")};
  overflow: hidden;
  cursor: pointer;

  text-decoration: underline;
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
  margin-bottom: 21px;
`;

const ServiceBtn = styled.div``;
function MyLibrary() {
  const [expandedReviews, setExpandedReviews] = useState<boolean[][]>(
    Array(books.length).fill(Array(0).fill(false))
  );

  const toggleReviewExpand = (bookIndex: number, reviewIndex: number) => {
    const updatedExpandedReviews = [...expandedReviews];
    updatedExpandedReviews[bookIndex][reviewIndex] =
      !updatedExpandedReviews[bookIndex][reviewIndex];
    setExpandedReviews(updatedExpandedReviews);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [addBook, addBookIsOpen] = useState(false);

  const addBookOpenModal = () => {
    addBookIsOpen(true);
  };

  const addBookCloseModal = () => {
    addBookIsOpen(false);
  };
  return (
    <>
      <div>
        <Link to="/teamlibrary">
          {" "}
          <button style={{ width: "100px", padding: "10px" }}>
            {" "}
            팀서재 이동
          </button>
        </Link>

        <button
          onClick={addBookOpenModal}
          style={{ width: "100px", padding: "10px" }}
        >
          책 추가
        </button>

        {books.map((book, bookIndex) => (
          <BookContent key={bookIndex}>
            <BookInfo>
              <BookTitle>{book.title}</BookTitle>
              <BookInfoSection>
                <BookAuthor>{book.author}</BookAuthor>
              </BookInfoSection>
              <div
                style={{
                  display: "flex",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  marginTop: "13px",
                  marginBottom: "17px",
                }}
              >
                <div
                  style={{
                    width: "106px",
                    height: "33px",
                    backgroundColor: "#F6f1dE",
                  }}
                >
                  {book.percent}%
                </div>
                <div
                  style={{
                    width: "200px",
                    height: "33px",
                    backgroundColor: "#D6BD97",
                  }}
                ></div>
              </div>
              <div
                style={{
                  fontWeight: "600",
                  fontStyle: "normal",
                  marginBottom: "12px",
                }}
              >
                전체 리뷰
              </div>
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

                  <ReviewContentText
                    expanded={expandedReviews[bookIndex][reviewIndex]}
                    onClick={() => toggleReviewExpand(bookIndex, reviewIndex)}
                    style={{ textDecoration: "none" }} // 추가된 부분
                  >
                    {review.content}
                  </ReviewContentText>

                  <ToggleLikeMessage>
                    <div
                      onClick={() => toggleReviewExpand(bookIndex, reviewIndex)}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      {expandedReviews[bookIndex][reviewIndex]
                        ? "접기 ⬆️"
                        : "펼치기 ⬇️"}
                    </div>
                    {<div style={{ textAlign: "right" }}>👍 0 ✉️ 답글 0</div>}
                  </ToggleLikeMessage>
                </ReviewContent>
              ))}
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
              <Book />
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
              isOpen={addBook}
              onRequestClose={addBookCloseModal}
            >
              <AddBook />
              <button onClick={addBookCloseModal}>닫기</button>
            </Modal>
          </BookContent>
        ))}
      </div>
    </>
  );
}

export default MyLibrary;
