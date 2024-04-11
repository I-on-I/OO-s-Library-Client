import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewContents = styled.div`
  color: black;
  height: auto;
  margin-bottom: 20px;
`;

const ReviewContentText = styled.div`
  font-size: 12px;
  font-weight: 500;
  max-height: 50px;
  margin-bottom: 30px;
  overflow: hidden;
  cursor: pointer;
`;

const CommentForm = styled.form`
  margin-top: 20px;
`;

const CommentInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const CommentButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

// 삭제 버튼 스타일
const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export default function ReviewContent() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [reviewData, setReviewData] = useState({ data: [] });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("/comment");
      const modifiedData = response.data.data.map((item) => ({
        ...item,
        created_date: item.created_date.replace("T", " "),
      }));
      setReviewData({ ...response.data, data: modifiedData });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: comments.length + 1,
      content: commentText,
      member_pk: "현재 사용자",
      created_date: new Date().toISOString().replace("T", " "),
    };

    setComments([...comments, newComment]);

    setReviewData((prevData) => ({
      ...prevData,
      data: [...prevData.data, newComment],
    }));
  };

  const handleCommentDelete = (id) => {
    // 해당 id와 일치하는 댓글을 삭제
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);

    // reviewData에서도 해당 댓글을 찾아 삭제
    const updatedReviewData = {
      ...reviewData,
      data: reviewData.data.filter((comment) => comment.id !== id),
    };
    setReviewData(updatedReviewData);
  };
  const handleCommentEdit = (id, content) => {
    const editedComment = prompt("Edit Comment:", content);
    if (editedComment === null || editedComment.trim() === "") return;
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, content: editedComment } : comment
      )
    );
  };

  return (
    <>
      {reviewData && reviewData.data.length > 0 && (
        <ReviewContents>
          {reviewData.data.map((data) => (
            <div key={data.comment_pk}>
              <div
                style={{
                  borderTop: "1px solid #C3C3C3",
                  paddingTop: "7px",
                  color: "#868282",
                  marginBottom: "5px",
                }}
              >
                {data.member_pk} 님 | {data.created_date}
                {/* 삭제 버튼 */}
                <DeleteButton onClick={() => handleCommentDelete(data.id)}>
                  Delete
                </DeleteButton>
              </div>
              <h1
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                  fontWeight: "900",
                }}
              >
                {data.comment_title}
              </h1>
              <ReviewContentText>{data.comment_content}</ReviewContentText>
            </div>
          ))}
        </ReviewContents>
      )}
      <CommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
        <CommentButton type="submit">Add Comment</CommentButton>
      </CommentForm>
    </>
  );
}
