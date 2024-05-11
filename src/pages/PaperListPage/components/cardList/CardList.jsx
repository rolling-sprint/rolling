import { useCallback, useEffect, useRef, useState } from "react";
import RollingPaperCard from "../rollingPaperCard/RollingPaperCard";
import {
  getCustomRecipient,
  getRecipientsList,
} from "../../../../services/api";
import styles from "./CardList.module.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";

function CardList({ order = "", isMobile, isPhone, onClick}) {
  const [cardList, setCardList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);


  const handleLoad = useCallback(async () => {
    const { results, next, previous } = await getRecipientsList({
      sort: order,
    });
    setPrevUrl(previous);
    setNextUrl(next);
    setCardList(results);
  }, [order]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  // 다음 버튼 클릭 시 기존 배열에 추가
  const loadMoreCards = async () => {
    if (nextUrl) {
      const { next, previous, results } = await getCustomRecipient(nextUrl);
      setNextUrl(next);
      setPrevUrl(previous);
      setCardList((prev) => {
        const newData = results.filter(
          (newItem) => !prev.some((item) => item.id === newItem.id)
        );
        return [...prev, ...newData];
      });
    }
  };


  const handleNextButtonClick = async () => {
      if (!isMobile) {
        setTimeout(() => {
          swiperRef.current.update();
          swiperRef.current.slideNext();
        }, 100);
        return;
      }
      loadMoreCards();
  }
  // 이전 슬라이드
  const handlePrevButtonClick = async () => {
    const { next, previous } = await getCustomRecipient(prevUrl);
    setNextUrl(next);
    setPrevUrl(previous);
    swiperRef.current.slidePrev();
  };

  const handleReachEnd = () => {
    loadMoreCards();
  };

  const swiperSettings = {
    className: styles.swiper,
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
    },
    modules: [Navigation],
    slidesPerView: "auto",
    slidesPerGroup: 1,
    onSwiper: handleSwiper,
    spaceBetween: 20,
    onReachEnd: () => (!isMobile ? null : handleReachEnd()),
    breakpoints: {
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };

  return (
    <>{cardList ? 
      <div className={styles.cardList}>
        <Swiper {...swiperSettings}>
          {cardList.map((cardInfo) => (
            <SwiperSlide
              onClick={() => onClick(cardInfo.id)}
              key={cardInfo.id}
              className={styles.swiperSlide}
            >
              <RollingPaperCard
                name={cardInfo.name}
                messageCount={cardInfo.messageCount}
                recentMessages={cardInfo.recentMessages}
                backgroundImage={cardInfo.backgroundImageURL}
                backgroundColor={cardInfo.backgroundColor}
                topReactions={cardInfo.topReactions}
                isPhone={isPhone}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isMobile && (
          <>
            {nextUrl && (
              <button
                onClick={handleNextButtonClick}
                ref={nextButtonRef}
                className={styles.customSwiperButtonNext}
              />
            )}
            {prevUrl && (
              <button
                onClick={handlePrevButtonClick}
                ref={prevButtonRef}
                className={styles.customSwiperButtonPrev}
              />
            )}
          </>
        )}
      </div>:<div className={styles.initializeCardList}/>}
    </>
  );
}

export default CardList;
