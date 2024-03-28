import { useState } from "react";
export default function AddBook() {
  const [value, setValue] = useState();
  return (
    <>
      <div style={{ height: "500px" }}>
        <h1>책 추가 하자!</h1>
        <input placeholder="책을 검색해주세요" />
        <button>검색</button>
      </div>
    </>
  );
}
