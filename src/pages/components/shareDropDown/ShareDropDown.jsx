import { useState } from "react";
import styles from "./ShareDropDown.module.scss";
import shareImg from "./imgs/share.svg";

const ShareDropDown = () => {
  const [shareShow, setShareShow] = useState(false);

  const onClickShow = () => {
    setShareShow(!shareShow);
  };

  return (
    <div className={styles.share_container}>
      <button className={styles.share_btn} onClick={onClickShow}>
        <img src={shareImg} alt="공유이미지" />
      </button>
      <div className={styles.outside_container}>
        {shareShow && (
          <div className={styles.outside_share}>
            <div className={styles.share_list}>카카오톡 공유</div>
            <div className={styles.share_list}>URL 공유</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShareDropDown;
