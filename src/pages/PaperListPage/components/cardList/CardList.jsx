import { useCallback, useEffect, useRef, useState } from "react";
import RollingPaperCard from "../rollingPaperCard/RollingPaperCard";
import {
  getCustomRecipient,
  getRecipientsList,
} from "../../../../services/api";
import styles from "./CardList.module.scss";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/css";

function CardList({ order = "" }) {
  const [list, setList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const navigateToPostPage = (id) => {
    navigate(`/post/${id}`);
  };

  const handleLoad = useCallback(async () => {
    const { results, next, previous } = await getRecipientsList({
      sort: order,
    });
    setPrevUrl(previous);
    setNextUrl(next);
    setList(results);
  }, [order]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobile(windowSize.width < 1200);
  }, [windowSize]);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // 다음 버튼 클릭 시 기존 배열에 추가
  const loadMore = async () => {
    if (nextUrl) {
      const { next, previous, results } = await getCustomRecipient(nextUrl);
      setNextUrl(next);
      setPrevUrl(previous);
      setList((prev) => {
        const newData = results.filter(
          (newItem) => !prev.some((item) => item.id === newItem.id)
        );
        return [...prev, ...newData];
      });
      if (!isMobile) {
        setTimeout(() => {
          swiperRef.current.update();
          swiperRef.current.slideNext();
        }, 100);
      }
    }
  };

  // 이전 슬라이드
  const handlePrev = async () => {
    const { next, previous } = await getCustomRecipient(prevUrl);
    setNextUrl(next);
    setPrevUrl(previous);
    swiperRef.current.slidePrev();
  };
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const handleReachEnd = () => {
    loadMore();
  };

  return (
    <>
      <div className={styles.cardList}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          slidesPerGroup={1}
          onSwiper={handleSwiper}
          spaceBetween={10}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onReachEnd={() => (!isMobile ? null : handleReachEnd())}
          breakpoints={{
            1023: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {list.map((el) => (
            <SwiperSlide
              onClick={() => navigateToPostPage(el.id)}
              key={el.id}
              className={styles.swiperSlide}
            >
              <RollingPaperCard
                name={el.name}
                messageCount={el.messageCount}
                recentMessages={el.recentMessages}
                backgroundImage={el.backgroundImageURL}
                backgroundColor={el.backgroundColor}
                topReactions={el.topReactions}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isMobile && (
          <>
            {nextUrl && (
              <button
                onClick={loadMore}
                ref={nextButtonRef}
                className={styles.customSwiperButtonNext}
              />
            )}
            {prevUrl && (
              <button
                onClick={handlePrev}
                ref={prevButtonRef}
                className={styles.customSwiperButtonPrev}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CardList;
