import CardList from "./components/cardList/CardList";
import styles from "./PaperListPage.module.scss";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function PaperListPage() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isMobile = windowSize.width < 1920;
  const isPhone = windowSize.width> 360 && windowSize.width < 768;

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleNavigationToPostPage = (cardId) => {
    navigate(`/post/${cardId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hot}>
        <h1 className={styles.h1}>인기 롤링 페이퍼 🔥</h1>
        <CardList order="like" isMobile={isMobile} isPhone={isPhone} onClick={handleNavigationToPostPage}/>
      </div>
      <div className={styles.new}>
        <h1 className={styles.h1}>최근에 만든 롤링 페이퍼⭐</h1>
        <CardList isMobile={isMobile} isPhone={isPhone} onClick={handleNavigationToPostPage}/>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton onClick={() =>handleNavigationToPostPage("")} WidthMax={isMobile}>
          나도 만들어 보기
        </PrimaryButton>
      </div>
    </div>
  );
}

export default PaperListPage;
