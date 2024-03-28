import React, { useState } from "react";
import styled from "styled-components";

const ReviewContents = styled.div`
  color: black;
  height: auto;
  margin-bottom: 20px;
`;

const ReviewContentText = styled.div`
  font-size: 12px;
  font-weight: 500;
  max-height: 50px;
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

interface Comment {
  id: number;
  content: string;
}

export default function ReviewContent() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: comments.length + 1,
      content: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  const handleCommentDelete = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleCommentEdit = (id: number, content: string) => {
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
      <ReviewContents>
        <div
          style={{
            borderTop: "1px solid #C3C3C3",
            paddingTop: "7px",
            color: "#868282",
            marginBottom: "15px",
          }}
        >
          100p | 2024.3.10
        </div>
        <ReviewContentText>
          이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고
          배고픕니다. 이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에
          읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고
          점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다.
          축구하고 점심시간에 읽고 배고픕니다.오늘은 다함께 맥도날드를 먹는데
          저는 2개 먹고 싶지만....
        </ReviewContentText>
      </ReviewContents>{" "}
      <CommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />

        <CommentButton type="submit">Add Comment</CommentButton>

        <div style={{ marginTop: "20px" }}>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <button
                onClick={() => handleCommentEdit(comment.id, comment.content)}
              >
                Edit
              </button>
              <button onClick={() => handleCommentDelete(comment.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </CommentForm>
      <ReviewContents>
        <div
          style={{
            borderTop: "1px solid #C3C3C3",
            paddingTop: "7px",
            color: "#868282",
            marginBottom: "15px",
          }}
        >
          36p | 2024.3.7
        </div>
        <ReviewContentText>
          이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고
          배고픕니다. 이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에
          읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다. 축구하고
          점심시간에 읽고 배고픕니다.이 책을 읽고 수학을 2등급 받았습니다.
          축구하고 점심시간에 읽고 배고픕니다.오늘은 다함께 맥도날드를 먹는데
          저는 2개 먹고 싶지만....
        </ReviewContentText>
      </ReviewContents>
      <CommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />

        <CommentButton type="submit">Add Comment</CommentButton>

        <div style={{ marginTop: "20px" }}>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <button
                onClick={() => handleCommentEdit(comment.id, comment.content)}
              >
                Edit
              </button>
              <button onClick={() => handleCommentDelete(comment.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </CommentForm>
    </>
  );
}
