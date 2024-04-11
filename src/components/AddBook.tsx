import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
`;

const SelectWrapper = styled.div`
  margin-bottom: 10px;
`;

const SearchResults = styled.div`
  display: flex;

  flex-wrap: wrap;
`;

const SearchResult = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(33.33% - 20px);

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ResultLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AddBook() {
  interface Data {
    bookPk: number;
    bookTitle: string;
    bookAuthor: string;
    bookPublisher: string;
    coverImagePath: string;
    aladinLink: string;
    bookPage: number;
    bookContent: string;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Data[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `books?${selectedCategory}sortOrder=desc`
      );
      const results = response.data.filter((data: Data) =>
        data.bookTitle.includes(searchTerm)
      );
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>책 추가</h1>

      <SelectWrapper>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">선택</option>
          <option value="유아">유아</option>
          <option value="대학교재/전문서적">대학교재/전문서적</option>
          <option value="인문학">인문학</option>
          <option value="소설/시/희곡">소설/시/희곡</option>
          <option value="잡지">잡지</option>
          <option value="에세이">에세이</option>
          <option value="외국어">외국어</option>
          <option value="어린이">어린이</option>
          <option value="컴퓨터/모바일">컴퓨터/모바일</option>
          <option value="사회과학">사회과학</option>
          <option value="역사">역사</option> <option value="과학">과학</option>{" "}
          <option value="좋은부모">좋은부모</option>{" "}
          <option value="청소년">청소년</option>{" "}
          <option value="만화">만화</option> <option value="여행">여행</option>{" "}
          <option value="초등학교참고서">초등학교참고서</option>{" "}
          <option value="수험서/자격증">수험서/자격증</option>
        </select>
      </SelectWrapper>
      <input
        placeholder="책을 검색해주세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      <SearchResults>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <SearchResult key={index}>
              <ResultLink
                href={result.aladinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{result.bookTitle}</h2>
                <img src={result.coverImagePath} alt={result.bookTitle} />
                <p>
                  {result.bookContent.length > 40
                    ? result.bookContent.slice(0, 40) + "..."
                    : result.bookContent}
                </p>
                알라딘 링크
              </ResultLink>
            </SearchResult>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </SearchResults>
    </Container>
  );
}
