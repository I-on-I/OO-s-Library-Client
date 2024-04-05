import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
const TitleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;
const AppTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 49px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AppContent = styled.span`
  color: rgba(85, 85, 85, 0.7);
  margin-top: 30px;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BookContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 77px;
`;

const Book = styled.div<{ bgImg: string }>`
  width: 250px;
  height: 348px;
  background: url(${(props) => props.bgImg});
  background-size: contain;
  background-repeat: no-repeat;

  filter: drop-shadow(3px 11px 4px rgba(0, 0, 0, 0.25));
  margin-right: 98px;
  margin-bottom: 20px;
`;
const Context = styled.span`
  display: flex;
  width: 250px;
  height: 76px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface Data {
  book_title: string;
  cover_image_path: string;
  book_content: string;
  aladin_link: string;
}

function Main() {
  let [datas, setDatas] = useState<Data[]>([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get("/books")
      .then((response) => {
        console.log(response.data);

        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(datas);
  }

  return (
    <div>
      <Navbar />
      <TitleList>
        <AppTitle>00의 서재</AppTitle>
        <AppContent>앱의 내용과 구체적인 서비스 스토리</AppContent>
        <BookContent>
          {datas.slice(30, 35).map((data, index) => (
            <div key={index}>
              <a href={data.aladin_link}>
                <Book bgImg={data.cover_image_path}></Book>{" "}
              </a>
              <Context>
                {data.book_content.length > 70
                  ? data.book_content.slice(0, 70) + "..."
                  : data.book_content}
              </Context>
            </div>
          ))}
        </BookContent>
      </TitleList>
    </div>
  );
}

export default Main;
