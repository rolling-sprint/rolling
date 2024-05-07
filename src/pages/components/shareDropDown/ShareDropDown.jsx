import { useState } from "react";
import styles from "./ShareDropDown.module.scss";
import shareImg from "./imgs/share.svg";
import completedImg from "./imgs/completed.svg";
import closeImg from "./imgs/close.svg";

const ShareDropDown = () => {
  const [shareShow, setShareShow] = useState(false);
  const [toast, setToast] = useState(false);

  const onClickShow = () => {
    setShareShow(!shareShow);
  };

  const onHandleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, [5000]);
  };

  const onCloseBtn = () => {
    setToast(false);
  };

  return (
    <>
      <div className={styles.share_container}>
        <button className={styles.share_btn} onClick={onClickShow}>
          <img src={shareImg} alt="공유이미지" />
        </button>
        <div className={styles.outside_container}>
          {shareShow && (
            <div className={styles.outside_share}>
              <div className={styles.share_list}>카카오톡 공유</div>
              <div onClick={onHandleCopyURL} className={styles.share_list}>
                URL 공유
              </div>
            </div>
          )}
        </div>
      </div>
      {toast && (
        <div className={styles.toast_box}>
          <div className={styles.toast_message}>
            <img src={completedImg} alt="완료이미지" />
            URL 카피완료
          </div>
          <div>
            <img
              className={styles.closebtn}
              onClick={onCloseBtn}
              src={closeImg}
              alt="닫기이미지"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ShareDropDown;
