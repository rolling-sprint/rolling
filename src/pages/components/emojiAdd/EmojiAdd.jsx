import styles from "./EmojiAdd.module.scss";
import addImg from "./imgs/add.svg";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";

const EmojiAdd = ({ recipientId }) => {
  const EMOJI_DATA = {
    emoji: "",
    type: "",
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [emojiShow, setEmojiShow] = useState(false);
  const [emojiData, setEmojiData] = useState(EMOJI_DATA);

  const onClickShow = () => {
    setEmojiShow(!emojiShow);
  };

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className={styles.emoji_container}>
      <button className={styles.btn_border} onClick={onClickShow}>
        {/* 크기가 360이하면 이미지만 보이게하는 건데 제대로 작동하는지 확인할려고 768로 지정해놨음, 나중에 수정하면됨 */}
        {windowWidth <= 768 ? (
          <img src={addImg} alt="이모지추가하기" />
        ) : (
          <div className={styles.add_button}>
            <img src={addImg} alt="이모지추가하기" /> 추가
          </div>
        )}
      </button>
      <div className={styles.emoji_picker_container}>
        {emojiShow && <EmojiPicker className={styles.emoji_picker} />}
      </div>
    </div>
  );
};

export default EmojiAdd;
