import styles from "./MyPaperCard.module.scss";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}.${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
  }.${date.getDate() + 1 > 9 ? date.getDate() : "0" + date.getDate()}`;
}

function MyPaperCard({ message }) {
  console.log(message);
  return (
    <div className="page-wrapper">
      <div className={styles.messageCard}>
        <div className={styles.senderHeader}>
          <img src={message.profileImageURL} alt="프로필 이미지" />
          <p className={styles.sender}>From. {message.sender}</p>
          <p className={styles.relationship}>{message.relationship}</p>
        </div>
        <div className={styles.messageBorderLine}></div>
        <p className={styles.content}>{message.content}</p>
        <p className={styles.createDate}>{formatDate(message.createdAt)}</p>
      </div>
    </div>
  );
}

export default MyPaperCard;
