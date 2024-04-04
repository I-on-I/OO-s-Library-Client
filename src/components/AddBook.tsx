import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddBook() {
  interface Data {
    book_title: string;
    cover_image_path: string;
    book_content: string;
    aladin_link: string;
  }

  const [datas, setDatas] = useState<Data[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Data[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get("/books")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(datas);

  const handleSearch = () => {
    const results = datas.filter((data) =>
      data.book_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <>
      <div style={{ height: "500px" }}>
        <h1>책 추가 하자!</h1>
        <input
          placeholder="책을 검색해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        <div>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index}>
                <a
                  href={result.aladin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{result.book_title}</h2>
                  <img src={result.cover_image_path} alt={result.book_title} />
                  <p>{result.book_content}</p>
                  알라딘 링크
                </a>
              </div>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
}
