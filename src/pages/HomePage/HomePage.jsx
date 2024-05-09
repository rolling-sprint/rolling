import { Link } from "react-router-dom";
import Card from "./Card/Card";
import IntroEmoji from "../../assets/images/Intro_Emoji.png";
import IntroRollingPaper from "../../assets/images/Intro_RollingPaper.png";

function HomePage() {
  return (
    <div className="page-wrapper">
      <section>
        <Card>
          <Card.Panel>
            <div>Point.01</div>
            <Card.Title
              title={{
                content: (
                  <>
                    누구나 손쉽게, 온라인
                    <br /> 롤링 페이퍼를 만들 수 있어요
                  </>
                ),
                headType: "h2",
              }}
            />
            <Card.Description description="로그인 없이 자유롭게 만들어요." />
          </Card.Panel>
          <Card.Panel>
            <Card.Thumbnail
              src={IntroRollingPaper}
              alt="인트로 롤링페이퍼 이미지"
              fetchpriority="high"
            />
          </Card.Panel>
        </Card>
        <Card>
          <Card.Panel>
            <div>Point.02</div>
            <Card.Title
              title={{
                content: (
                  <>
                    서로에게 이모지로 감정을
                    <br />
                    {" 표현해보세요"}
                  </>
                ),
                headType: "h2",
              }}
            />
            <Card.Description description="롤링 페이퍼에 이모지를 추가할 수 있어요." />
          </Card.Panel>
          <Card.Panel>
            <Card.Thumbnail
              src={IntroEmoji}
              alt="인트로 이모지 이미지"
              fetchpriority="high"
            />
          </Card.Panel>
        </Card>
      </section>
      <div>
        <Link>구경해보기</Link>
      </div>
    </div>
  );
}

export default HomePage;
