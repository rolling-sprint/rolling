import styles from "./MyPaperCard.module.scss";

// function formatDate(value) {
//   const date = new Date(value);
//   return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
// }

function MyPaperCard({ message }) {
  console.log(message);
  return (
    <div className="page-wrapper">
      <div className={styles.messageCard}>
        <img src={message.profileImageURL} />
        <div>
          <p>From. {message.sender}</p>
          <p>{message.relationship}</p>
        </div>
        <p>{message.content}</p>
        <p>{message.createdAt}</p>
      </div>
    </div>
  );
}

export default MyPaperCard;
