import { Link } from "react-router-dom";
import IntroEmoji from "../../assets/images/Intro_Emoji.png";
import IntroRollingPaper from "../../assets/images/Intro_RollingPaper.png";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.home_wrapper}>
      <section className={styles.contents}>
        <div className={`${styles.intro_card} ${styles.rolling}`}>
          <div className={styles.intro_card_content}>
            <div className={styles.intro_card_badge}>Point.01</div>
            <h2 className={styles.intro_card_title}>
              누구나 손쉽게, 온라인
              <br className={styles.line_break} /> 롤링 페이퍼를 만들 수 있어요
            </h2>
            <p className={styles.intro_card_description}>
              로그인 없이 자유롭게 만들어요.
            </p>
          </div>
          <div className={styles.intro_image_rolling_container}>
            <img
              src={IntroRollingPaper}
              alt="인트로 롤링페이퍼 이미지"
              className={styles.intro_image_rolling}
              fetchpriority="high"
            />
          </div>
        </div>
        <div className={`${styles.intro_card} ${styles.emoji}`}>
          <div className={styles.intro_card_content}>
            <div className={styles.intro_card_badge}>Point.02</div>
            <h2 className={styles.intro_card_title}>
              서로에게 이모지로 감정을
              <br className={styles.line_break} /> 표현해보세요
            </h2>
            <p className={styles.intro_card_description}>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </p>
          </div>
          <div className={styles.intro_image_emoji_container}>
            <img
              src={IntroEmoji}
              alt="인트로 이모지 이미지"
              className={styles.intro_image_emoji}
              fetchpriority="high"
            />
          </div>
        </div>
      </section>
      <div className={styles.bottom}>
        <Link to={"/list"} className={styles.bottom_cta}>
          구경해보기
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
