import Navbar from "../components/Navbar";
import styled from "styled-components";
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
  bgImg: string;
  content: string;
}

function Main() {
  let datas: Data[] = [
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192300818.jpg",
      content: `2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다. ‘마흔’, ‘오십’, ‘서른’ 등 연령을 키워드로`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198517425.jpg",
      content: `세계적인 베스트셀러 《돈의 심리학》의 저자 모건 하우절이 3년 만에 세상에 내놓은 신작.‘절대 변하지 않는 것들에 대한 23가지 이야기’를 전한다. 출간하자마자 아마존과 뉴욕타임스 베스트셀러 자리에 오르며 아마존 독자들과 오피니언 리더들의 극찬을 받았다.
      이번 책은 돈과 투자 영역은 물론이고, 인간의 본성과 세상의 이치에 관한 이야기를 두루 다루어 한층 더 다층적이고 복합적인 메시지를 담아냈다는 평가를 받는다. 모건 하우절은 사람들은 무엇이 변할 것인지에 대해 늘 관심을 갖지만, 미래에 대비하기 위해서는 오히려 과거에도 지금도 미래에도 변함이 없는‘불변의 법칙’에 대해 알아야 한다고 강조한다. `,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198621504.jpg",
      content: `“나의 결혼식이 열렸어야 했던 날, 형의 장례식이 거행되었다. 그해 가을, 나는 다니던 《뉴요커》를 그만두고 메트로폴리탄 미술관의 경비원으로 지원했다. 그렇게 한동안은 고요하게 서 있고 싶었다`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788901276533.jpg",
      content: `★★★ 세계에서 가장 많이 읽힌 자녀교육 베스트셀러 세계적 가족 심리학자, 가족치료의 1인자 버지니아 사티어의 역작이자 누적 부수 100만 부를 돌파한 책 『아이는 무엇으로 자라는가(`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191777628.jpg",
      content: `양귀자 소설의 힘을 보여준 베스트셀러 『모순』. 1998년에 초판이 출간된 이후 132쇄를 찍으며 여전히 많은 사랑을 받고 있는 작품을, 오래도록 소장할 수 있는 양장본으로 새롭게 선보인다. `,
    },
  ];

  return (
    <div>
      <Navbar />
      <TitleList>
        <AppTitle>앱 이름</AppTitle>
        <AppContent>앱의 내용과 구체적인 서비스 스토리</AppContent>
        <BookContent>
          {datas.map((data, index) => (
            <div key={index}>
              <Book bgImg={data.bgImg} />
              <Context>
                {data.content.length > 70
                  ? data.content.slice(0, 70) + "..."
                  : data.content}
              </Context>
            </div>
          ))}
        </BookContent>
      </TitleList>
    </div>
  );
}

export default Main;
