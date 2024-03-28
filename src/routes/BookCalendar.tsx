import { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import moment from "moment";
import "../App.css";
import Book from "../components/Book";
import { BookCover } from "book-cover-3d";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
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
const marks = ["2024-03-10", "2024-03-12"];
export default function BookCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        tileContent={({ date, view }) => {
          const html = [];
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(
              <img
                onClick={openModal}
                style={{ width: "150px", height: "200px", cursor: "pointer" }}
                src={books[0].img}
              ></img>
            );
          }
          return (
            <>
              <div>{html}</div>
            </>
          );
        }}
      />{" "}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Book />
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}
