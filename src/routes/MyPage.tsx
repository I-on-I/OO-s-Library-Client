import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MyPageSection = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 14px;
  height: 100%;
  display: flex;
  min-width: 320px;
`;

const PictureBox = styled.div`
  margin-bottom: 16px;
`;

const Inner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  background-image: url("https://d2j6uvfek9vas1.cloudfront.net/profile/6152765c5ed21.png");
`;

function MyPage() {
  const { id } = useParams();
  return (
    <MyPageSection>
      <PictureBox>
        <PictureBox>
          <Inner>
            <ImageBox></ImageBox>
          </Inner>
        </PictureBox>
      </PictureBox>
    </MyPageSection>
  );
}
export default MyPage;
