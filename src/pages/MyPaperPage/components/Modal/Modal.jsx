import styles from "./Modal.module.scss";
import PrimaryButton from "../../../../components/UI/PrimaryButton";
import { formatDate, setRelationship, setFont } from "../MyPaperCard";

function Modal({ onClose, message }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.senderInfo}>
          <img src={message.profileImageURL} alt="프로필 이미지" />
          <p className={styles.sender}>From.</p>
          <p className={styles.senderName}>{message.sender}</p>
          <p
            className={`${styles.relationship} ${setRelationship(
              message.relationship
            )}`}
          >
            {message.relationship}
          </p>
          <p className={styles.createDate}>{formatDate(message.createdAt)}</p>
        </div>
        <div className={styles.messageBorderLine}></div>
        <div className={styles.senderContent}>
          <p
            className={styles.content}
            style={{ fontFamily: setFont(message.font) }}
          >
            {message.content}
          </p>
        </div>
        <div className={styles.closeButtonContainer}>
          <PrimaryButton onClick={handleClose} size="sm" children="확인" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
